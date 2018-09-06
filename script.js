function initialize(){


$.ajax({
    url:"https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=86694bc920bd46beabda5aeb68c1ba6f",
    success: function(data){
        console.log(data);
        for(let i=0; i<9; i++){
            document.querySelector(".news1").innerHTML += 
        
        `    <div>
            <h2></h2>
             <div class="img1" style="background-image: url(${data.articles[i].urlToImage});" ></div>
            <h4>${data.articles[i].description}</h4>
            <a href = "${data.articles[i].url}">
            <button>Detail's</button>  
            </a>
        </div>`
            
        }
    }
    
})
}
function showDetails() {
    document.querySelector(".more-info").style.transition = `1s`;
    document.querySelector(".more-info").style.display = "block";
    document.querySelector(".check").innerHTML = `<i onclick='hideDetail()' class="fas fa-chevron-circle-up"></i>`;
}
function hideDetail() {
    document.querySelector(".more-info").style.display = "none";
    document.querySelector(".check").innerHTML = `<i onclick="showDetails()" class="fas fa-chevron-circle-down"></i>`;
    
}