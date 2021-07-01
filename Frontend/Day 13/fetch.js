// fetch('https://api.github.com/users/boi123212321')
// .then(res => res.json())
// .then(data => console.log(data))

const btn = document.querySelector('.button');
let img = document.querySelector('img');
let quote = document.querySelector('.quote');


function getdata() {
    fetch('https://meme-api.herokuapp.com/gimme')
    .then(res1 => res1.json())
    .then(data => {
        let x = Math.ceil(Math.random()*100);
        if(x%2!=0)
            data.nsfw=true;
        img.src=data.url;
    });
    fetch('https://api.quotable.io/random')
    .then(res2 => res2.json())
    .then(data => {
        quote.innerHTML='Random Quote: "'+data.content'"';
    });
}

btn.addEventListener('click', () => {
    getdata();
});
