const btn = document.querySelector('button');
const resultinfo = document.querySelector('div');

const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja", "Kasia"];

const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę"];

const randomName = () => {
    const indexNames = Math.floor((Math.random() * names.length));
    const indexPrefix = Math.floor((Math.random() * prefixs.length));

    resultinfo.textContent = `${prefixs[indexPrefix]}: ${names[indexNames]}`;
}


btn.addEventListener('click', randomName);