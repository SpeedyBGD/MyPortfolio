const data = {
  info: {
    name: "Drazen",
    lastName: "Manojlovic",
  },
  menu: ["About me", "Projects", "Skills", "Knowledge", "Contact"],
  about: {
    descJa:
      "I am programmer, passionate about chalenging back-end and also front-end projects",
    imgJa: "ja.jpg",
  },
  projects: {
    descPr: "Projects",
    imgPr: ["edge.png", "hrana.png", "jupiter.jpg"],
  },
  skills: {
    descSk: "Skills",
    imgSk: ["html.webp", "css.webp"],
  },
  knowledge: {
    descKn: "Knowledge",
    list: [
      "Back-end development using PHP and NodeJS",
      "Front-end development using JS and ReactJS",
      "MySQL and MongoDB",
      "Work with animations",
    ],
  },
};

function renderName(obj) {
  let ime = document.getElementById("name");
  let h1 = document.createElement("h1");
  h1.textContent = `${obj.lastName} ${obj.name}`;
  ime.appendChild(h1);
}

function renderMenu(data) {
  let lista = document.createElement("ul");
  data.forEach((elem) => {
    let li = document.createElement("li");
    let aLista = document.createElement("a");
    let href1 = elem.toString().toLowerCase().split(" ").join("");
    aLista.href = `#${href1}`;
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

function renderSkills(data) {
  let skills = document.querySelector("#skills");
  let h2Sk = document.createElement("h2");
  h2Sk.classList.add("heading2");
  h2Sk.textContent = `${data.descSk}`;
  skills.appendChild(h2Sk);
  let skillsContainer = document.createElement("div");
  skillsContainer.classList.add("skill");
  skills.appendChild(skillsContainer);
  data.imgSk.forEach((elem) => {
    let imgSkills = document.createElement("img");
    imgSkills.src = `./assets/IMG/${elem}`;
    imgSkills.alt = elem;
    skillsContainer.appendChild(imgSkills);
  });
}

function renderKnowledge(data) {
  let knowledge = document.querySelector("#knowledge");
  let h2Kn = document.createElement("h2");
  h2Kn.classList.add("heading2");
  h2Kn.textContent = data.descKn;
  knowledge.appendChild(h2Kn);
  let lista2 = document.createElement("ol");
  lista2.classList.add("lista2");
  data.list.forEach((elem) => {
    let li2 = document.createElement("li");
    li2.textContent = elem;
    lista2.appendChild(li2);
  });
  knowledge.appendChild(lista2);
}

renderName(data.info);
renderMenu(data.menu);
renderAbout(data.about);
renderProjects(data.projects);
renderSkills(data.skills);
renderKnowledge(data.knowledge);
