# Vue.js の勉強用リポジトリ
以下の書籍を勧めていく
- 基礎から学ぶ Vue.js
  - https://cr-vue.mio3io.com
  
## CHAPTER 1
### SECTION 1
- Laravel のフロントエンドエンジン
- https://studio.design/ は vue で作られている
- vue.js の作者の Evan 氏はデザイナー
- Transition 機能が良いらしい
- 人気の理由を見て、確かになぁと感じた

### SECTION 2
- DOM ではなくデータが先
  - データ駆動
- ディレクティブ
  - 名前が v- から始まる
  - データバインディングに使用される
  - JavaScript の単一な式
- コンポーネント素敵
- NUXT って静的サイトジェネレータなのか

### SECTION 3
- リソース
  - https://github.com/vuejs/awesome-vue
  - https://curated.vuejs.org/
- UI集
  - http://element.eleme.io/#/en-US
  - https://ja.onsen.io/
- 今はネットになんでもあるんだなと改めて実感

### SECTION 4
- スタンドアロン版は DL するか CDN
- 初期設定は何度が行っているのでスムーズに行えた
- 「ルートとコンポーネントのオプション」の意味違いがわからないが、まずは読み進めてみる

### SECTION 5
- .number 修飾子を付けると、文字列は無視して表示されない

### SECTION 11
- $el, $refs は仮想 DOM ではないため、描画処理の最適化をしない
  - そのため、DOM の操作には向いていない