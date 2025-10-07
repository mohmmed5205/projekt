 // // // // // // // // // // // // // let X="";
// // // // // // // // // // // // // switch (X) {
// // // // // // // // // // // // //     case "سبت":
// // // // // // // // // // // // //         console.log("سبت");
        
// // // // // // // // // // // // //         break;
// // // // // // // // // // // // //          case "احد":
// // // // // // // // // // // // //         console.log("احد");
        
// // // // // // // // // // // // //         break;
// // // // // // // // // // // // //          case "اثنين":
// // // // // // // // // // // // //         console.log(اثنين);
        
// // // // // // // // // // // // //         break;
// // // // // // // // // // // // //          case "ثلاثاء":
// // // // // // // // // // // // //         console.log(ثلاثاء);
        
// // // // // // // // // // // // //         break;
// // // // // // // // // // // // //          case "اربعاء":
// // // // // // // // // // // // //         console.log("اربعاء");
        
// // // // // // // // // // // // //         break;
// // // // // // // // // // // // //          case "خميس":
// // // // // // // // // // // // //         console.log("خميس");
        
// // // // // // // // // // // // //         break;
// // // // // // // // // // // // //          case "جمعه":
// // // // // // // // // // // // //         console.log("جمعه");
        
// // // // // // // // // // // // //         break;

// // // // // // // // // // // // //     default:
// // // // // // // // // // // // //         console.log("اعد الكتابه");
        
// // // // // // // // // // // // //         break;
// // // // // // // // // // // // // }

// // // // // // // // // // // // // مثال السنه الكبيسه
// // // // // // // // // // // // // let x=2024;
// // // // // // // // // // // // // if(x%4==0 && x%100 !==0){
// // // // // // // // // // // // //     console.log("366");
    
// // // // // // // // // // // // // }else if(x%400 === 0){
// // // // // // // // // // // // // console.log("");

// //  } else{
// // // // // // // // // // // // //     console.log("365");
    
// // // // // // // // // // // // // }
// // // // // // // // // // // // //  let m =10;
// // // // // // // // // // // // //  for(let i=0;i<11;i++){
// // // // // // // // // // // // //     console.log(i*m);
    
// // // // // // // // // // // // //  }
// // // // // // // // // // // // // let n=0;
// // // // // // // // // // // // // for(let i=1;i<=100;i++){
// // // // // // // // // // // // //     n+=i;
    
// // // // // // // // // // // // // }console.log(n);

// // // // // // // // // // // // function findLargest(num1, num2, num3) {
// // // // // // // // // // // //     if (num1>num2) { console.log(num1);
    
        
// // // // // // // // // // // //     } else if (num3>num1) {console.log(num3);
    
        
// // // // // // // // // // // //     }else{
// // // // // // // // // // // //         console.log(num2);
        
// // // // // // // // // // // //     }
// // // // // // // // // // // // }

// // // // // // // // // // // // findLargest(10, 5, 8);   // يجب أن تطبع: الرقم الأكبر هو 10
// // // // // // // // // // // // findLargest(3, 12, 6);   // يجب أن تطبع: الرقم الأكبر هو 12
// // // // // // // // // // // // findLargest(7, 7, 2);    // يجب أن تطبع: الرقم الأكبر هو 7 (أو يمكن أن تطبع أي واحد منهم)
 
// // // // // // // // // // // function mam(st){
// // // // // // // // // // //     st .split("");
// // // // // // // // // // //     console.log(st);
    
// // // // // // // // // // // }
// // // // // // // // // // // console.log(mam());
// // // // // // // // // console.log(document.getElementsByClassName("min"));
// // // // // // // // // const min =document.getElementsByClassName("min");
// // // // // // // // // min.innerHTML= "<h1> mohmmed</h1>";

// // // // // // // // // console.log(document.getElementsByClassName("list-item"));

// // // // // // // // // console.log(document.getElementsByClassName("list-item")[0]);

// // // // // // // // const lis =document.getElementsByClassName("list");

// // // // // // // // console.log(lis);
// // // // // // // // console.log(lis[2]);
// // // // // // // console.log(document.getElementById("min"));

