        function myFunction() {
           var x = document.getElementById("myTopnav");
           if (x.className === "topnav") {
             x.className += " responsive";
           } else {
               x.className = "topnav";
           }
          }
          var target_mili_sec = new Date("June 2, 2025").getTime();
          function timer() {
              var now_mili_sec = new Date().getTime();
              var remaining_sec = Math.floor( (target_mili_sec - now_mili_sec) / 1000 );

              var day = Math.floor(remaining_sec / (3600 * 24));
              var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
              var min = Math.floor((remaining_sec % 3600) / 60);
              var sec = Math.floor(remaining_sec % 60);

              document.querySelector("#day").innerHTML = day;
              document.querySelector("#hour").innerHTML = hour;
              document.querySelector("#min").innerHTML = min;
              document.querySelector("#sec").innerHTML = sec;
          }

          setInterval(timer, 1000); //1000 it means 1 sec



