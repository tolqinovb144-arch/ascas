
    const notifbox =document.getElementById("notif-box");



    function korsat(rang,yozuv){
        const div =document.createElement("div");
        div.classList.add("notif");
        div.style.backgroundColor=rang;
        div.innerHTML=`
            <p>${yozuv}</p>
            <button class="closebtn">x</button>
        `;
        notifbox.prepend(div);
    }
    setTimeout(() => {
        notifbox.removeChild(div);
    }, 3000);

    function ochir(e){
        notifbox.removeChild(e.parentNode);
    }