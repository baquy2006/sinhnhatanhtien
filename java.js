// ----------ấn click thì hiện ra bảng phần class="toast"
const clickbutton = document.querySelector('#text')
  clickbutton.addEventListener("click", function(){
    document.querySelector('.container').style.display = "flex"
  })
// -------------hết ấn click-------------------------



// ------------phần chuyển sang index2.html--------------------
  const clickmail = document.querySelector('.icon')
    clickmail.addEventListener("click", function(){
      window.location.href="index2.html"
    })

    // ---------------hết phần chuyển index2.htnl----------------------