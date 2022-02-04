
const forms =document.querySelector('#Seacrched-form')


forms.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const searchedText=forms.elements.query.value
    const res=await axios.get(`https://api.tvmaze.com/search/shows?q=${searchedText}`)
    makeImages(res.data)  

})
const makeImages=(shows)=>{
    for(let result of shows)
    {
    const img=document.createElement('IMG');
    img.src=result.show.image.medium;
    document.body.append(img);

    }
    
}


