


    document.querySelector("#search").addEventListener("search",function(){
        var find=document.querySelector("#search").value;
        // console.log(find)
        search(find)
    });
    function search(find){
        const response = fetch(`http://www.omdbapi.com/?s=${find}&apikey=6be8c429`).then((res)=>{
            res.json().then((data)=>{
           var list=data.Search;
           if(list==undefined){
            reject();
           }
           document.querySelector("#container").innerHTML="";
           document.querySelector(".myImage").innerHTML="";
           list.forEach((movie) => {
               var box=document.createElement("div")

               var img=document.createElement("img");
               img.setAttribute("src",movie.Poster)
                var name=movie.Poster;
               var title=document.createElement("h2");
               title.innerText=movie.Title;

               var year=document.createElement("p");
               year.innerText="Year: "+movie.Year;

               var rating=document.createElement("p");

               var ratingurl=fetch(`http://www.omdbapi.com/?t=${movie.Title}&apikey=6be8c429`);

               ratingurl.then((res)=>{
                res.json().then((data)=>{
                    
                    rating.innerText="Imdb Rating: "+data.imdbRating;
                    if(data.imdbRating>8.5)
                    {
                        var tag=document.createElement("div");
                        tag.setAttribute("id","tag")
                        tag.innerText="RECOMMENDED";
                        box.append(img,title,year,rating,tag)
                    }
                    else
                    {
                        box.append(img,title,year,rating)
                    }
                })
            })

               

               
               document.querySelector("#container").append(box)
           })
    
        }).catch(()=>{
            var image = document.getElementById("myImage").src="https://cdn.dribbble.com/users/1291858/screenshots/6321699/desert-page_scene_sfx_v2.gif";
            
        })
    })
}