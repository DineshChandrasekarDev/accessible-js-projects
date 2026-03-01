   const initialvalue=document.getElementById("initial-value");
        const decreaseBtn=document.getElementById("decreaseBtn");
        const increaseBtn=document.getElementById("increaseBtn");
        const resetBtn=document.getElementById("resetBtn");
        let count=0;
        function updateCount(){
           initialvalue.textContent=count;
            if(count===0){
                decreaseBtn.disabled=true;
                decreaseBtn.setAttribute("aria-disabled","true");
            }
            else{
                decreaseBtn.disabled=false;
                decreaseBtn.setAttribute("aria-disabled","false");
                
            }
            
        }
     decreaseBtn.addEventListener("click",() =>{
        count--;
        updateCount();

     });
     increaseBtn.addEventListener("click",()=>
    {
        count++;
        updateCount();
    });
    resetBtn.addEventListener("click",()=>{
        count=0;
        updateCount();
    });