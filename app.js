const navSlide = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
//toggle nav
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    //animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 + 0.6}s`;
        }
    });
    //burger animation
    burger.classList.toggle('toggle');
});
}
navSlide();

function cloneCarouselItems() {
var carouselInner = document.querySelector('.carousel-inner');
var carouselItems = carouselInner.querySelectorAll('.carousel-item');

var cloneCount = Math.ceil(carouselInner.offsetWidth / carouselItems[0].offsetWidth);

for (var i = 0; i < cloneCount; i++) {
  Array.from(carouselItems).forEach(function(item) {
    carouselInner.appendChild(item.cloneNode(true));
  });
}
}

window.addEventListener('DOMContentLoaded', function() {
cloneCarouselItems();
});
// create the button element
const toTopBtn = document.createElement("a");
toTopBtn.classList.add("to-top");
toTopBtn.href = "#";
toTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
document.body.appendChild(toTopBtn);
// add event listener to show/hide the button
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
});
// add event listener to scroll to top when button is clicked
toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
const parallax = document.getElementById 
("Home");
window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px"
})
//notif
function closeAlert(self){
var i = self.parentElement;
i.style.opacity = "0";
setTimeout(function(){
i.style.display = "none";
},800);
}
//Progress
let processScroll = () => {
let docElem = document.documentElement,
    docBody = document.body,
    scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
    scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeights']) - window.innerHeight,
    scrollPercent = scrollTop / scrollBottom * 100 + '%';
document.getElementById('progress-bar').style.setProperty('--scrollAmount', scrollPercent);
}
document.addEventListener('scroll', processScroll);
  if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
