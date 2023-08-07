 
 let input1=  document.querySelector(".inputN"); 
  

 for( let i=0; i <17 ; i++ ){
    if(i === 4 || i===5){
      continue;
    }
    document.getElementsByTagName("button")[i].addEventListener("click" , Log );
  
 }
 function Log(){
  
  let Btext = this.innerHTML; 
  input1.value +=Btext;

 }

   document.querySelector(".equal").addEventListener("click" ,evaluateExpression)

  
 function evaluateExpression() {
  try {
    input1.setAttribute("placeHolder" ,"") ; 
    let result = eval(input1.value);
    input1.value = result;
  } catch (error) {
    input1.value = "";
    input1.setAttribute("placeHolder" ,"eror") ; 
  }
}

 document.querySelector(".reset").addEventListener("click", function(){
  input1.setAttribute("placeHolder" ,"") ; 
  input1.value=null; 
     
 })
 document.querySelector(".delete").addEventListener("click", function(){
  let currentValue = input1.value;
  if (currentValue.length > 0) {
      input1.value = currentValue.slice(0, -1);
  } 
   
})
 
 
 
 
