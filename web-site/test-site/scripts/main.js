// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

var myVariable = 'Bob';
myVariable = 'Steve';

// var iceCream = 'チョコレート';
// if(iceCream === 'チョコレート'){
//     alert('やった、チョコレートアイス大好き！');
// }else{
//     alert('あれれ、でもチョコレートは私のお気に入り...');
// }

multiply(4,7);

function multiply(num1,num2){
    var result = num1 * num2;
    return result;
}

// document.querySelector('html').onclick = function(){
//     alert('痛っ！つつくのはやめて！');
// }

var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/img1.jpg'){
        myImage.setAttribute('src','images/img2.jpg');
    }else{
        myImage.setAttribute('src','images/img1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('あなたの名前を入力してください。');
    localStorage.setItem('name',myName);
    myHeading.textContent = myName + 'さんならどうしますか';
}

//初期化コード
if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + 'さんならどうしますか';
}

myButton.onclick = function(){
    setUserName();
}