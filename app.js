import dayjs from "dayjs";

// https://developer.mozilla.org/ja/docs/Web/API/setInterval
// setInterval("処理", 時間[ミリ秒数]);
setInterval(() => {
    // 現在時刻を取得する
    // 取得できた現在時刻を[00:00]のフォーマットにする
    // フォーマットされた時刻を画面に反映させる

    document.getElementById("time").innerText = dayjs().format("HH:mm:ss");

    // let date = new Date();
    // console.log(date.getDay()); // 5
    // console.log(date.getMonth()); // 8
    // console.log(date.getYear()); // 121 (2021 - 1900)
}, 500);
