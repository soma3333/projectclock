
// date=date.toLocaleString();

setInterval(update,1);


 function update(){
    let date=new Date();
document.getElementById("time").innerHTML=formattime(date);
function formattime(date){
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let  amorpm=  hr>=12?"pm":"am";
    hr=(hr%12)||12;
    hr=formatzero(hr);
    min=formatzero(min);
    sec=formatzero(sec);
    return `${hr}:${min}:${sec} ${amorpm}`;

}}

function formatzero(time){
    time=time.toString();
    return time.length<2?"0"+time:time;
}


