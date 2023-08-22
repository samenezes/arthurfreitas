import Api from './api.json'

function pagina ()
{
return (
    <>

<h1>API de Questões</h1>
<h4> Te amo professora! </h4>
    <div id="memes-container"></div>
    <button onClick={getMemes()}>start</button>

    </>
)

function getMemes() {
    fetch('https://opentdb.com/api.php?amount=30&category=18')
        .then(response => response.json())
        .then(data => {
            const memes = data.results;
            const memesContainer = document.getElementById("memes-container");

            memes.forEach(results => {
                const memeContainer = document.createElement("div");
                memeContainer.classList.add("meme-container");

                const memeImage = document.createElement("h1");
                memeImage.classList.add("meme-image");
                memeImage.innerText = results.difficulty;
                memeContainer.appendChild(memeImage);

                const memeName = document.createElement("div");
                memeName.classList.add("meme-name");
                memeName.innerText = results.question;
                memeContainer.appendChild(memeName);

                const memeCaption = document.createElement("div");
                memeCaption.classList.add("meme-caption");
                memeCaption.innerText = results.correct_answer;
                memeContainer.appendChild(memeCaption);

                memesContainer.appendChild(memeContainer);
            });
        })
      
}

}
export default pagina