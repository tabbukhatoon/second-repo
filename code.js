let input=document.querySelector(".input");
console.log(input);
let button=document.querySelector(".btn");
let msg=document.querySelector(".msg");
console.log(msg);
console.log(button);
button.addEventListener("click",()=>{
    console.log('button was clicked');
    let data1=new Date(input.value);
    let oldYear=data1.getFullYear();
    console.log('oldyear=',oldYear);
     ///now year
     let data2=new Date();
     let newYear=data2.getFullYear();
     console.log('newyear=',newYear);
     console.log(newYear-oldYear);
     let data=newYear-oldYear;
     console.log(data);
     msg.innerHTML=`Your age is :${data}`;
     msg.style.fontWeight='700';
     
     
})


