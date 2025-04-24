// script.js

// Time-based greeting
window.onload = function () {
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    let message;
  
    if (hour < 12) {
      message = 'Good morning!';
    } else if (hour < 18) {
      message = 'Good afternoon!';
    } else {
      message = 'Good evening!';
    }
  
    greeting.textContent = message;
  };
  
  // Expand bio section
  function expandBio() {
    const bio = document.getElementById('bio');
    const para = document.createElement('p');
    para.textContent = "When I'm not coding, I'm reading tech blogs, solving algorithmic challenges, or contributing to GitHub repos. I believe in lifelong learning and love mentoring peers.";
    bio.appendChild(para);
  }
  
  // Form validation
  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('formMessage');
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!name || !email) {
      message.textContent = "Please fill in both name and email fields.";
      return false;
    }
  
    if (!emailPattern.test(email)) {
      message.textContent = "Please enter a valid email address.";
      return false;
    }
  
    message.textContent = "Thank you for subscribing!";
    message.style.color = "green";
    return false; // prevent actual submission for demo
  }
  