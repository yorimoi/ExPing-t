# ExPing-t ![](https://github.com/kumavale/ExPing-t/blob/master/icons/ExPing-t48.png)

[Ping-t](https://ping-t.com/)のGoogleChrome拡張機能です.  
chromeウェブストアでの配布はしておりません  
サイトの利用規約および著作権法等に違反しないよう自己責任でご利用ください.  
特に, ダウンロードしたコンテンツの私的使用の範囲を超えた無断使用などの行為を行わないよう十分注意してください.  

![ss0](https://user-images.githubusercontent.com/29778890/61181193-bdeb6200-a65d-11e9-8190-233c61e99a34.png)  
![ss1](https://user-images.githubusercontent.com/29778890/61181198-d3608c00-a65d-11e9-8679-d4a24be12661.png)  


## Roadmap
- [x] 背景色,文字色,文字の太さ の変更  
- [x] 画像表示  
- [x] 問題間共有のメモ機能  
- [x] HTMLの保存  
- [x] Historyの色分け  
- [x] `[戻る]` `[次へ]`ボタンを画面上部にも  
- [x] `[追記]`ボタン押下時, 設定した書式[<sup>[1]</sup>](#note-1)をメモに追記  
- [x] 経過時間表示  
- [x] 時計  
- [x] 選択肢を`[隠す/現す]`機能  
- [x] 書式に'%02d'とかの桁数指定  
- [x] 問題数の指定  
- [x] アラーム(キッチンタイマー)  
- [x] アラームの一時停止(アラームをクリック)  
- [ ] アラームの書式指定  
- [ ] オプション画面で各ボタンの表示有無を細かく指定  
- [ ] HTMLの保存時, 正解ボタン押下前や模擬試験時にも正解を表示  
- [ ] ~~オプション画面での画像保存の動作修正~~  
- [ ] URLのアクセス制御  
- [ ] 中央寄せ(検討中)  
- [ ] ~~コマ問で次の(間違えた)問題へのボタン~~  

## Usage
`git clone https://github.com/kumavale/ExPing-t.git` or Download ZIP  
Chromeの拡張機能画面でデベロッパーモードを `on`  
`パッケージ化されていない拡張機能を読み込む` からフォルダをまるごと指定  
`拡張機能のオプション` 又は アイコンをクリックし`オプション` から設定の変更が出来ます


## Note
<a name="note-1"></a>
1. 書式一覧

    | 指定子 |   説明          |
    | :----: | :-------        |
    |   %n   | 問題番号        |
    |   %i   | 問題ID          |
    |   %Y   | 年              |
    |   %M   | 月              |
    |   %D   | 日              |
    |   %w   | 曜日            |
    |   %H   | 時(24)          |
    |   %h   | 時(12)          |
    |   %m   | 分              |
    |   %s   | 秒              |
    |   %%   | %               |
    | %桁数  | 指定桁数で0埋め |
