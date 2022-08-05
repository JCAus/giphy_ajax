console.log("Let's get this party started!");
let gallery = document.querySelector('.gifBox');

async function getGifByType(giftype){
    try{
        
        let gif = document.createElement('img');
        gif.setAttribute('src', '');
        gif.setAttribute('class', 'posted');
        let gifUrl = `http://api.giphy.com/v1/gifs/search?q=${giftype}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
        const res = await axios.get(gifUrl);
        let numOfGifs = res.data.data.length;
        let randIdx = Math.floor(Math.random() * numOfGifs);
        gif.src = res.data.data[randIdx].url;
        gallery.append(gif);
    }
    catch{alert('Try a different kind of gif!')}

}

const searchBtn = document.querySelector('.search');
const search = document.querySelector('#gifInput');
const deleteBtn = document.querySelector('.delete');
searchBtn.addEventListener("click", function(e){
    e.preventDefault();
    getGifByType(search.value);
    search.value = '';
});
deleteBtn.addEventListener('click', function(e){
    e.preventDefault();
    gallery.innerHTML = '';
})
    


// async function getGif(){
//     let res = await axios.get('http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym');
//     console.log(res);
// }
// getGif();