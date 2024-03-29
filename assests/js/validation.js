
function validate() {
  
  let a = validation();
  if (a === 'WORRYLESS')  
  { 
    document.getElementById("butn").addEventListener("click", function(){
      let  hi = document.getElementById("modall")
      hi.style.display="block";
    });   
  }
}



function validation() {

   let a="";
  // Name validation start
  let data1 = document.getElementById('uname').value;
  let names = data1;

  if (names === "") {
    document.getElementById('fnp').style.display = "block";
    document.getElementById('uname').style.border = "2px solid red";
    a=a.substring(0,a.length-1);
  }
  else {
    if(names.length>2){
      document.getElementById('valid03').style.display = "none";
     
    
    if (names.charAt(0) >= 'A' && names.charAt(0) <= 'Z') {
      document.getElementById('valid3').style.display = "none";
      
      let validf = true;
      for (let i = 0; i <= names.length; i++) {
        if (names.charAt(i) >= '0' && names.charAt(i) <= '9') {
          validf = false;

        }
      }
      if (validf == false) {
        document.getElementById('valid2').style.display = "block";
        document.getElementById('uname').style.border = "2px solid red";
      }
      else {
        document.getElementById('valid2').style.display = "none";
        document.getElementById('uname').style.border = "2px solid green";
        a=a+"W";
      }
    }
    else {
      document.getElementById('valid3').style.display = "block";
      document.getElementById('uname').style.border = "2px solid red";
    }
  }else{
    document.getElementById('valid03').style.display = "block";
    document.getElementById('uname').style.border = "2px solid red";
  }
    document.getElementById('fnp').style.display = "none";
  }


  // E-mail validation start
  let data2 = document.getElementById('email').value;
  let emails = data2;
  let mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (emails === "") {
    document.getElementById('fne').style.display = "block";
    document.getElementById('email').style.border = "2px solid red";
    a=a.substring(0,a.length-1);
  }
  else {
    if ((!emails.match(mailformat))) {
      document.getElementById('valid5').style.display = "block";
      document.getElementById('email').style.border = "2px solid red";   
    }
    else {
      document.getElementById('valid5').style.display = "none";
      document.getElementById('email').style.border = "2px solid green";
      a=a+"O";
    }
    document.getElementById('fne').style.display = "none";
  }


  //mobile number validation
  let data3 = document.getElementById('num').value;
  let nums = data3;
    let mobilefmt=/^[\+91]?[7-9][0-9]{9}$/;
  if (nums === "")
   {
    document.getElementById('fnm').style.display = "block";
    document.getElementById('num').style.border = "2px solid red";
    a=a.substring(0,a.length-1);
  }
  else
   {
    if (nums.length === 13) 
    {

      if (nums.charAt(0) == '+' && nums.charAt(1 ) == '9'&& nums.charAt(2) == '1'){
        
        document.getElementById('valid08').style.display = "none";
        
      
       let validf = true;
       for (let i = 0; i < nums.length; i++) 
       {
        if ((nums.charAt(i) >= 'a' && nums.charAt(i) <= 'z') || (nums.charAt(i) >= 'A' && nums.charAt(i) <= 'Z'))
         {
          validf = false;   
        }
       }
         if (validf == false)
          {
            document.getElementById('valid8').style.display = "block";
            document.getElementById('valid08').style.display = "none";
            document.getElementById('num').style.border = "2px solid red";
            document.getElementById('fnl').style.display = "none";
            document.getElementById('valid9').style.display = "none";
          }
         else 
         {
             if (nums.charAt(3) >= '6' && nums.charAt(3 ) <= '9') 
             {
               document.getElementById('valid9').style.display = "none";
               document.getElementById('num').style.border = "2px solid green";
               document.getElementById('valid8').style.display = "none";
               document.getElementById('valid08').style.display = "none";
                document.getElementById('fnl').style.display = "none";
             } 
             else 
             {
               document.getElementById('valid9').style.display = "block";
                 document.getElementById('num').style.border = "2px solid red";
                document.getElementById('valid8').style.display = "none";
                document.getElementById('fnl').style.display = "none";
                document.getElementById('valid08').style.display = "block";
         
              } 
                 a=a+"R";
          }
      }
      else
      {
        document.getElementById('valid08').style.display = "block";
      }
    }
   else
   {
      if (nums.length > 13 || nums.length < 13)
       {
        document.getElementById('valid08').style.display = "none";
        document.getElementById('num').style.border = "2px solid red";
        document.getElementById('valid8').style.display = "none";
        document.getElementById('fnl').style.display = "block";  
        document.getElementById('valid9').style.display = "none";
       }
      else 
       {
        document.getElementById('valid08').style.display = "none";
        document.getElementById('fnl').style.display = "none";
    
       }

    } 
    document.getElementById('fnm').style.display = "none";
    
    
    }


  //password validation start
  let data4 = document.getElementById('password').value;
  let pass1 = data4;
  let passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (pass1 === "") {
    document.getElementById('fnps').style.display = "block";
    document.getElementById('password').style.border = "2px solid red";
  a=a.substring(0,a.length-1);
  }
  else {
    if (!(pass1.match(passwordformat))) {

      document.getElementById('valid10').style.display = "block";
      document.getElementById('password').style.border = "2px solid red";
    }
    else {
      document.getElementById('valid10').style.display = "none";
      document.getElementById('password').style.border = "2px solid green";
      a=a+"R";
    }
    document.getElementById('fnps').style.display = "none";
    
  }


  //confirm password validation start
  let data5 = document.getElementById('cpassword').value;
  let cpass = data5;
  if (cpass === "") {
    document.getElementById('fncp').style.display = "block";
    document.getElementById('cpassword').style.border = "2px solid red";
   a=a.substring(0,a.length-1);
  }
  else {
    if (cpass != pass1) {
      document.getElementById('fnpp').style.display = "block";
      document.getElementById('cpassword').style.border = "2px solid red";

    } else {
      document.getElementById('fnpp').style.display = "none";
      document.getElementById('cpassword').style.border = "2px solid green";
      document.getElementById('fncp').style.display = "none";
      a=a+"Y";
    }

  }



  //gender validation start
  let data7 = document.getElementById("male").checked;
  let data8 = document.getElementById("female").checked;
  if (!(data7 || data8)) {
    document.getElementById("error").style.display = "block";
    a=a.substring(0,a.length-1);
  } else {
    document.getElementById('error').style.display = "none";
    a=a+"L"
  }


  //state validation start 
  if (document.getElementById('state').value == "")
   {
    a=a.substring(0,a.length-1);
    document.getElementById("state-error").style.display = "block";
    document.getElementById('state').style.border = "2px solid red";
  } else {
    document.getElementById('state-error').style.display = "none";
    document.getElementById('state').style.border = "2px solid green";
    a=a+"E";
  }


  // //District validation start
  if (document.getElementById('country').value == "") 
  {
    a=a.substring(0,a.length-1);
    document.getElementById("country-error").style.display = "block";
    document.getElementById('country').style.border = "2px solid red";
  } else {
    document.getElementById('country-error').style.display = "none";
    document.getElementById('country').style.border = "2px solid green";
    a=a+"S";
  }


  //checkbox validation start
  let data9 = document.getElementById("check").checked;
  if (!(data9)) {
    document.getElementById("chp").style.display = "block";
    a=a.substring(0,a.length-1);
  } else {
    document.getElementById('chp').style.display = "none";
    a=a+"S";
   
    console.log("a",a);
  }
  return a;

  
}































