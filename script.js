const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.style.position = "fixed";

noBtn.style.left = "50%";
noBtn.style.top = "60%";

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        ">
            <h1 style="color:red;">
                Good we must stay like that twin, and a reminder : i'm older by 4months and 7days
            </h1>

            <video
                src="video.mp4"
                autoplay
                loop
                muted
                controls
                style="
                    margin-top: 15px;
                    width: 650px;
                    max-width: 90%;
                    border-radius: 12px;
                ">
            </video>
        </div>
    `;
})



noBtn.addEventListener("click", () => {
    document.body.innerHTML =`
        <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        ">
            <h1 style="color:red;">
                no you're not gfys and press yes, w9 s7ablih life ad7k m3ah dima (gonna cry [but yk who else may cry?])
            </h1>

            <video
                src="fool.mp4"
                autoplay
                loop
                muted
                controls
                style="
                    margin-top: 15px;
                    width: 650px;
                    max-width: 90%;
                    border-radius: 12px;
                ">
            </video>
        </div>
    `;
});