// // // // // // // const mm =document.getElementById("min");
// // // // // // // console.log(mm);
// // // // // // //  mm.innerHTML="<h1>mohmmed</h1>"

// // // // // // //  const ss=document.getElementsByClassName("list");
// // // // // // //   console.log(ss[2]);
// // // // // // // ss[2].innerHTML= "<li>mmoohh</li>"




// // // // // // const mm =document.querySelectorAll(".list")
// // // // // // mm[2].innerHTML
// // // // // // console.log(mm);

// // // // // const ah=document.querySelector(".a");
// // // // // console.log(ah);
// // // // // console.log(ah.getAttribute("href"));
// // // // // ah.setAttribute("target","_blank");
// // // // // ah.setAttribute("title","mohmmed");

// // // // // ah.removeAttribute("title");
// // // // // console.log(ah);


// // // // const nav = document.querySelector(".lest");
// // // // console.log(nav.children);

// // // // console.log(nav.children[2]);

// // // // const scend = document.querySelector("ul li:nth-child(2)");

// // // // console.log(scend.nextElementSibling.innerHTML);


// // // // scend.innerHTML="<h1>about</h1>"

// // // const ul =document.createElement("ul");
// // // ul.setAttribute("class","lest");
// // // function crlu (text){
// // //     const lis =document.createElement("li");
// // //     const litext =document.createTextNode(text);
// // //     ul.appendChild(lis);
// // //     lis.appendChild(litext);
// // // }
// // // crlu("home");
// // // crlu("abut");
// // // crlu("serves");
// // // crlu("contacet");
// // // document.body.appendChild(ul);

// // // // console.log(ul);

// // const but =document.querySelector(".but");
// // const but1 =document.querySelector(".but1");
// // const but2=document.querySelector(".but2");
// // const but3 =document.querySelector(".but3");
// // const but4 =document.querySelector(".but4");

// // const booody=document.querySelector("body")
// // function clc (){
// //     booody.style.backgroundColor="grey";
// // };
// // but.addEventListener("click",clc);
// // function clc1 (){
// //     booody.style.backgroundColor="blue";
// // };
// // but1.addEventListener("click",clc1);
// // function clc2 (){
// //     booody.style.backgroundColor="red";
// // };
// // but2.addEventListener("click",clc2);
// // function clc3 (){
// //     booody.style.backgroundColor="green";
// // };
// // but3.addEventListener("click",clc3);
// // function clc4 (){
// //     booody.style.backgroundColor="brown";
// // };
// // but4.addEventListener("click",clc4);

// // // function clc2(){
// // // alert("welcom mohmmed");
// // // };
// // // // but.addEventListener("click",clc2);

// // // const dbl =document.querySelector(".dbl");
// // // function dblclc (){
// // // dbl.style.color="blue";
// // // }
// // // dbl.addEventListener("dblclick",dblclc);

// // // const box=document.querySelector(".box");
// // // function mso(){
// // // box.style.backgroundColor="red" ;
// // // } 
// // // box.addEventListener("mouseover",mso);

// // // function mso1(){
// // //     box.style.backgroundColor="green";
// // // }
// // // box.addEventListener("mouseout",mso1);

// // // const but2 =document.querySelector(".but2");
// // // function hold(){
// // //     but2.style.backgroundColor="red";
// // // }
// // // but2.addEventListener("mousedown",hold);

// const form =document.querySelector(".dataForm")
// const tablBody =document.querySelector("#dataTable tbody")
// const nameInput =document.querySelector(".name");
// const phoneInput=document.querySelector(".phone");

// form.addEventListener("submit",function (e){
//     e.preventDefault();

//     const name = nameInput.value.trim();
//     const phone =phoneInput.value.trim();

//     const row = document.createElement("tr");
//     const collName = document.createElement("td");
//     const collPhone = document.createElement("td");

//     collName.textContent=name;
//     collPhone.textContent=phone;

//     row.append(collName,collPhone);
//     tablBody.appendChild(row);
//     form.reset()

// الامصفوفات



