let input = document.querySelector("input");
//getting the input element by decleariation
let imagesHolder = document.getElementById("imagesHolder");




const findGiffy = e =>{
    //the function that runs the fetch and conversion to json
    console.log("looking", e.target.value);
    //logging the value of the target of the "e"(event) from the keypress
    fetch("https://api.giphy.com/v1/gifs/search?api_key=5DpBIKt6t2wx0Kr8uJLuUMB3xYuVPbqU&q=smh&limit=25&offset=0&rating=R&lang=en"). //fetching the Api from the server
    then(res => res.json()). //converting the result to jsn format
    then(result => { // functioning the result to do sometjing and in this case it it just to console.log the the value if the search  
        console.log(result, "result"); 
        
        result.data.forEach(data => {
            //after getting the result this function goes through with "forEach", to effect the change on the data that requested from the array 
            let image = data.images.downsized_large;
            //declaring the element image for better typography instead of writing the whole thing everytime 
            let img = document.createElement("img");
            //creating the "img" that will house the rsults when I want to append it to the node
            img.src = "https://media3.giphy.com/media/9DJtFRgk0tOla/giphy.gif?cid=202df742ae0bde770d38181c3091e116ea7ca7d66107d866&rid=giphy.gif";
            //declaring the source of the image
            img.src = image.url;
            //assigning the url of the image to the image source
            imagesHolder.appendChild(img);
            //appending the image element that was created to the "imagesHolder" node
        });
        
    })
}; //on every search this function block runs there by making this call


//declaring the target to the function 
input.onkeypress = findGiffy;





 





// let but = document.getElementById("button");
// let press = () => {
//     console.log("working");
// };
// but.addEventListener("click", press);