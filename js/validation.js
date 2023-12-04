document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      if (!validateForm()) {
        event.preventDefault();
      }
    });
  
    function validateForm() {
      const name = document.getElementById("name").value.trim();
      const staffNo = document.getElementById("staffno").value.trim();
      const kcdio = document.getElementById("address").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const startDate = document.getElementById("state").value.trim();
      const endDate = document.getElementById("country").value.trim();
      const checkbox = document.getElementById("supportCheckbox");
  
      if (name === "") {
        alert("Please enter your name.");
        return false;
      }
  
      if (staffNo === "" || staffNo.length > 10 || !/^\d+$/.test(staffNo)) {
        alert("Please enter a valid staff ID with a maximum of 10 numbers.");
        return false;
      }
  
      if (kcdio === "") {
        alert("Please enter K/C/D/I/O.");
        return false;
      }
  
      if (email === "" || !isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
      }
  
      if (phone === "" || !/^\d+$/.test(phone)) {
        alert("Please enter a valid phone number with only numbers.");
        return false;
      }
  
      if (startDate === "" || endDate === "") {
        alert("Please enter both start and end dates.");
        return false;
      }
  
      if (!checkbox.checked) {
        alert("Please agree to the terms, conditions, and policies.");
        return false;
      }
  
      return true;
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  