// let myf =[1,2,"M",3,"S",4,5,"F",6,7];
// let mms=["q","w","e"];
// let mmms =["p","i","j"];

// let myall = myf.concat(mms,mmms);
// console.log(myall);
// console.log(myall.join("@"));


// console.log(mms);

// let mms = myf.splice(4,1)


// console.log(myf.slice(2,7));




// console.log(myf.sort());
// console.log(myf.reverse());


// myf[2]=3;



// myf.unshift(5,6);
// myf.push(5,6);

// let mms=myf.pop();
// console.log(mms);



// console.log(myf);
// console.log(myf.indexOf(5));



// console.log(${myf[1]});
// map

// var arr=[10,20,30,40,50];

// let myArr=arr.map(
//     function(ele){
//         return ele*10
//     }
// )
// console.log(myArr);

// let myArr=arr.filter(
//     function(ele){
//         if(ele>25){return true}
//     else{return false}    }
// )
// let myArr=arr.filter(
//     function(ele){
//         return ele>25;
//     }
// )
// console.log(myArr);

// console.log(myArr);

// let tot=arr.reduce(function(a,b){
//    return a+b
// });
// console.log(tot);

// object

// let stu ={
//     fname:"mohmmed",
//     lname:"saleh",
//     age:27,
//     yare:"1999",
//      pfl:function(){
//         console.log(this.fname+" "+this.lname);
        
//     }
// }

// stu.yare="2000";
// stu.gred="A+";
// console.log(stu.);

// function pfn(n){
//     console.log(n.fname+" "+n.lname);
    
// }
// console.log(pfn(stu));

// array+object

// let stus=[
//      fname:"mohmmed",
//      lname:"saleh",
//      age:27,
//      yare:"1999",
// ];
// console.log(stus);

// const stu ={
//      name:"mohmmed",
//      age:27,
//      gender:"mael",
//      nashonalte:"yamen",
//      scool:"ust",
//      langweg:{
//           html:'20%',
//           css:'80%',
//           js:'90%',
//      }


// };
// const {name,gender,scool,langweg}=stu;

// console.log(name,gender,);

// let m="hi im mohmmed\n"+
// "im frome yamen \n"+
// "i love my frend";
// console.log(m);

// const m="mael"

// let s=`hi im mohmmed
// "im frome yamen
// iam ${m}
// "i love 
// my love `;
// console.log(s);


// كيف تجيب الريكويست بلجافا


// function GetPoset(){
//         let request = new XMLHttpRequest()
//     request.open("GET","https://jsonplaceholder.typicode.com/posts")

//     // 3shan t5lyh arry
//     request.responseType="json"
//     request.send()
//     request.onload=function(){
//         if(request.status >=200 && request.status < 300){
//             console.log(request.response);
//         let posts=request.response;


//         for( post of posts){
//             document.getElementById("tit").innerHTML +=post.title
           
            
//         }
//         } 
//         else{         alert("erorr")
// }
            
        
        
        
//     }
// }

// function CreatNewPoset(){
//     let request = new XMLHttpRequest()
//     request.open("post","https://jsonplaceholder.typicode.com/posts")
//     request.responseType="json"
//     request.setRequestHeader("Accept","application/json")
//     request.setRequestHeader("Content-type","application/json")
//     let bodybram={
//      "title": "mohmmed",
//     "body": "mohmmedsaleh",
//     "userId": 1
//     }
//     const bodybramS=JSON.stringify(bodybram)
//     request.send(bodybramS)
//     request.onload=function(){
//         if(request.status >= 200 && request.status<300){
//             let response =request.response
//         console.log(response);
//         console.log(request.status);
//         alert("send sesacfoll")
//         }
//         else{
//             alert("erorr")
//         }
        
        
//     }
// }


