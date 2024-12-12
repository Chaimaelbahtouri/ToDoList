/* part of html */
let element = document.createElement("div");
let element2 = document.createElement("div");
let imagebackground= document.createElement("img");

let input = document.createElement("input");
let button = document.createElement("button");

let ul = document.createElement("ul");

/* set part elements * */
input.setAttribute("placeholder", "What do you need to do?");
input.type = "text";

/* part of append all* */

element2.appendChild(ul);
element2.appendChild(input);
element2.appendChild(button);

element.appendChild(element2);
document.body.appendChild(element);
/*--------------------------------------------*/

/*part of css styling */
 /* div2 tyiling */
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
element2.style.display = "block";

input.style.border = "3px solid LightPink";
input.style.borderRadius = "5px";
input.style.padding = "5px 0px 5px 5px";
input.style.color = "black";


button.style.border = "3px solid LightPink";
button.style.borderRadius = "5px";
button.style.padding = "5px 5px 5px 5px";
button.style.margin = "0px 0px 0px 5px";
button.innerText = "Add Task"; /* innertext with button placeholdr with input */
button.style.color = "gray";


document.body.style.backgroundImage = "url('img/bg.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.appendChild(imagebackground);
/* Styling for the ul */
ul.style.maxHeight = "300px";
ul.style.overflowY = "auto";
ul.style.width = "300px";
ul.style.border = "3px solid LightPink";
ul.style.borderRadius = "10px";
ul.style.padding = "10px";
ul.style.margin = "10px";
ul.style.backgroundColor = "#fff";



/* Styling for the input box */
input.style.border = "3px solid LightPink";
input.style.borderRadius = "10px";
input.style.padding = "10px";
input.style.width = "250px";
input.style.color = "black";
input.style.fontSize = "15px";
input.style.color = "#696969";
input.style.fontWeight = "600";

input.addEventListener("focus", function() {
    input.style.outline = "none";
    input.style.border = "3px solid LightPink";
});


/* Styling for the button */
button.style.border = "3px solid LightPink";
button.style.borderRadius = "10px";
button.style.padding = "10px 15px";
button.style.marginTop = "10px";
button.style.color = "#696969";
button.style.fontWeight = "600";
button.style.backgroundColor = "LightPink";
button.style.fontSize = "14px";
button.style.cursor = "pointer";
button.addEventListener("mouseover",function(){
    button.style.backgroundColor = "white";
    
});
button.addEventListener("mouseout",function(){
    button.style.backgroundColor = "LightPink"
    
});



/* ----------------------------------------------*/
// Load tasks when the page loads
window.addEventListener("load", function () {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
        tasks = tasks.split(","); // Convert the string to an array
        tasks.forEach(function(task) {
            // Create the list item and remove button for each task
            let list = document.createElement("li");
            list.textContent = task;

            /*styling part*/
            let removebutton = document.createElement("button");
            removebutton.textContent = "remove";
            removebutton.style.color = "gray";
            removebutton.style.backgroundColor = "LightPink";
            removebutton.style.border = "3px solid LightPink";
            removebutton.style.borderRadius = "5px";
            removebutton.style.padding = "5px 5px 5px 5px";
            removebutton.style.margin = "0px 0px 0px 15px";
            removebutton.style.cursor = "pointer";

            removebutton.addEventListener("mouseover",function(){
                removebutton.style.backgroundColor = "white";
            
            });
            removebutton.addEventListener("mouseout",function(){
                removebutton.style.backgroundColor = "LightPink"
            /*----------------------------------------*/

            });
            /*styling part*/
            list.style.display = "flex";
            list.style.justifyContent = "space-between";
            list.style.alignItems = "center";
            list.style.fontWeight = "600";
            list.style.color = "#696969";
            list.style.marginBottom = "10px";
            /*----------------------------------------*/

            removebutton.addEventListener("click", function () {
                list.remove();
                
                // Remove task from localStorage
                tasks = tasks.filter(t => t !== task); // Remove the task from the array
                localStorage.setItem("tasks", tasks.join(",")); // Update localStorage
            });

            list.appendChild(removebutton);
            ul.appendChild(list);
        });
    }
});

/*--------------------------------*/
// Existing button click event to add tasks
button.addEventListener("click", function () {
    if (input.value.length <= 50 && input.value !== "") {
        let tasks;
        if (localStorage.getItem("tasks")) {
            tasks = localStorage.getItem("tasks").split(","); /*convert string to arrays*/
            
        }else {
            tasks= [];
        }
        tasks.push(input.value);
        
        /* convert arr*/
        localStorage.setItem("tasks", tasks.join(","));

        let list = document.createElement("li");
        list.textContent = input.value;
        /* remove button*/
        let removebutton = document.createElement("button");
        removebutton.textContent = "remove";
        removebutton.style.color = "gray";
        removebutton.style.backgroundColor = "LightPink";
        removebutton.style.border = "3px solid LightPink";
        removebutton.style.borderRadius = "5px";
        removebutton.style.padding = "5px 5px 5px 5px";
        removebutton.style.margin = "0px 0px 0px 15px";
        removebutton.style.cursor = "pointer";

        removebutton.addEventListener("mouseover",function(){
            removebutton.style.backgroundColor = "white";
            
        });
        removebutton.addEventListener("mouseout",function(){
            removebutton.style.backgroundColor = "LightPink"
            
        });

        removebutton.addEventListener("click", function(){
            list.remove()
    });

        
        list.style.display = "flex";
        list.style.justifyContent = "space-between";
        list.style.alignItems = "center";
        list.style.fontWeight = "600";
        list.style.color = "#696969";
        list.style.marginBottom = "10px";
        list.appendChild(removebutton);
        ul.appendChild(list);
        input.value = "";

    }
    
    
})


