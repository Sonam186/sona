function getText(){
    let resp =  document.getElementById("heading");
    console.log(resp);
    console.log(resp.innerText);


}
function changeText(){
    //document.getElementById("heading").innerText="heading <span  style='color:red'> changed</span ";
   
    document.getElementById ("heading").innerHTML="heading <span style='color:red'> changed </span>";
}
function changeBg(){
    //inline CSS
    document.body.style.backgroundColor="black";
    document.body.style.color="white";

}
// add class
let flag =0;
function changeMode(){
    if(!flag){
        document.body.classList.add("dark");
         document.body.classList.remove("light");
flag=1;
    }
    else{
         document.body.classList.add("light");
          document.body.classList.remove("dark");
          flag=0;

    }
}


         

    




