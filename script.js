const randomsecs = Math.floor(Math.random() * 7 + 1) * 1000;
console.log(randomsecs);

const hackingText = document.querySelector('p');
 
let hackingArray = ["Initializing Hacking","Readidng your files","Password Files Detected","sending all passwords and all files to the server","Cleaning up"];

let index = 0;

setInterval(()=>{
    if(index < hackingArray.length){
        hackingText.classList.add('loading');
     hackingText.innerHTML = `${hackingArray[index++]} `;
    }
    else if(index === 5){
        hackingText.classList.remove('loading');
        hackingText.innerHTML = `Cleaned Your PC Data`;
    }
    
    
},randomsecs)



