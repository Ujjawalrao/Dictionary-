let input = document.querySelector('input');
let btn = document.querySelector('button');
let meaning = document.querySelector('.meaning-cnt')

document.querySelector('form').addEventListener('submit', (e) => e.preventDefault() )

function getMeaning() {
    btn.addEventListener('click', async () => {
       let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
       res = await res.json()
       console.log(res[0].meanings[0].definitions[0].definition);
       let output = res[0].meanings[0].definitions[0].definition ; 
       meaning.innerHTML = output;
    })
    
}
getMeaning()
