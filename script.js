//おみくじの結果を配列で用意
const fortunes = [
    "大吉 素敵な出会いがあるかも！",
    "中吉 少し勇気を出すといいことが起きる",
    "小吉 今日はゆっくり過ごそう",
    "凶 無理せず慎重に行動しよう"
];

const button = document.getElementById("omikujiButton");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * fortunes.lenght);
    const resultText = fortunes[(randomNumber)];

});