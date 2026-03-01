const generateBtn=document.getElementById("generateBtn");
const liveRegion=document.getElementById("liveRegion");
const colorId=document.getElementById("color-id");
const copyBtn=document.getElementById("copyBtn");
const colorbox=document.getElementById("colorbox");

function Randomcolor(){
    const letters="0123456789ABCDEF"
    let color="#";
    for(let i=0;i<6;i++){
        color += letters[Math.floor(Math.random() *16)];
    }
    return color;

}

function generatenewColor(){
    const newColor=Randomcolor();
    document.body.style.backgroundColor=newColor;
    colorbox.style.backgroundColor=newColor;
    colorId.textContent=newColor;
    liveRegion.textContent="New Color is Generated "+ newColor;


}
generateBtn.addEventListener("click",generatenewColor);

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(colorId.textContent);
    liveRegion.textContent="Color Code copied to clipboard"
    alert("Color Code copied to clipboard")

});
document.addEventListener("keydown",(e)=>{
    if(e.code==="Space"){
        e.preventDefault();
        generatenewColor();
    }
})