function openPopup() {
  document.getElementById("popupContainer").style.display = "block";
}
function closePopup() {
  document.getElementById("popupContainer").style.display = "none";
}
document.getElementById("openBtn").addEventListener("click", openPopup);
//Filter Buttons
function showContent(contentId, buttonName) {
  var notes = document.getElementsByClassName("notes");
  for (var i = 0; i < notes.length; i++) {
    notes[i].style.display = "none";
  }
  document.getElementById(contentId).style.display = "block";
  // Update the URL
  window.location.hash = '#' + encodeURIComponent(buttonName);
}
window.addEventListener("DOMContentLoaded", function() {
  var urlHash = window.location.hash;
  if (urlHash) {
    var buttonName = decodeURIComponent(urlHash.slice(1)); // Remove the '#' character and decode the button name
    var contentId;
    if (buttonName === "ALL") {
      contentId = "note1";
    } else if (buttonName === "NCSE") {
      contentId = "note2";
    } else if (buttonName === "SEA") {
      contentId = "note3";
    } else if (buttonName === "CSEC") {
      contentId = "note4";
    } else if (buttonName === "CAPE-Unit-1") {
      contentId = "note5";
    } else if (buttonName === "Cape-Unit-2") {
      contentId = "note6";
    } else if (buttonName === "Contributors") {
      contentId = "note7";
    } else {
      contentId = "note1";
    }
    showContent(contentId, buttonName);
  } else {
    showContent("note1", "ALL"); // Show content of Button 1 ("ALL") by default
  }
});
// Filter Buttons PPS
function showContentP(contentIdP, buttonNameP) {
  var pps = document.getElementsByClassName("pps");
  for (var i = 0; i < pps.length; i++) {
    pps[i].style.display = "none";
  }
  document.getElementById(contentIdP).style.display = "block";
  // Update the URL
  window.location.hash = '#' + encodeURIComponent(buttonNameP);
}
window.addEventListener("DOMContentLoaded", function () {
  var urlHash = window.location.hash;
  if (urlHash) {
    var buttonNameP = decodeURIComponent(urlHash.slice(1)); // Remove the '#' character and decode the button name
    var contentIdP;
    if (buttonNameP === "ALL") {
      contentIdP = "pp1";
    } else if (buttonNameP === "SEA-Solutions") {
      contentId = "pp2";
    } else if (buttonNameP === "CSEC-Solutions") {
      contentIdP = "pp3";
    } else if (buttonNameP === "CAPE-Unit-1-Solutions") {
      contentIdP = "pp4";
    } else if (buttonNameP === "CAPE-Unit-2-Solutions") {
      contentIdP = "pp5";
    } else if (buttonNameP === "CSEC-Sorted") {
      contentIdP = "pp6";
    } else if (buttonNameP === "CAPE-Unit-1-Sorted") {
      contentIdP = "pp7";
    } else if (buttonNameP === "CAPE-Unit-2-Sorted") {
      contentIdP = "pp8";
    } else if (buttonNameP === "Contributors") {
      contentIdP = "pp9";
    } else {
      contentIdP = "pp1";
    }
    showContentP(contentIdP, buttonNameP);
  } else {
    showContentP("pp1", "ALL"); // Show content of Button 1 ("ALL") by default
  }
});
function toggleAll() {
var contentA = document.getElementById("contentA");
var iconA = document.querySelector('.iconA');
var contentB = document.getElementById("contentB");
var iconB = document.querySelector('.iconB');
var contentC = document.getElementById("contentC");
var iconC = document.querySelector('.iconC');
var contentD = document.getElementById("contentD");
var iconD = document.querySelector('.iconD');
var iconZ = document.querySelector('.iconZ');
if (contentA) {
  if (contentA.style.display === "none" || contentA.style.display === "") {
    contentA.style.display = "block";
    iconA.classList.add('rotate');
  } else {
    contentA.style.display = "none";
    iconA.classList.remove('rotate');
  }
}
if (contentB) {
  if (contentB.style.display === "none" || contentB.style.display === "") {
    contentB.style.display = "block";
    iconB.classList.add('rotate');
  } else {
    contentB.style.display = "none";
    iconB.classList.remove('rotate');
  }
}
if (contentC) {
  if (contentC.style.display === "none" || contentC.style.display === "") {
    contentC.style.display = "block";
    iconC.classList.add('rotate');
  } else {
    contentC.style.display = "none";
    iconC.classList.remove('rotate');
  }
}
if (contentD) {
  if (contentD.style.display === "none" || contentD.style.display === "") {
    contentD.style.display = "block";
    iconD.classList.add('rotate');
  } else {
    contentD.style.display = "none";
    iconD.classList.remove('rotate');
  }
}
if (iconZ.classList.contains('rotate')) {
  iconZ.classList.remove('rotate');
} else {
  iconZ.classList.add('rotate');
}
}
function toggleContentA() {
var content = document.getElementById("contentA");
var icon = document.querySelector('.iconA');
if (content.style.display === "none" || content.style.display === "") {
  content.style.display = "block";
  icon.classList.add('rotate');
} else {
  content.style.display = "none";
  icon.classList.remove('rotate');
}
}
function toggleContentB() {
var content = document.getElementById("contentB");
var icon = document.querySelector('.iconB');
if (content.style.display === "none" || content.style.display === "") {
  content.style.display = "block";
  icon.classList.add('rotate');
} else {
  content.style.display = "none";
  icon.classList.remove('rotate');
}
}
function toggleContentC() {
var content = document.getElementById("contentC");
var icon = document.querySelector('.iconC');
if (content.style.display === "none" || content.style.display === "") {
  content.style.display = "block";
  icon.classList.add('rotate');
} else {
  content.style.display = "none";
  icon.classList.remove('rotate');
}
}
function toggleContentD() {
var content = document.getElementById("contentD");
var icon = document.querySelector('.iconD');
if (content.style.display === "none" || content.style.display === "") {
  content.style.display = "block";
  icon.classList.add('rotate');
} else {
  content.style.display = "none";
  icon.classList.remove('rotate');
}
}
//BLOG
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
let isAnimating = false;
function showSlide(slideIndex) {
  if (isAnimating) return;
  isAnimating = true;
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('active');
      slide.style.transform = 'translateX(0)';
    } else {
      slide.classList.remove('active');
      slide.style.transform = 'translateX(100%)';
    }
  });
  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
  setTimeout(() => {
    isAnimating = false;
  }, 500); // Transition duration
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 5000); // Change slide every 5 seconds
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    if (index !== currentSlide) {
      currentSlide = index;
      showSlide(currentSlide);
    }
  });
});
function copyToClipboard(divId) {
  const textToCopyElement = document.getElementById("textToCopy" + divId);
  const textToCopy = textToCopyElement.innerText;
  // Create a temporary textarea element to hold the text
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);
  // Copy the text from the textarea to the clipboard
  tempTextArea.select();
  document.execCommand("copy");
  // Clean up - remove the temporary textarea
  document.body.removeChild(tempTextArea);
  // Show a pop-up message
  alert("URL copied to clipboard!");
}
//PWA LINKS
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('a[target="_blank"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
      var url = this.getAttribute('href');

      // Check if running as a PWA
      if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
        event.preventDefault();
        window.open(url, '_blank', 'height=600,width=800,menubar=no,toolbar=no');
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  var links = document.getElementsByClassName('gotonote');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
      var url = this.getAttribute('href');

      // Check if running as a PWA
      if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
        event.preventDefault();
        window.location.href = url;
      }
    });
  }
});
// Retrieve the content of the <span> container
var container = document.getElementById("myLinks");
var content = container.textContent.trim();
// Split the content into separate names
var names = content.split(',');
// Create <a> tags and set URLs for each name
var linkContainer = document.createElement("span");
for (var i = 0; i < names.length; i++) {
  var name = names[i].trim();
  var url = "/" + name.replace(/\s+/g, "-");
  var link = document.createElement("a");
  link.href = url;
  link.textContent = name;
  link.className = "generated-link"; // Add a class to the <a> tag
  linkContainer.appendChild(link);
  // Add a separator if it's not the last name
  if (i !== names.length - 1) {
    var separator = document.createTextNode(", ");
    linkContainer.appendChild(separator);
  }
}
// Replace the original <span> container with the created <a> tags
container.parentNode.replaceChild(linkContainer, container);
//bread
// Function to dynamically generate breadcrumbs based on the URL
function generateBreadcrumbs() {
  const breadcrumbContainer = document.getElementById("breadcrumb-container");
  const urlSegments = window.location.pathname.split('/').filter(segment => segment !== ''); // Parse URL segments

  // Create breadcrumbs dynamically
  let breadcrumbHtml = '';
  let path = '/';
  breadcrumbHtml += `<a class="breadcrumb-item" href="/#Notebooks">Notebooks</a> / `;
  for (const segment of urlSegments) {
    path += `${segment}/`;
    breadcrumbHtml += ` <a class="breadcrumb-item" href="${path}">${segment}</a> /`;
  }

  breadcrumbContainer.innerHTML = breadcrumbHtml;
}

// Call the function to generate breadcrumbs when the page loads
generateBreadcrumbs();
