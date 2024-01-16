const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

const searchInput = document.querySelector(".search__wrapper input");

searchInput.addEventListener("focus", (e) => {
  document.body.classList.remove("collapsed");
});

document.addEventListener("DOMContentLoaded", function () {
  // Carregar a barra de navegação
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = `<div class="sidebar-top-wrapper">... (código da barra lateral)... </div>`;
  
  // Carregar o conteúdo da página
  const content = document.getElementById("content");

  // Determinar qual página está sendo acessada e carregar o conteúdo correspondente
  const path = window.location.pathname;
  if (path.endsWith("home.html")) {
    content.innerHTML = `<h1>Página Inicial</h1><p>Conteúdo da Página Inicial...</p>`;
  } else if (path.endsWith("escolares.html")) {
    content.innerHTML = `<h1>Informações Escolares</h1><p>Conteúdo da Página de Informações Escolares...</p>`;
  } else if (path.endsWith("outrapagina.html")) {
    content.innerHTML = `<h1>Outra Página</h1><p>Conteúdo de Outra Página...</p>`;
  }
});
