const myHeading=document.getElementsByTagName("h1")[0];
// if we just give myHeading in console the output will be <h1>today's task</h1>
console.log(myHeading.innerHTML);
// if .innerhtml used then, output will be today's task

// by class name

// const list=document.getElementsByClassName("list")[0];
const listItems=document.querySelectorAll("li");
console.log(listItems);

// by id

const addButton=document.getElementById("button");
console.log(addButton);

// by selector

let myInput=document.querySelector("input");
console.log(myInput);

// ul tags
const list=document.querySelector("ul");

// cross of remove a todo when its done
listItems.forEach(item=>{
    item.addEventListener("click",()=>{
        item.remove();
    })
})

// the above before for loop which is applied for one element in the list
// listItems[0].addEventListener("click",()=>{
//     listItems[0].remove();
// })

// able to add a new todo
addButton.addEventListener("click",(event)=>{
    // the default behaviour of a form is to refresh the page, so use event in () and use preventDefult()
    event.preventDefault();
    const newTodo=myInput.value;
    // if you just console it will print in console not in page so add list and then push items
    // console.log(newTodo);
    const listItem=document.createElement('li');
    // console.log(listItem);
    listItem.innerHTML=newTodo;
    console.log(listItem);

    // to remove a child element
    listItem.addEventListener("click",()=>{
        listItem.remove();
    })
     //1. make it so that we can't add empty todos
    if(myInput.value==""){
        return console.log("please enter a value");
    }
    // to add a new child element
    list.appendChild(listItem);
    //2. to clear the input as we add to input box
    myInput.value="";
    // or we can do for 1., 2. 
    // const newT =myInput.value;
    // myInput.value=""
    // if(!newT) return
    // console.log(newT);  
})







