let input = document.getElementById("inputField");
let imagesHolder = document.getElementById("imagesHolder");
let search = document.getElementById("searchButton"); 


const findGiffy = () => {
    input = input.value;
    console.log( input);
    fetch("https://api.giphy.com/v1/gifs/search?api_key=5DpBIKt6t2wx0Kr8uJLuUMB3xYuVPbqU&q=" + input + "&limit=20&offset=0&rating=R&lang=en"). //fetching the Api from the server WITH the "e.target.value" serving as the value of what ever you type
    then(res => res.json()).
    then(result => {  
        console.log(result, "result"); 
        result.data.forEach(function(dami) { 
            let img = document.createElement("img");
            img.width = 350;
            img.height = 300;
            img.src = dami.images.downsized.url;
            imagesHolder.appendChild(img);
        });
        
    })
}; 


// input.onkeypress = findGiffy;

let resetButton  = () => {
    let input = document.getElementById("inputField");
    input.value = " ";
}

let reset = document.getElementById("resetButton");
reset.addEventListener("click", resetButton);
search.addEventListener("click", findGiffy);


































// let input = document.getElementById("inputField");
// //getting the input element by decleariation
// let imagesHolder = document.getElementById("imagesHolder");
// //declearing the parent node
// let search = document.getElementById("Search"); 

// const searchFunction = () =>{
//     console.log("www");
//     console.log(input.value);
// };





// const findGiffy = e => {
//     //the function that runs the fetch and conversion to json
    
//     console.log( e.target.value);
//     //logging the value of the target of the "e"(event) from the keypress
//     fetch("https://api.giphy.com/v1/gifs/search?api_key=5DpBIKt6t2wx0Kr8uJLuUMB3xYuVPbqU&q=" + e.target.value + "&limit=&offset=0&rating=R&lang=en"). //fetching the Api from the server WITH the "e.target.value" serving as the value of what ever you type
//     then(res => res.json()). //converting the result to jsn format
//     then(result => { // functioning the result to do sometjing and in this case it it just to console.log the the value if the search  
//         console.log(result, "result"); 
        
//         result.data.forEach(function(dami) { //declaring the parameter as dami which is an array of objects
//             //after getting the result this function goes through with "forEach", to effect the change on the data that requested from the array 
//             let img = document.createElement("img");
//             //creating the "img" that will house the rsults when I want to append it to the node
//             img.width = 350;
//             img.height = 300;
//             img.src = dami.images.downsized.url;
//             //declaring the source of the image and getting the source from inside the array of object which is dami
//             imagesHolder.appendChild(img);
//             //appending the image element that was created to the "imagesHolder" node
//         });
        
//     })
// }; //on every search this function block runs there by making this call


// //declaring the input keypress to the function 
// input.onkeypress = findGiffy;


// let resetButton  = () => {
//     input.value = " ";
// }
// //function to reset the input value

// let reset = document.getElementById("button");
// reset.addEventListener("click", resetButton);
// //adding event listener to the reset button


 

// search.addEventListener("click", searchFunction );


