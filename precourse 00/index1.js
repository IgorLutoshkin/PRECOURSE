// data - данные
let n = 'it-incubator';
let graduatesCount = 2000;
let areYouChampion = true;




// render - рендерим алгоритм
document.write('<h1>', n, '</h1>');
document.write(`<input type="number" value="${graduatesCount}">`);
document.write(`<input type="checkbox" ${areYouChampion ? ' checked ' : ''} >`);