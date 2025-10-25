# 世界時計 (World Clock)

世界の主要都市の現在時刻を地図上にリアルタイムで表示するWebアプリケーションです。

## 概要

このプロジェクトは、Leaflet.jsを使用して世界地図上に複数の都市をマーカーで表示し、各都市の現在時刻をリアルタイムで更新して表示します。

## 機能

- 🗺️ インタラクティブな世界地図の表示
- 🕐 4つの主要都市の現在時刻をリアルタイム表示
  - 東京 (Tokyo)
  - ニューデリー (New Delhi)
  - ロンドン (London)
  - ニューヨーク (New York)
- ⏱️ 1秒ごとに自動更新される時刻表示
- 📍 各都市の位置をマーカーで表示

## 使用技術

- HTML5
- JavaScript (ES6+)
- CSS3
- [Leaflet.js](https://leafletjs.com/) - インタラクティブな地図ライブラリ
- [OpenStreetMap](https://www.openstreetmap.org/) - 地図タイル

## セットアップ

1. リポジトリをクローン
```bash
git clone <repository-url>
cd world-clock
```

2. ブラウザで`index.html`を開く
```bash
# 例：Macの場合
open index.html

# 例：Linuxの場合
xdg-open index.html

# または、お好みのWebブラウザで直接ファイルを開く
```

## ファイル構成

```
world-clock/
├── index.html    # メインHTMLファイル
├── main.js       # JavaScriptロジック
└── README.md     # このファイル
```

## 技術的な詳細

### タイムゾーン

各都市のタイムゾーンは以下の通りです：

- 東京: `Asia/Tokyo`
- ニューデリー: `Asia/Kolkata`
- ロンドン: `Europe/London`
- ニューヨーク: `America/New_York`

### 地図の設定

- 初期表示位置: 東京 (35.4122, 139.4130)
- ズームレベル: 2
- 表示範囲: ロンドンからニューヨークの間に制限
- ズーム機能: 無効化（固定表示）

## カスタマイズ

### 都市を追加する場合

`main.js`の`markers`配列に新しい都市を追加してください：

```javascript
const markers = [
    { coordinates: [緯度, 経度], country: '都市名' },
    // ...
];
```

また、`getTimeZone`関数に対応するタイムゾーンを追加してください：

```javascript
function getTimeZone(country) {
    switch (country.toLowerCase()) {
        case '都市名':
            return 'タイムゾーン';
        // ...
    }
}
```

## ライセンス

このプロジェクトは自由に使用できます。

## 謝辞

- 地図データ: [OpenStreetMap](https://www.openstreetmap.org/) contributors
- 地図ライブラリ: [Leaflet.js](https://leafletjs.com/)
