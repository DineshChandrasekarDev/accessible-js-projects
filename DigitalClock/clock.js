const toggleFormat=document.getElementById("toggleFormat");
const clockDisplay=document.getElementById("clockDisplay");
const liveRegion=document.getElementById("liveRegion");
const togglelive=document.getElementById("togglelive");
let is24hrs = true;
function formatTime(date)
{
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(!is24hrs){
        let ampm=hours>=12?"pm":"am";
        hours=hours%12||12;
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${pad(ampm)}`;

    }
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

}
function pad(num)
{
    return num.toString().padStart(2,"0");
}
function updateClock(){
    const now=new Date();
    clockDisplay.textContent=formatTime(now);
}
setInterval(updateClock,1000);
updateClock();
toggleFormat.addEventListener("click",()=>{
    is24hrs=!is24hrs
    toggleFormat.textContent=is24hrs?"Switch to 12 Hour Format":"Switch to 24 Hour Format";

});
togglelive.addEventListener("click",()=>{
    liveRegion.textContent=`Currrent time is ${clockDisplay.textContent}`;
});