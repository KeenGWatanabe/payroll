
  /* When the user clicks on the button, toggle between hiding and showing the dropdown content */ 
  function myFunction() {   
    document.getElementById("myDropdown").classList.toggle("show"); 
    }  
  function filterFunction() {   
    var input, filter, ul, li, a, i;   
    input = document.getElementById("myInput");   
    filter = input.value.toUpperCase();   
    div = document.getElementById("myDropdown");   
    a = div.getElementsByTagName("a");   
    for (i = 0; i < a.length; i++) {     
            txtValue = a[i].textContent || a[i].innerText;     
            if (txtValue.toUpperCase().indexOf(filter) > -1) { 
                    a[i].style.display = "";     
                } else {       
                    a[i].style.display = "none";     
                }   
        } 
    }
    
    function myFunction1() {   
        document.getElementById("myDropdown1").classList.toggle("show"); 
        }  
    function filterFunction1() {   
        var input, filter, ul, li, a, i;   
        input = document.getElementById("myInput1");   
        filter = input.value.toUpperCase();   
        div = document.getElementById("myDropdown1");   
        a = div.getElementsByTagName("a");   
        for (i = 0; i < a.length; i++) {
                 txtValue = a[i].textContent || a[i].innerText;     
                 if (txtValue.toUpperCase().indexOf(filter) > -1) { 
                    a[i].style.display = "";     
                } else {       
                    a[i].style.display = "none";     
                }   
            } 
        }
    
    function toggleMe(a){
        var e=document.getElementById(a);
            if(!e)return true;
        if(e.style.display=="none"){
        e.style.display="block"
            } else {
                e.style.display="none"
            }
        return true;
        }
