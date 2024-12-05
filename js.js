const data = {
  info: {
    name: "Drazen",
    lastName: "Manojlovic",
  },
  menu: ["About me", "Projects", "Skills", "Knoledge", "Contact"],
  about: {
    descJa:
      "I am programmer, passionate about chalenging back-end and also front-end projects",
    imgJa: "ja.jpg",
  },
  projects: {
    descPr: "Projects",
    imgPr: ["edge.png", "hrana.png", "jupiter.jpg"],
  },
};

function renderName(obj) {
  let ime = document.getElementById("name");
  let h1 = document.createElement("h1");
  h1.textContent = `${obj.lastName} ${obj.name}`;
  ime.appendChild(h1);
  // document.getElementById("name").innerHTML = h1;
}

function renderMenu(data) {
  let lista = document.createElement("ul");
  data.forEach((elem) => {
    let li = document.createElement("li");
    let aLista = document.createElement("a");
    aLista.href = `#${elem}`;
    aLista.textContent = elem;
    aLista.innerHTML = elem;
    li.appendChild(aLista);
    lista.appendChild(li);
    let list = document.getElementById("list");
    list.appendChild(lista);
  });
}

function renderAbout(data) {
  let descJa = document.querySelector(".container-left");
  let h2 = document.createElement("h2");
  h2.textContent = "About me";
  let p = document.createElement("p");
  p.textContent = `${data.descJa}`;
  descJa.appendChild(h2);
  descJa.appendChild(p);
  let imgJa = `<img src="./assets/IMG/${data.imgJa}" alt="${data.imgJa}" />`;
  document.querySelector(".container-right").innerHTML = imgJa;
}

function renderProjects(data) {
  let projects = document.querySelector("#projects");
  let h2Pr = document.createElement("h2");
  h2Pr.classList.add("heading2");
  h2Pr.textContent = `${data.descPr}`;
  projects.appendChild(h2Pr);
  let projectContainer = document.createElement("div");
  projectContainer.classList.add("project");
  projects.appendChild(projectContainer);
  data.imgPr.forEach((elem) => {
    let img = document.createElement("img");
    img.src = `./assets/IMG/${elem}`;
    img.alt = elem;
    projectContainer.appendChild(img);
  });
}

renderName(data.info);
renderMenu(data.menu);
renderAbout(data.about);
renderProjects(data.projects);
