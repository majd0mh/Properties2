function showForm(){
	let h = document.getElementById("cnt").checked;
	document.getElementById("dataForm").hidden = !h;
    generateCaptcha();
}


function openDetails(){
    if (name == ""){
        alert ("لا يوجد معلومات الرجاء العودة واختيار أحدى الخيارات");
    }
   if(name == "a")
    {
         document.getElementById('Nameap').innerHTML= "partment 5 room (space 90m) " ;
         document.getElementById('city').innerHTML= "City : Damascus " ;
         document.getElementById('Rental').innerHTML=  "Monthly Rent Type : 13 000 00";
         document.getElementById('Image').src = "image\\1\\1 (1).webp";
         document.getElementById('Image1').src = "image\\1\\1 (2).webp";
         document.getElementById('Image2').src = "image\\1\\1 (3).webp";
    }
    if(name == "a1")
    {
         document.getElementById('Nameap').innerHTML= "apartment 7 room (space 120m)" ;
         document.getElementById('city').innerHTML= "City : Latakia " ;
         document.getElementById('Rental').innerHTML=  "Monthly Rent Type : 15 000 00";
         document.getElementById('Image').src = "image\\2\\1 (1).webp";
         document.getElementById('Image1').src = "image\\2\\1 (2).webp";
         document.getElementById('Image2').src = "image\\2\\1 (3).webp";
    }
    if (name == "a2")
    {
         document.getElementById('Nameap').innerHTML= "partment 5 room (space 90m) " ;
         document.getElementById('city').innerHTML= "City : Damascus " ;
         document.getElementById('Rental').innerHTML=  "Monthly Rent Type : 95 000 0";
         document.getElementById('Image').src = "image\\3\\1 (1).webp";
         document.getElementById('Image1').src = "image\\3\\1 (2).webp";
         document.getElementById('Image2').src = "image\\3\\1 (3).webp";
    }
    if(name == "a3")
    {
         document.getElementById('Nameap').innerHTML= "partment 5 room (space 90m) " ;
         document.getElementById('city').innerHTML= "City : Homs " ;
         document.getElementById('Rental').innerHTML=  "Monthly Rent Type : 11 000 00";
         document.getElementById('Image').src = "image\\4\\1 (1).webp";
         document.getElementById('Image1').src = "image\\4\\1 (2).webp";
         document.getElementById('Image2').src = "image\\4\\1 (3).webp";
    }
    if(name == "a4")
    {
         document.getElementById('Nameap').innerHTML= "partment 5 room (space 90m) " ;
         document.getElementById('city').innerHTML= "City : Latakia " ;
         document.getElementById('Rental').innerHTML=  "Monthly Rent Type : 8 00 00";
         document.getElementById('Image').src = "image\\5\\1 (1).webp";
         document.getElementById('Image1').src = "image\\5\\1 (2).webp";
         document.getElementById('Image2').src = "image\\5\\1 (3).webp";
    }
    if(name == "a5")
    {
         document.getElementById('Nameap').innerHTML= "partment 5 room (space 90m) " ;
         document.getElementById('city').innerHTML= "City : Homs " ;
         document.getElementById('Rental').innerHTML=  "Monthly Rent Type : 125 00 00";
         document.getElementById('Image').src = "image\\6\\1 (1).webp";
         document.getElementById('Image1').src = "image\\6\\1 (2).webp";
         document.getElementById('Image2').src = "image\\6\\1 (3).webp";
    }
    if (name == "a6")
    {
         document.getElementById('Nameap').innerHTML= "partment 5 room (space 90m) " ;
         document.getElementById('city').innerHTML= "City : Aleppo " ;
         document.getElementById('Rental').innerHTML=  "Monthly Rent Type : 79 00 00";
         document.getElementById('Image').src = "image\\7\\1 (1).webp";
         document.getElementById('Image1').src = "image\\7\\1 (2).webp";
         document.getElementById('Image2').src = "image\\7\\1 (3).webp";
    }
    if(name == "a7")
    {
         document.getElementById('Nameap').innerHTML= "partment 5 room (space 90m) " ;
         document.getElementById('city').innerHTML= "City : Aleppo " ;
         document.getElementById('Rental').innerHTML=  "Monthly Rent Type : 23 000 00";
         document.getElementById('Image').src = "image\\8\\1 (1).webp";
         document.getElementById('Image1').src = "image\\8\\1 (2).webp";
         document.getElementById('Image2').src = "image\\8\\1 (3).webp";
    }
    if(name == "a8")
    {
         document.getElementById('Nameap').innerHTML= "partment 5 room (space 90m) " ;
         document.getElementById('city').innerHTML= "City : Damascus " ;
         document.getElementById('Rental').innerHTML=  "Monthly Rent Type : 11 000 00";
         document.getElementById('Image').src = "image\\9\\1 (1).webp";
         document.getElementById('Image1').src = "image\\9\\1 (2).webp";
         document.getElementById('Image2').src = "image\\9\\1 (3).webp";
    }
    if(name == "a9")
    {
         document.getElementById('Nameap').innerHTML= "partment 5 room (space 90m) " ;
         document.getElementById('city').innerHTML= "City : Aleppo " ;
         document.getElementById('Rental').innerHTML=  "Monthly Rent Type : 9 00 00";
         document.getElementById('Image').src = "image\\10\\1 (1).webp";
         document.getElementById('Image1').src = "image\\10\\1 (2).webp";
         document.getElementById('Image2').src = "image\\10\\1 (3).webp";
    }
}


