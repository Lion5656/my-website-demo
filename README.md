# 個人作品集網站

> 一份現代化、響應式的個人作品集網站，用於展示技能、專案與聯絡資訊。

---

## 📋 專案簡介

這是我的的個人作品集網站，以單頁應用程式（SPA）形式呈現，包含以下幾個核心區塊：

- **首頁（Hero）**：圖片輪播搭配打字動畫效果
- **關於我（About）**：個人簡介、興趣愛好與履歷下載
- **專業技能（Skills）**：後端、前端、資料庫、開發工具、版本控制及作業系統
- **專案作品（Portfolio）**：員工管理系統、防詐風險 App 等實作專案
- **聯絡我（Contact）**：社群連結與聯絡表單

---

## 🛠️ 技術棧

| 類別 | 技術 |
|------|------|
| 建置工具 | [Vite](https://vitejs.dev/) v8 |
| 樣式框架 | [Bootstrap](https://getbootstrap.com/) v5、自訂 SCSS |
| 圖示庫 | [Bootstrap Icons](https://icons.getbootstrap.com/) v1.13 |
| 打字動畫 | [Typed.js](https://mattboldt.com/demos/typed-js/) v3 |
| CSS 預處理器 | [SCSS](https://sass-lang.com/)|
| 語言 | HTML5、JavaScript（ES Module）、SCSS |

---

## 📁 專案目錄結構

```
website/
├── index.html              # 主要 HTML 入口
├── vite.config.js          # Vite 建置設定
├── package.json            # 專案依賴與腳本
├── public/                 # 靜態資源（Vite 直接複製）
│   └── img/                # 公開圖片資源
├── src/
│   ├── assets/             # 原始資源（CSS/JS 引用）
│   ├── css/
│   │   ├── abstract/
│   │   │   └── _variable.scss   # SCSS 變數與設計 token
│   │   └── layout/
│   │       └── _main.scss       # 主要版面配置樣式
│   └── js/
│       └── main.js         # 主要 JavaScript 邏輯
├── assets/
│   ├── cv.pdf              # 個人履歷
│   └── public/img/         # 專案圖片素材
└── dist/                   # 建置輸出目錄（自動生成）
```

---

## 🚀 快速開始

### 前置需求

- [Node.js](https://nodejs.org/) >= 18
- npm >= 9

### 安裝依賴

```bash
npm install
```

### 本地開發（熱更新）

```bash
npm run dev
```

開啟瀏覽器前往 [http://localhost:5173](http://localhost:5173)

### 建置正式版本

```bash
npm run build
```

建置結果將輸出至 `dist/` 目錄。

### 預覽正式版本

```bash
npm run preview
```

---

## ✨ 功能特色

- **響應式設計**：支援桌面、平板、手機等各種螢幕尺寸
- **側邊導覽列**：桌面版左側固定導覽，手機版隱藏，附切換按鈕
- **頁面載入動畫**：自訂旋轉 Preloader，提升使用者體驗
- **打字動畫**：使用 Typed.js 實現動態文字切換效果
- **圖片輪播**：首頁 Hero 區自動輪播背景圖片
- **Anti-Gravity 卡片**：自訂懸停效果的技能卡片與作品集卡片
- **聯絡表單**：包含姓名、Email、留言欄位與隱私權政策確認

---

## 🔧 自訂設定

主要的設計變數定義於 `src/css/abstract/_variable.scss`，可依需求調整配色、字型、間距等設計 token。

---

## 📄 授權

© 2026 Ming Jun Lee. All rights reserved.
