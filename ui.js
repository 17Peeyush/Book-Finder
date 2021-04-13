class UI{
    constructor(){
    this.info=document.getElementById("info");
    }
    showBookName(books){
    let output='';
    books.forEach((book)=>{
        output +=`
        <div class="booktile">
        <p>${book["API"]}</p>
        <a href="${book["Link"]}" target="_blank">Link</a>
        </div>
        `
    });
    this.info.innerHTML=output;

    }
    clearBookName(){
        this.info.innerHTML="";
    }
}