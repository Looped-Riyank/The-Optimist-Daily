let http = new XMLHttpRequest();

http.open("get", "positive.json" , true);

http.send();

http.onload = function(){

    if(this.readyState == 4 && this.status == 200){

        let positive = JSON.parse(this.responseText);

        let output = "";

        for(let item of positive){

            output += `


        <div class="item">
            <div class="animate-box">
                <a href="${item.Thumbnail}" class="image-popup fh5co-board-img"><img src="${item.Thumbnail}" alt="Image"></a>
            </div>
            <div class="fh5co-desc">${item.Title}</div>
        </div>
            
            
            
            `
              
        }
        
        document.querySelector(".item").innerHTML = output
    }
}

