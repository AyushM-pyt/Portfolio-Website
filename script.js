// Typewriter animation
const text = "AI & ML Enthusiast | Developer | Explorer 🚀";
let index = 0;
const speed = 100; // typing speed in ms
const typewriterElement = document.getElementById("typewriter");

function typeWriterEffect() {
  if (index < text.length) {
    typewriterElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriterEffect, speed);
  }
}
window.onload = typeWriterEffect;

// Education Cards
const educationContainer = document.getElementById("education-cards");
educationData.forEach(edu => {
  const card = document.createElement("div");
  card.className = "bg-white p-6 rounded shadow hover:shadow-lg transition";
  card.innerHTML = `
    <h4 class="text-xl font-semibold mb-2">${edu.degree}</h4>
    <p class="text-gray-600">${edu.institute}</p>
    <p class="text-gray-500 mt-1">${edu.year}</p>
    <p class="text-gray-500 mt-1">${edu.text}</p>
  `;
  educationContainer.appendChild(card);
});

// Project Cards
const projectsContainer = document.getElementById("projects-cards");
projectsData.forEach(proj => {
  const card = document.createElement("div");
  card.className = "bg-white p-6 rounded shadow hover:shadow-lg transition";
  card.innerHTML = `
    <h4 class="text-xl font-semibold mb-2">${proj.title}</h4>
    <p class="text-gray-600 mb-2">${proj.description}</p>
    <p class="text-gray-500 mb-4"><strong>Tech:</strong> ${proj.tech}</p>
    <a href="${proj.link}" class="text-blue-600 hover:underline" target="_blank">View Project</a>
  `;
  projectsContainer.appendChild(card);
});

