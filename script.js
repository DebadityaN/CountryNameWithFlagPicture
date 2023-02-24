$(function() {

$.getJSON("https://raw.githubusercontent.com/DebadityaN/GuessTheFlag/main/data.json", function(json) {

var data = json;

var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');

var correct = [b1, b2, b3, b4];
var bs = [document.getElementById('r1'), document.getElementById('r2'), document.getElementById('r3'), document.getElementById('r4')];

var score = 0;
var indexfd;

function main() {
    
    window.countryData = data[Math.floor(Math.random()*data.length)];
    indexfd = getKeyByValue(data, window.countryData);
    data.splice(indexfd, 1);

    console.log(data.countryData);

    document.getElementById('left').innerHTML = '<img src=' + window.countryData['Image4k'] + '>';

    window.correctOption = correct[Math.floor(Math.random()*correct.length)]
    
    correctOption.parentElement.children[1].innerHTML = countryData.Name;
    
    for (const b of bs) {
        isButtonPressed(b);
    }

    var index = correct.indexOf(window.correctOption);
    correct.splice(index, 1);

    for (const b of correct) {
        document.querySelector('.'+b.getAttribute('id')).innerHTML = '<span>' + data[Math.floor(Math.random()*data.length)]['Name'] + '</span>';
    }

    correct = [b1, b2, b3, b4];

    console.log(data);
}

function isButtonPressed(option) {
    option.addEventListener('click', function(event) {
        option.children[0].click();
    });
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

main();

var showScore = document.getElementById('score');
var message = document.getElementById('message');
document.getElementById('submit').addEventListener('click', function() {
    if (window.correctOption.checked) {
        score += 1;
        showScore.innerHTML = 'Score: ' + score;
        message.innerHTML = 'Well Done';
    } else {
        message.innerHTML = 'Incorrect, it was ' + window.countryData['Name'];
    }
    for (const b of [b1, b2, b3, b4]) {
        document.querySelector('.'+b.getAttribute('id')).innerHTML = '<span>' + data[Math.floor(Math.random()*data.length)]['Name'] + '</span>';
    }
    main();
});

});});
