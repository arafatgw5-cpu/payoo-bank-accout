document.getElementById("login-btn")
.addEventListener("click", function(){

   const numberInput = document.getElementById("input-number").value;
   const pinInput = document.getElementById("input-pin").value;

   console.log(numberInput);
   console.log(pinInput);

   if(numberInput === "01876751422" && pinInput === "2481"){
      alert("Login Success ✅");

   window.location.href = "../assets/home.html";



   } else {
      alert("Failed ❌");
      return;
   }

});
