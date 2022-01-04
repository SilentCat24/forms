
let id= (id) =>document.getElementById(id);
let classes=(classes) =>document.getElementsByClassName(classes)

let userName=id('username'),
email=id('email'),
form=id('form'),
submit=id('submit'),
hide=id('hide'),
noHide=id('noHide'),
 password=id('password'),
 confirmPassword=id('confirmPassword'),
 errorMsg = classes('error'),
successIcon=classes('success-icon'),
failureIcon=classes('failure-icon');

// errorMsg[1].innerHTML='sadasdwc';
// form.addEventListener('submit',(e)=>{
//   e.preventDefault();

//   if(userName.value === ''){
//     errorMsg[0].innerHTML='user name cannot be empty';
//     failureIcon[0].style.opacity='1';
//     successIcon[0].style.opacity='0';
  
//   }else{
// errorMsg[0].innerHTML='';
// successIcon[0].style.opacity='1';
// failureIcon[0].style.opacity='0';



//   }

// });


form.addEventListener('submit',(e)=>{
  e.preventDefault();
// errorMsg[0].innerHTML='user name cant be empty';

// if(userName.value === ''){
// errorMsg[0].innerHTML='username cant be empty';
// failureIcon[0].style.opacity='1'
// successIcon[0].style.opacity='0';


// }else{
// errorMsg[0].innerHTML='';
// failureIcon[0].style.opacity='0'
// successIcon[0].style.opacity='1';


// }

 engine(username,0,'Username cannot be empty',3,6);
 engine(email,1,'Email cant be empty',15,20);
engine(password,2,'Password is required',8,15);

if(confirmPassword.value.trim() ===""){
  errorMsg[3].innerHTML="field can't be empty";
  failureIcon[3].style.opacity='1';
  successIcon[3].style.opacity='0'

}else if(confirmPassword.value!==password.value){
  errorMsg[3].innerHTML="password not match";
  failureIcon[3].style.opacity='1';
  successIcon[3].style.opacity='0'
}else{
  errorMsg[3].innerHTML="";
  failureIcon[3].style.opacity='0';
  successIcon[3].style.opacity='1';
}



})

let show=function(){


   if (password.type==='password'){
    password.type="text";
    // hide.style.opacity="1";
    hide.style.display=block;
   
  }
  else if (password.type==='text'){
    password.type="password";
    // hide.style.opacity="1";
    hide.style.display=none;
   
  }

}

let engine=(id,serial,message,min,max)=>{
  if(id.value.trim() === ''){
    errorMsg[serial].innerHTML=message;
    failureIcon[serial].style.opacity='1'
    successIcon[serial].style.opacity='0';
  }
  else if(id.value.length>max){
    errorMsg[serial].innerHTML=`${id.name} length is more`;
  }
  else if(id.value.length<min){
    errorMsg[serial].innerHTML= `${id.name} length is less`;
  }
  else{
    errorMsg[serial].innerHTML='';
    failureIcon[serial].style.opacity='0'
    successIcon[serial].style.opacity='1';
    
    
    }
    

}



