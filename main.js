let btnstart = document.getElementById('btnstart').addEventListener('click', start)
language(),listenerToggle();

function start(){
        document.getElementById('btnstart').style.display = 'none';
        document.getElementById('imgContainer').className = 'imgContainer1';        
        setTimeout(() => {
            document.getElementById('titleContainer').className = 'title-container1';
                      
            }, 2900);     

        setTimeout(() => { 
            document.getElementById('info').className = 'info-container1';
            document.getElementById('exp').className = 'exp-container1';
            document.getElementById('skills').className = 'skills-container1';
            document.getElementById('edu').className = 'edu-container1';
            document.getElementById('iconContainer').className = 'icon-container1';        
             }, 1500);

    setTimeout(() => {        
        document.getElementById('iconContainer').style.display = 'flex';
        document.getElementById('iconContainer').style.transition = 'all 4s';
        document.getElementById('dataContainer').style.display = 'flex';
        document.getElementById('dataContainer').style.transition = 'all 4s'; 
        ;
         }, 5200);
    }

    
    function language(){
        if(window.location.pathname == "/Resume/index.html"){
            document.getElementById('spanishBtn').style.border = '2.5px solid rgb(255, 209, 5)';
            document.getElementById('spanishBtn').style.borderRadius = '25px';
            document.getElementById('spanishBtn').style.color ='rgb(255, 209, 5)';
            
        }
        if ((window.location.pathname == "/Resume/indexen.html")){
            document.getElementById('englishBtn').style.border = '2.5px solid rgb(255, 209, 5)';
            document.getElementById('englishBtn').style.borderRadius = '25px';
            document.getElementById('englishBtn').style.color ='rgb(255, 209, 5)';
        }
    }
    
    function listenerToggle(){
        document.getElementById('edu').addEventListener('click', () =>{
            toggleContainer();
            titleToggle()                      
        })
    }
      


    function toggleContainer(){
        if (document.getElementById('edu-toggler').className == 'educacion-oculta'){
             document.getElementById('edu-toggler').className = 'educacion-mostrar';
        }
        else if (document.getElementById('edu-toggler').className == 'educacion-mostrar'){
            document.getElementById('edu-toggler').className = 'educacion-oculta';
       }
       
         
        }
        
   function titleToggle(){
        if (document.getElementById('edu-title').className == 'edu-title-normal')
        {document.getElementById('edu-title').className = 'edu-title-mostrar';
            
        }
        else if (document.getElementById('edu-title').className == 'edu-title-mostrar')
            {document.getElementById('edu-title').className = 'edu-title-normal';

        } 

   }     

   function autoCloseEdu(){
    document.getElementById('edu-title').className = 'edu-title-normal';
    document.getElementById('edu-toggler').className = 'educacion-oculta';
   }

