const notifBox=document.getElementById("notif-box");
function show(rang,yozuv){
    const div=document.createElement("div");
    div.classList.add("notif");
    div.style.backgroundColor=rang;
    div.innerHTML=`
    <p>${yozuv} </p>
    <button onclick="ochir(this)" class="close">x</button>
    `
    notifBox.prepend(div);
    setTimeout(()=>{
notifBox.removeChild(div);
    },5000)
}
function ochir(e){
notifBox.removeChild(e.parentNode)
}