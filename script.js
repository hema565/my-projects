//select
const modalContainer = 
document.querySelector(".modal-cont");
const addBtn = 
document.querySelector(".add-btn");
const colorModalArr =
document.querySelector(".color_modal");
const textArea = 
document.querySelector(".textarea-cont");
const mainContainer =
document.querySelector("main");
const uid = new ShortUniqueId({ length: 5 });


// add the event listener 

addBtn.addEventListener("click", function(){
    modalContainer.style.display = "flex";
})

//select  all the color box 

for(let i=0;i<colorModalArr.length;i++){
    let currentColorElem = colorModalArr[i];
    currentColorElem.addEventListener("click",function(e){
        //remove the selected from everyone
        for(let i = 0; i < colorModalArr.length;i++){
            colorModalArr[i].classList.remove("selected");
        }
        //add to the element that was clicked
        const targetColorElem = e.target;
        targetColorElem.classList.add("selected");
    })
}

textArea.addEventListener("keypress",function(event){

    if(event.key == "Enter" && event.shiftKey == false){
        modalContainer.style.display = "none";
        //create a ticket
        // 1.text
        const task = textArea.value
        //currentcolour
        const currColorElem = modalContainer.querySelector(".selected");
        const taskColor  = currColorElem.getAttribute("currColor"); 



        //reset to default
        textArea.value="";
        createTicket(taskColor,task);

    }
})

function createTicket(taskColor,task){
   const id= uid.rnd();
    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class","ticket-cont");
    ticketContainer.innerHTML = `<div class="ticket-color ${taskColor}"></div>
    <div class="ticket-id">${id}</div>
    <div class="ticket-area">  ${task}</div>
    <i class="fa-solid fa-lock lock_icon"></i>`
    mainContainer.appendChild(ticketContainer);

    //lock unlock feature
    const lockButton =  ticketContainer.querySelector(".lock_icon");

    handlelockButton(lockButton);
}


function handlelockButton(lockButton){
    lockButton.addEventListener("click",function(){
        // lock button: <i class="fa-solid fa-lock lock_icon"></i>
        // unlock button: <i class="fa-solid fa-lock open lock_icon"></i>

        const isLocked = lockButton.classList.contains("fa-lock");
        if(isLocked == true){
            // have to unlock it
            lockButton.classList.remove("fa-lock");
            lockButton.classList.add("fa-lock open");

        }else{
            lockButton.classList.add("fa-lock open");
            lockButton.classList.remove("fa-lock");

        }
    })
}


//add event listner  to each  of them
//handlar function -> write the logic 
