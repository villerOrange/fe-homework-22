// Задача 1: Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.
const task1Button = document.getElementById("task1Button");
const square1 = document.getElementById("square1");

task1Button.addEventListener("click", function() {
    square1.style.backgroundColor = "green";
    square1.style.width = "100px";
    square1.style.height = "100px";
});

// Задача 2: Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
const task2Button = document.getElementById("task2Button");
const square2 = document.getElementById("square2");

task2Button.addEventListener("click", function() {
    square2.style.backgroundColor = "blue";
    console.log(`Цвет квадрата изменен на ` + square2.style.backgroundColor);
});

// Задача 3: Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
const task3Button = document.getElementById("task3Button");
const square3 = document.getElementById("square3");

let square3Width = 150;
let square3Height = 150;

task3Button.addEventListener("click", function() {
    square3Width += 20;
    square3Height += 20;
    square3.style.width = `${square3Width}px`;
    square3.style.height = `${square3Height}px`;
});

// Задача 4: Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
const task4Button = document.getElementById("task4Button");
const root4 = document.getElementById("root4");

task4Button.addEventListener("click", function() {
    const paragraph = document.createElement("p");
    paragraph.style.color = "blue";
    paragraph.innerText = "Это произвольный текст.";
    root4.appendChild(paragraph);
});

// Задача 5: Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
const task5Button = document.getElementById("task5Button");
const root5 = document.getElementById("root5");
let isBlue = true;

task5Button.addEventListener("click", function() {
    const paragraph = document.createElement("p");

    if (isBlue) {
        paragraph.style.color = "blue";
        isBlue = false;
    } else {
        paragraph.style.color = "green";
        isBlue = true;
    }

    paragraph.innerText = "Это произвольный текст.";
    root5.appendChild(paragraph);
});