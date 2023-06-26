const interval = setInterval(()=>{
    const header = document.querySelector("._3WByx")
    if(header){
        console.log(header);
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "2X"
        button.classList.add("button")
        header.appendChild(button)

        button.addEventListener("click", ()=>{
            const audios = document.querySelectorALL("")

            audios.forEach((audio) => {
                console.log(audios);
                audio.playbackRate = 2
            });
        })
    }
},1000)
