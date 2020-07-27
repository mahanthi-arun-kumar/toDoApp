function setVisibility(id) {
    id.stopPropagation();
    if ( document.getElementById('bt1').value == 'Show Layer'  ) 
     {
        document.getElementById(id).style.display = 'flex';
        id.stopPropagation();
        /* document.getElementById('bt1').value = 'Hide Layer'; */
        
     }
     else
     {
        document.getElementById(id).style.display = 'none';
     }
    }
    