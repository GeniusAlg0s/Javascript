/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 var tstart = new Date().getTime();
       
       function getRandomColor() {
               var letters = '0123456789ABCDEF'.split('');
                 var color = '#';
                for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
             return color;
                    }

        function newshape(){
            
            var top = Math.random() * 400;
            
            var left = Math.random() * 400;
            
            var width = (Math.random() * 200) + 100;
            
            var height = (Math.random() * 200) + 100;
            
            if(Math.random() > 0.5){
                
               document.getElementById("shape").style.borderRadius = "50%" ;
            } else{
                document.getElementById("shape").style.borderRadius = "0%" ;
            }
            
            
              document.getElementById("shape").style.backgroundColor = getRandomColor();
                      
            document.getElementById("shape").style.width = width + "px";
             document.getElementById("shape").style.height = height + "px";
            
             document.getElementById("shape").style.top = top + "px";
             
        document.getElementById("shape").style.left = left + "px";
          
        document.getElementById("shape").style.display = "block";
           
        tstart = new Date().getTime();
        }
        function delayappear(){
        setTimeout(newshape, Math.random() * 2000);    
        }
       delayappear();
          document.getElementById("shape").onclick = function(){
            
        document.getElementById("shape").style.display = "none"; 
              var end = new Date().getTime();
              
             var overalltime = (end - tstart) / 1000;
                   document.getElementById("timetaken").innerHTML = overalltime + " seconds";
                  
                     delayappear();
                     }
