"use strict";

// 地図を作成
const map = L.map('map', {
    center: [35.4122, 139.4130], // 中心座標の指定
    zoom: 2, // ズームレベルの指定
    zoomControl: false, // ボタンによる拡大縮小機能を無効化
    scrollWheelZoom: false, // マウスホイールによる拡大縮小機能を無効化
    touchZoom: false, // ピンチアウトによる拡大縮小機能を無効化
    maxBounds: [[51.3026, 0.0739], [40.6643, 286.0615]], // 地図の表示範囲を指定（ロンドンからニューヨークの間）
});

// タイルレイヤーを追加
const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18,
}).addTo(map);

// 座標(緯度、経度)の配列を用意
const markers = [
    { coordinates: [35.4122, 139.4130], country: 'Tokyo' },
    { coordinates: [28.3650, 77.1230], country: 'New Delhi' },
    { coordinates: [51.3026, 0.0739], country: 'London' },
    { coordinates: [40.6643, 286.0615], country: 'New York' },
];

// 国名からタイムゾーンを取得する
function getTimeZone(country) {
    switch (country.toLowerCase()) {
        case 'tokyo':
            return 'Asia/Tokyo';
        case 'new delhi':
            return 'Asia/Kolkata';
        case 'london':
            return 'Europe/London';
        case 'new york':
            return 'America/New_York';
        default:
            return 'UTC';
    }
}

// 各地点にプロットを追加
markers.forEach(({ coordinates, country }, index) => {
    // マーカーを作成
    const marker = L.marker(coordinates).addTo(map);

    // 時刻の表示
    const time = new Date().toLocaleTimeString('ja-JP', {
        timeZone: getTimeZone(country),
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        seconds: false,
    });

    // ラベルを作成
    marker.bindTooltip(`<div>${country.toUpperCase()}</div><div>${time}</div>`, {
        permanent: true, // ラベルを常時表示
        direction: index === 3 ? 'top' : 'right', // ラベルの表示位置を設定
        offset: [0, index === 3 ? -10 : 10], // ラベルの位置を微調整
        className: 'custom-marker' // ラベルのスタイルを設定するCSSクラス名
    });
});



// 各地点のタイムゾーンを取得する
var timeZones = [];
for (var i = 0; i < country.length; i++) {
    timeZones.push(getTimeZone(country[i]));
}

// 各地点の現在時刻を取得する
var times = [];
for (var i = 0; i < timeZones.length; i++) {
    var time = new Date().toLocaleTimeString("ja-JP", { timeZone: timeZones[i], hour12: false, hour: '2-digit', minute: '2-digit', seconds: false });
    times.push(time);
}