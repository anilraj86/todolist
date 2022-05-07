
try
{
function readMyTodoList(){
     var xhttp=new XMLHttpRequest();
     xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200)
        {
            var response=JSON.parse(this.responseText);
            var todoId="<table class='table table-success table-striped'>"
              + "<thead> <tr> <th scope='col'>ID</th> <th scope='col'>Title</th> "
               +" <th scope='col'>Status</th> </tr> </thead> <tbody> ";
            var todoTitle="";
            var todoStatus =false;
            for(var i=0;i<response.length;i++)
            {
                var checkstatus="";
                if(response[i].completed==true)
                {checkstatus = "<input type='checkbox' id='doStatus' checked disabled>"}
                 else
                {checkstatus = "<input type='checkbox' id="+ i +" onchange='doStatusclick("+ i +")'>"} 

                todoId +=" <tr> <th scope='row'>"+response[i].id +  "</th> <td>"+ response[i].title 
                         + "</td> <td>" + checkstatus + " </td> </tr>"
                
            }

            document.getElementById('myTodoList').innerHTML=todoId + "</tbody> </table>";
        }
     }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
}
catch (ee){alert("error loading");}

var doStatcount=0;
function doStatusclick(checkId){    
var checkedStat=document.getElementById(checkId);
if(checkedStat.checked==true)
{
    doStatcount++;
}
else
{
    doStatcount--;
  
}
checkCounter();
}

function checkCounter(){

let promise =new Promise(function(){
    if(doStatcount==5)
    {
        alert("Congrats. 5 Tasks have been Successfully Completed.!!");
        
    }
})
promise.then(function(s){
    alert(s);
})
}