// function updatPoset(){
//     let request = new XMLHttpRequest()
//     request.open("PUT","https://jsonplaceholder.typicode.com/posts/1")
//     request.responseType="json"
//     request.setRequestHeader("Accept","application/json")
//     request.setRequestHeader("Content-type","application/json")
//     let bodybram={
//      "title": "mohmmed",
//     "body": "mohmmedsaleh",
//     "userId": 1
//     }
//     const bodybramS=JSON.stringify(bodybram)
//     request.send(bodybramS)
//     request.onload=function(){
//         if(request.status >= 200 && request.status<300){
//             let response =request.response
//         console.log(response);
//         console.log(request.status);
//         alert("send updating sesacfoll")
//         }
//         else{
//             alert("erorr")
//         }
        
        
//     }
// }


// function deletePoset(){
//     let request = new XMLHttpRequest()
//     request.open("DELETE","https://jsonplaceholder.typicode.com/posts/1")
//     request.responseType="json"
//     request.setRequestHeader("Accept","application/json")
//     request.setRequestHeader("Content-type","application/json")
    
//     request.send()
//     request.onload=function(){
//         if(request.status >= 200 && request.status<300){
//             let response =request.response
//         console.log(response);
//         console.log(request.status);
//         alert("send DELETE sesacfoll")
//         }
//         else{
//             alert("erorr")
//         }
        
        
//     }
// }
// deletePoset()
// // updatPoset()
// // CreatNewPoset()

// // GetPoset()








//Write a function that receives two arguments to calculate the exponentiation.
function power(bas,exponet){
    return bas**exponet;
}
console.log(power(5,2));


//Write function receives an array of numbers and returns unique numbers in an array  ex: [1,2,3,3,2,5] => [1,2,3,5]


function unqArray(arr) {
    return [...new Set(arr)]
}
console.log(unqArray([1,1,2,2,3,4,5,5]));

//Given two arrays, provide the union of the arrays without duplicating any values. ex: [1,2,3] , [3,2,5] ⇒ [1,2,3,5]

function uniArray(arr1,arr2) {
    return[...new Set([...arr1,...arr2])];
}
console.log(uniArray([1,2,3,],[2,3,4]));

//Write a function that generates a new array with a specified length of number passed as an argument. generateArray(5) ⇒ [0,0,0,0,0]

function genArray(length) {
    let arr3 =[];
   for (let i = 0; i <length; i++) { 
    arr3.push(0)
   }
  return arr3;
}
console.log(genArray(4));


//Write function convert object keys to an array of object ex: {a:1, b:2, c:3} => [{a:1},{b:2},{c:3}]

function objToArr(obj){
    return Object.keys(obj). map(key =>({[key]:obj[key] }) )
}

console.log(objToArr({a:1,b:2,c:3}));

//Write function reflects the message ex: Welcome => emocleW

function revTex(tex){
    return tex.split("").reverse().join("");

}
console.log(revTex("mohmmed"));

//Write function returns the number of times a character is repeated in a message. character is dynamic, ignore case sensitive                                                 ex: message=> 'Welcome'       user enter  e|E       result is => e:2 

function conChar(text,char){
    const regex = new RegExp (char,"gi");
    const matches = text.match(regex);
    return matches ?matches.length:0;
}
console.log(conChar("mohmmed","m"));

//given an array of objects, return new array with a unique colors                                                    const data = [{a: 'happy', b: 'robin', colors: ['blue','green']},{a: 'tired', b: 'panther', colors: ['green','black','orange','blue']},{a: 'sad', b: 'goldfish', colors: ['green','red']}]; output: ['blue', 'green', 'black', 'orange', 'red']

const data = [
  {a: 'happy', b: 'robin', colors: ['blue','green']},
  {a: 'tired', b: 'panther', colors: ['green','black','orange','blue']},
  {a: 'sad', b: 'goldfish', colors: ['green','red']}
];

function uniqueColors(data) {
  return [...new Set(data.flatMap(item => item.colors))];
}

console.log(uniqueColors(data));

//Write a function that counts the number of arrays inside a given array.                 ex1: ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2                                            ex2: ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3

function countArrays(arr) {
  let count = 0;
  arr.forEach(el => {
    if (Array.isArray(el)) count++;
  });
  return count;
}

console.log(countArrays([2,8,[6],3,3,5,3,4,[5,4]])); // 2
console.log(countArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]])); 