function planeChoice (plane) {
    switch (plane) {
        case ss :
        name ="a" ;
        break;
        case ss1 :
        name ="a1";
        break;
        case ss2 :
        name ="a2";
        break;
        case ss3 :
        name ="a3";
        break;
        case ss4 :
        name ="a4";
        break;
        case ss5 :
        name ="a5";
        break;
        case ss6 :
        name ="a6";
        break;
        case ss7 :
        name ="a7";
        break;
        case ss8 :
        name ="a8";
        break;
        case ss9 :
        name ="a9";
        break;
    }
}


	function mf(){
	var cb = document.getElementById("i");
	var texxt = document.getElementById("j");
	    if (cb.checked==true){texxt.style.display= "block";}
		else {texxt.style.display= "none";}}
	function mf1(){
	var cb = document.getElementById("i1");
	var texxt = document.getElementById("j1");
	    if (cb.checked==true){texxt.style.display= "block";}
	    else {texxt.style.display= "none";}}
	function mf2(){
		var cb = document.getElementById("i2");
		var texxt = document.getElementById("j2");
		if (cb.checked==true){texxt.style.display= "block";}
		else {texxt.style.display= "none";}}
    function mf3(){
		var cb = document.getElementById("i3");
		var texxt = document.getElementById("j3");
		if (cb.checked==true){texxt.style.display= "block";}
		else {texxt.style.display= "none";}}	
	function mf4(){
		var cb = document.getElementById("i4");
		var texxt = document.getElementById("j4");
		if (cb.checked==true){texxt.style.display= "block";}
		else {texxt.style.display= "none";}}
	function mf5(){
		var cb = document.getElementById("i5");
		var texxt = document.getElementById("j5");
		if (cb.checked==true){texxt.style.display= "block";}
		else {texxt.style.display= "none";}}
	function mf6(){
		var cb = document.getElementById("i6");
		var texxt = document.getElementById("j6");
		if (cb.checked==true){texxt.style.display= "block";}
		else {texxt.style.display= "none";}}	
	function mf7(){
		var cb = document.getElementById("i7");
		var texxt = document.getElementById("j7");
		if (cb.checked==true){texxt.style.display= "block";}
		else {texxt.style.display= "none";}}
	function mf8(){
		var cb = document.getElementById("i8");
		var texxt = document.getElementById("j8");
		if (cb.checked==true){texxt.style.display= "block";}
		else {texxt.style.display= "none";}}		
		function mf9(){
		var cb = document.getElementById("i9");
		var texxt = document.getElementById("j9");
		if (cb.checked==true){texxt.style.display= "block";}
		else {texxt.style.display= "none";}}









function validateForm() {
  const fullName = document.getElementById("full-name").value;
  const nationalID = document.getElementById("national-id").value;
  const birthDate = document.getElementById("dob").value;
  const phoneNumber = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const rentalDuration = document.getElementById("rental-duration").value;
  const userInput = document.getElementById("txtInput").value;
  const captchaResult = document.getElementById("mainCaptcha").innerHTML;
 

  
  if (userInput !== captchaResult) {
    alert("تحقق من صحة الإجابة في Captcha.");
    generateCaptcha();
    return false;
  }

  
  if (fullName === "" || nationalID === "" || birthDate === "" || phoneNumber === "" || email === "" || rentalDuration === "") {
    alert("يرجى تعبئة جميع الحقول المطلوبة.");
    return false;
  }
    
  
  if (!nationalID.match(/^[0-9]{11}$/)) {
    alert("يرجى إدخال رقم هوية وطنية صحيح.");
    return false;
  }

  
  if (!phoneNumber.match(/^09[0-9]{8}$/)) {
    alert("يرجى إدخال رقم هاتف صحيح.");
    return false;
  }

  
  if (!email.match(/^\S+@\S+\.\S+$/)) {
    alert("يرجى إدخال عنوان بريد إلكتروني صحيح.");
    return false;
  }

  
  if (!Date.parse(birthDate)) {
    alert("يرجى إدخال تاريخ ميلاد صحيح.");
    return false;
  }

  
  if (rentalDuration <= 0) {
    alert("يرجى إدخال عدد أيام الإيجار بشكل صحيح.");
    return false;
  }

  
}


function checkCaptcha() {
  var userInput = document.getElementById("userInput").value;
  var captcha = document.getElementById("mainCaptcha").innerHTML;
  if (userInput !== captcha) {
    generateCaptcha();
  } 
}


function generateCaptcha() {
  var captcha = Math.random().toString(36).substr(2, 5);
  document.getElementById("mainCaptcha").innerHTML = captcha;
}