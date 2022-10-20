// const arr=[1,2,3,4,5]
//in forEach(value,id) loop the first argument taken as array elements and second argument taken as index of the array elements
// arr.forEach((value,id)=>{
//     console.log(value,id)
// })
let count=0;
const value=document.querySelector('#value')
const btns=document.querySelectorAll('.btn')
// console.log(btns)
btns.forEach((event)=>{
    event.addEventListener('click',(e)=>{
        const style=e.currentTarget.classList
        // console.log(style)
        if(style.contains('decrease')){
            count--;
        }
        else if(style.contains('increment')){
            count++;
        }
        else{
            count=0;
        }
        if(count>0){
            value.style.color='green'
        }
        if(count<0){
            value.style.color='red'
        }
        if(count===0){
            value.style.color='black'
        }
        value.textContent=count;
    })
})