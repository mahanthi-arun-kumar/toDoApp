document.getElementById("bt1").addEventListener("click",function()
{
    event.stopPropagation();
    document.getElementById("flex-container").style.display="flex";
}
)
document.getElementById("me").addEventListener("click",function()
{
    document.getElementById("flex-container").style.display = 'none';
}
)



/* function setVisibility(event, id) {
    if ( document.getElementById('bt1').value == 'Hide Layer'  ) 
     {
        console.log(id);
        document.getElementById('bt1').value = 'Show Layer'; 
        document.getElementById(id).style.display = 'none';
       /* id.stopPropagation(); 
    }
   /*   else if(document.getElementById('me').value == 'Hide Layer' && document.getElementById('bt1').value != 'Show Layer'  )
      {
        console.log();   
        document.getElementById(id).style.display = 'none';
        
      }  
      
      
    else {
        console.log(id);
        document.getElementById(id).style.display = 'flex';
        document.getElementById('bt1').value = 'Hide Layer';
        /* id.stopPropagation(); 
    }
    debugger;
}

*/

   /*  else
     {
         document.getElementById(id).style.display = 'none';
         
     }
     */

/* $('html').click(function() {
    $('#flex-container').hide();
 })

 $('#mouse').click(function(e){
     e.stopPropagation();
 });  

$('#bt1').click(function(e) {
 $('#flex-container').toggle();
 }); */
