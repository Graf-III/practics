let randomValue = Math.floor(Math.random() * 101);
alert('Я задумав випадкове число від 0 до 100. Відгадайте це число...');
console.log(randomValue);

let count = 1;

while (true) {
    let number = +prompt('Введіть число');
    if (number == randomValue) {
        alert(`Правильно! Задумане число ${number}`);
        break;
        count++;
    }
    if (number > randomValue) {
        alert(`Я задумав менше число ніж ${number}`);
        count++;
    }
    else if (number < randomValue) {
        alert(`Я задумав більше число ніж ${number}`);
        count++;
    }
}
console.log(`Ви вгадали з ${count} спроби`)
alert(`Ви вгадали з ${count} спроби`);