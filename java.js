// ----------ấn click thì hiện ra bảng phần class="toast"
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
  // Add your code here to be executed when the button is clicked
  window.location.href = "index2.html"; // Example code to redirect to index2.html
});
// -------------hết ấn click-------------------------



// ------------phần chuyển sang index2.html--------------------
  const clickmail = document.querySelector('.icon')
    clickmail.addEventListener("click", function(){
      window.location.href="index2.html"
    })

    // ---------------hết phần chuyển index2.htnl----------------------