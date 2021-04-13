const api= new Api;
const ui= new UI;

const sbarcon=document.getElementById("typing");
const textManipulation=function(userText,data){
    //  console.log("Data",data);
    //  console.log("User text",userText);
    const result=data["entries"].filter((x=> x["API"].toLowerCase().includes(userText.toLowerCase())));
    // console.log(result);
    ui.showBookName(result);
}
const fetchUserText = async function(){
  const userText=sbarcon.value;
  if(userText !=""){
    const data =await api.getData();
    textManipulation(userText,data);
  }
  else{
    ui.clearBookName()
   }
};

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
    sbarcon.addEventListener('keyup',fetchUserText);
});


// let dataSet;

// fetch("https://api.publicapis.org/entries?category=Books&https=true", requestOptions)
// .then(response => response.json())
// .then(result => dataSet = {...result})
// .catch(error => console.log('error', error));

// setTimeout(document.addEventListener("keydown",checkName,false),1000);
// var l=8;//dataSet["count"];
// var bookname=[];
// // console.log(dataSet);
// for( var i=0;i<l;i++){
//      bookname[i]=dataSet["entries"][i]["API"];
//      console.log(bookname[i]);
//      }

// function creatediv(index)
// {
//   document.getElementById(String(index)).innerHTML=value
// }

// function checkName()
// {
//   var name=document.getElementById("typing").value;
//   for(var i=0;i<name;i++)
//   {
//     var st=bookname[i];
//     if(st.includes(name))
//       {
//         creatediv(i);
//       }
//   }
// }
