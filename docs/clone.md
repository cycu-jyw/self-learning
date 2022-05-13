---
title: 取得 GitHub 專案
---

[教學錄影](#)

本單元學習從 GitHub 取得專案，並在自己的電腦進行開發，學習重點如下：
1. 開啟 Git Bash 終端機（從`開始`裡面去找）。
2. 建立一個工作目錄並切換到該目錄，可參考以下 Bash 常用指令：
   
   指令 | 功能
   :-----:|:-----:
   mkdir `<dir>` | 建立 `<dir>` 目錄
   cd `<dir>` | 切換到 `<dir>` 目錄
   pwd | 顯示目前目錄
   cat `<file>` | 顯示檔案 `<file>` 的內容

3. 在 GitHub 中找專案的 `url`，點擊 `Code`，然後再點擊 `ssh`。
   ![giturl](/img/giturl.png)
4. 在工作目錄，用以下指令把專案複製到 Local 端。如果它要求 Yes/No 之類的問題，回答 Yes。
   ```Bash
   git clone <project_url>
   ```



