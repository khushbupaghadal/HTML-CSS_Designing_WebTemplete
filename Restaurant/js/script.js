let multi_color = document.querySelectorAll(".multi_color_div");
        console.log(multi_color);

        multi_color[0].addEventListener('click' , function(){
            multi_color[0].classList.toggle("him");
        })

        let heading = document.getElementById("header");
        let scroll_top = document.getElementsByClassName("scroll")[0];
        
        window.addEventListener('scroll' , function(){
            if(window.pageYOffset > 210)
            {
                heading.style.cssText = "background-color:white; box-shadow: 0 5px 9px 3px rgba(0 ,0 , 0 ,0.7);"
                if(window.pageYOffset > 530)
                {
                    scroll_top.style.display = "block";
                    
                }
                else{
                    scroll_top.style.display = "none";
                }
            }
            else{
                heading.style.cssText =  "background-image: linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(255,255,255,0.8) 50%,rgba(0,0,0,0) 100%);";
            }
          })  
            function btnclick(){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }

            function btnclick(a, b , c)
            {
                let root = document.querySelector(":root");
                root.style.setProperty("--primary-color5", a);x
                root.style.setProperty("--primary-color6", b);
                root.style.setProperty("--primary-color7", c);
                root.style.setProperty("--primary-color8", a);
                root.style.setProperty("--primary-color9", b);
                root.style.setProperty("--primary-color10", c);
                root.style.setProperty("--primary-color11", a);
                root.style.setProperty("--primary-color12", b);
                root.style.setProperty("--primary-color13", c);
                root.style.setProperty("--primary-color14", a);
                root.style.setProperty("--primary-color15", b);
                root.style.setProperty("--primary-color16", c);
            }