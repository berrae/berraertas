function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
  

  function showAlert(event) {
    event.preventDefault(); 
    alert("Mail gönderildi!");
  }


  function goToLink1() {
    window.location.href = "https://tr.wikipedia.org/wiki/Java";
  }
  
  function goToLink2() {
    window.location.href = "https://tr.wikipedia.org/wiki/C";
  }
  
  function goToLink3() {
    window.location.href = "https://tr.wikipedia.org/wiki/HTML";
  }
  
  function goToLink4() {
    window.location.href = "https://tr.wikipedia.org/wiki/MATLAB";
  }
 
