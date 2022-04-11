const btn=document.getElementsByClassName("one")[0];
console.log(btn);

// let btn1=document.getElementById("demo");
// btn1="hello";
// console.log(btn1.innerHTML);

document.getElementById("demo").innerHTML="hello world";
document.getElementById("onclick").innerHTML="click me by id";
// document.getElementById("onclick").addEventListener("click",f66);

function myfunction(){
    document.getElementById("onclick").innerHTML="you clicked me";

}

document.getElementsByClassName("click")[0].innerHTML="click me by class";

document.getElementsByClassName("click")[0].addEventListener("click",func);

function func(){
    document.getElementById("write").innerHTML="you clicked class click"
}

// function add(a,b) {
//     var sum = a + b;
//     alert(sum);
//   }

function add(){
    let a=parseInt(document.getElementById("a").value);
    let b=parseInt(document.getElementById("b").value);
    let sum=a+b;  
    document.getElementById("3").value=sum; 
}
// document.getElementById("c").addEventListener("click",add);

// document.getElementById("c").addEventListener("click",addButton);
// document.getElementById("addid").addEventListener("click",six);


function addButton(){
    let one=parseInt(document.getElementById("1").value);
    let two=parseInt(document.getElementById("2").value);
    let total=one+two;
    document.getElementById("3").value="total"; 
    
}




// function f6six(a){
//     document.getElementById("3").value=a
// }
// let f6six=(a)=>{
//     document.getElementById("3").value=a;
// }

const buttons=document.querySelectorAll(".operator")
        buttons.forEach(item=>{
            console.log(typeof(item.type));
            item.addEventListener("click",evelNum);
            console.log("buttons");

    })

document.getElementById("num1").addEventListener("click", f7six);
document.getElementById("num2").addEventListener("click",f7six);
// document.getElementById("num3").addEventListener("click",f7six);
// document.getElementById("num4").addEventListener("click",f7six);
// document.getElementById("plus").addEventListener("click",addtwoNum);
// document.getElementById("subtract").addEventListener("click",subtwoNum);

document.getElementById("equal").addEventListener("click",equalfunc);
let addFlag=false;
let subFlag=false;
let equalFlag=false;
function equalfunc(){
    if(addFlag==true){
        equalFlag=true;
        addtwoNum()
    }
    if(subFlag==true){
        subtwoNum()
    }
    document.getElementById("3").value=document.getElementById("3").value
    console.log(document.getElementById("3").value)
}
function f7six(){
    document.getElementById("3").value+=this.value;
}

function addtwoNum()
{
    console.log(equalFlag); 
    // if(document.getElementById("3").value[1]==null)
    if(equalFlag==false){
        addFlag=true
        document.getElementById("3").value+= this.value
    }

    else if(equalFlag==true){
        let sumTemp=0;
        for(let i=0;i<document.getElementById("3").value.length;i++){
            const parsval=parseInt(document.getElementById("3").value[i])
            if(isNaN(parsval)){
                console.log("inside if")
            }
            else{
                sumTemp+= parseInt(document.getElementById("3").value[i])
                console.log("inside")
                console.log(sumTemp);
                
            }
        }
        document.getElementById("3").value=sumTemp;
    }
    // else if(document.getElementById("3").value[0] !=null && document.getElementById("3").value[2]!=null ){
    // document.getElementById("3").value=parseInt(document.getElementById("3").value[0])+parseInt(document.getElementById("3").value[1])
    // console.log(document.getElementById("3").value) 
    // parseInt(document.getElementById("3").value[1])+parseInt(document.getElementById("3").value[0])

    // }
}

function subtwoNum()
{
    if(document.getElementById("3").value[1]==null){
        subFlag=true
        document.getElementById("3").value+= this.value
    }
    else if(document.getElementById("3").value[0] !=null && document.getElementById("3").value[2]!=null ){
        document.getElementById("3").value=parseInt(document.getElementById("3").value[0])-parseInt(document.getElementById("3").value[2])
        console.log(document.getElementById("3").value) 
    }
}

function evelNum(){
    // if(document.getElementById("3").value.length>2){
    //     for(let i=0;i<document.getElementById("3").value.length;i++){
    //         if(document.getElementById("3").value[i]){}

            

}


// const f66=(a)=>{
//     let parm = a;
//     console.log(parm)
//    document.getElementById("3").value=parm;
//    return parm;
// }