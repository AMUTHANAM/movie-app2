

let imglink= "https://image.tmdb.org/t/p/w500/"


let urllink = " https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9ccfb971e2a6651bed5113fb46e7f431 "
   //console.log(urllink) 
//let element = document.getElementById('element')
let mainDiv = document.getElementById('mainDiv')
//console.log(mainDiv)

async function getelement(){
    let data= await fetch(urllink )
    let res= await data.json()
    //console.log(res)
    console.log(res.results)
    fetchapidata(res.results)
   
}
getelement()



function fetchapidata(movie){
   // mainDiv.innerHTML= " "
    console.log(movie)
    movie.map((element)=>{
        console.log(element)
        var movieDiv=document.createElement('div')
        movieDiv.classList.add('col' , 'movie')
        movieDiv.innerHTML= 
         `
        <div class="card ">
        <img src="${imglink+element.poster_path} " class="card-img-top" alt="...">
        <div class="card-body bg-black p-0 m-1">
            <div class="d-flex justify-content-between" id="text">
          <h5 class="card-title">${element.title}</h5>
          <h5 class="card-title color">${element.vote_average}</h5>
        </div>
            <div class="card card-header overview">
                <p>overview</p>
          <p class="card-text ">${element.overview}</p>
          
          </div>

        </div>
      </div>
    
        `
        mainDiv.append(movieDiv)

    })


}


