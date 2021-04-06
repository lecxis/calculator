
        var display=document.querySelector('#display');
        var value= display.value;
        var clear=false;

    document.querySelectorAll('.number').forEach((button)=>{
        button.addEventListener("click",
            function(){
                if(clear){
                    value =button.innerHTML
                    clear=false;
                }
                else{
                    value+=button.innerHTML;
                }
                
                display.value=value;
                }
        );
    }
    );
    document.querySelectorAll('.opp').forEach((button)=>{
        button.addEventListener("click",
            function(){
                    value+=button.innerHTML;
                    clear=false;
                
                display.value=value;
                }
        );
    }
    );
    document.querySelector('.equal').addEventListener("click",
    function(){
                value=value.replace(/x/g,"*");
                value=eval(value);
                display.value=value;
                clear=true;
                }
        );
        document.querySelector('.clear').addEventListener("click",
    function(){
                if(clear){
                    value="";
                    display.value=value;
                }
                else{
                    value=value.substring(0, value.length-1);
                display.value=value;
                }
                }
                
        );
        var clearTime;
        document.querySelector('.clear').addEventListener("mousedown",
    function(){
       
        console.log('mouse is down i repeat')
        clearTime=setTimeout(() => {
            value="";
             display.value=value;
        },2000);
    }
        );

        document.querySelector('.clear').addEventListener("mouseup",
    function(){
        console.log('mouse is upi repeat');
        if(clearTime){
            clearTimeout(clearTime); 
        }
    }
        );
        document.querySelector('.ce').addEventListener("click",
    function(){
                    value="";
                    display.value=value;
                    clear=false;
    }
        );

       
            document.querySelector('.clear').addEventListener("touchstart",
        function(){
           
            console.log('mouse is down i repeat')
            clearTime=setTimeout(() => {
                value="";
                 display.value=value;
            },2000);
        }
            );

            document.querySelector('.clear').addEventListener("touchend",
            function(){
                console.log('mouse is upi repeat');
                if(clearTime){
                    clearTimeout(clearTime); 
                }
            }
                );
    