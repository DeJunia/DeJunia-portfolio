'use strict'

document.getElementById('callButton').onclick = function() {
  window.location.href = 'tel:+233534582327';
};

document.getElementById('emailButton').onclick = function() {
window.location.href = 'mailto:isaactuffour744@gmail.com';
};
    const scrollContainer = document.getElementById('sections');
    const sections = document.querySelectorAll('.page');
    const dots = document.querySelectorAll('.dot');
    const btns = document.querySelectorAll('.navBtn')

    function scrollPage(index) {
      const section = document.getElementById(`page${index}`);
      scrollContainer.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }

    function updateActiveSection() {
      const scrollPosition = scrollContainer.scrollTop + (scrollContainer.clientHeight / 2);
      
      sections.forEach((section, index) => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          dots.forEach(dot => dot.classList.remove('active'));
          dots[index].classList.add('active');
          btns.forEach(btn => btn.classList.remove('active'));
          btns[index].classList.add('active');
        }
      });
    }

    scrollContainer.addEventListener('scroll', updateActiveSection);

document.addEventListener("DOMContentLoaded", () => {
    const roles = ["Frontend Developer", "Backend Developer", "Fullstack Developer"];
    const roleTextElement = document.getElementById('roleText');
    let roleIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const erasingSpeed = 50; 
    const delayBetweenRoles = 2000; 

    function typeText() {
      if (charIndex < roles[roleIndex].length) {
        roleTextElement.innerHTML += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(eraseText, delayBetweenRoles);
      }
    }

    function eraseText() {
      if (charIndex > 0) {
        roleTextElement.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
      } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeText, typingSpeed);
      }
    }

    typeText();

    const roles1 = ["Frontend Developer", "Backend Developer", "Fullstack Developer"];
    const roleTextElement1 = document.getElementById('roleText2');
    let roleIndex1 = 0;
    let charIndex1 = 0;
    const typingSpeed1 = 100;
    const erasingSpeed1 = 50; 
    const delayBetweenRoles1 = 2000; 

    function typeText1() {
      if (charIndex1 < roles1[roleIndex1].length) {
        roleTextElement1.innerHTML += roles1[roleIndex1].charAt(charIndex1);
        charIndex1++;
        setTimeout(typeText1, typingSpeed1);
      } else {
        setTimeout(eraseText1, delayBetweenRoles1);
      }
    }

    function eraseText1() {
      if (charIndex1 > 0) {
        roleTextElement1.innerHTML = roles1[roleIndex1].substring(0, charIndex1 - 1);
        charIndex1--;
        setTimeout(eraseText1, erasingSpeed1);
      } else {
        roleIndex1 = (roleIndex1 + 1) % roles1.length;
        setTimeout(typeText1, typingSpeed1);
      }
    }

    typeText1();

    const progressBars = [
      { id: 'progress1', percentage: 90 },
      { id: 'progress2', percentage: 85 },
      { id: 'progress3', percentage: 30 }
    ];
    
    progressBars.forEach(bar => {
      const progressBar = document.getElementById(bar.id);
      const progressText = progressBar.querySelector('.progress-text');
      const progressCircle = progressBar.querySelector('.circle-progress');
    
      const radius = progressCircle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      
      progressCircle.style.strokeDasharray = `${circumference}`;
      progressCircle.style.strokeDashoffset = `${circumference}`;
      
      const offset = circumference - (bar.percentage / 100) * circumference;
      progressCircle.style.strokeDashoffset = offset;
    
      progressText.textContent = `${bar.percentage}%`;
    });
    
    
    
    });
    
    function updateProgressBars() {
    
    let widths = [95, 92, 86, 59, 80, 80, 90, 69, 100, 35, 90, 70, 85, 60];
    
    for (let i = 0; i < widths.length; i++) {
      let prgs = document.getElementById('prg-' + (i + 1));
      prgs.style.width = widths[i] + '%';
    }
    }
    
    updateProgressBars();






