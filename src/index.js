document.addEventListener('DOMContentLoaded', function () {
  let ab = document.querySelectorAll("button.btn:not([type='submit'])");
  
  ab.forEach((e) => {
    e.onclick = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  })
});















