// JavaScript Document

 var scr = document.getElementById('scr');
 
 var btn = document.querySelectorAll('.btn');
 
 var scrVal = '';
 
 for(item of btn){
  item.addEventListener('click',(e) => {
   var btnText = e.target.innerText;
   
   if(btnText == 'X'){
    btnText = '*';
    scrVal += btnText;
    scr.value = scrVal;
   }else if(btnText == 'C'){
    scrVal = '';
    scr.value = scrVal;
   }else if(btnText == '='){
    scr.value = eval(scrVal);
   }else if(btnText == 'CE'){
    scrVal = scr.value.slice(0, -1);
    scr.value = scrVal;
   }else{
    scrVal += btnText;
    scr.value = scrVal;
   }
   
  });
 }