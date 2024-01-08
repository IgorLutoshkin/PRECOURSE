/* // Создание элемента заголовка (h1) и добавление текста к этому элементу
const titleElement = document.createElement("h1");
titleElement.append("Hello from it-incubator");

// Добавление элемента заголовка в тело документа
document.body.append(titleElement);

// Создание выпадающего списка (select)
const techSelectElement = document.createElement("select");

// Создание первого варианта (option) для выпадающего списка
const techSelectOption0Element = document.createElement("option");
techSelectOption0Element.value = 1;
techSelectOption0Element.append("JS"); // Добавление текста 'JS' к первому варианту
techSelectElement.append(techSelectOption0Element); // Добавление первого варианта в выпадающий список

// Создание второго варианта (option) для выпадающего списка
const techSelectOption1Element = document.createElement("option");
techSelectOption1Element.value = 2;
techSelectOption1Element.append("HTML"); // Добавление текста 'HTML' ко второму варианту
techSelectElement.append(techSelectOption1Element); // Добавление второго варианта в выпадающий список

// Добавление второго варианта в тело документа (вместо этого, вероятно, предполагалось добавить сам выпадающий список)
document.body.append(techSelectElement);
 */

// data
const info = {
  title: "it-incubator",
  graduatesCount: 2000,
  areYouChampion: true,
  technologies: [{ title: "Front" }, { title: "Back" }, { title: "DevOps" }],
};

// render
let pageTitleElement = document.createElement("h1");
pageTitleElement.append(info.title);
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement("input");

graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement("input");
areYouChampionElement.type = "checkbox";
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);

let technologiesElement = document.createElement("select");

let optionEl0 = document.createElement("option");
optionEl0.value = 1;
optionEl0.innerText = info.technologies[0].title;
technologiesElement.append(optionEl0);

let optionEl1 = document.createElement("option");
optionEl1.value = 2;
optionEl1.innerText = info.technologies[1].title;
technologiesElement.append(optionEl1);

let optionEl2 = document.createElement("option");
optionEl2.value = 3;
optionEl2.innerText = info.technologies[2].title;
technologiesElement.append(optionEl2);

document.body.append(technologiesElement);
