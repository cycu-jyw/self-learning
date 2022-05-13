---
title: 在 VSC 開發專案
---

[教學錄影](https://youtu.be/kqfOoEts8MQ)

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
5. 切換到專案目錄。
   ```Bash
   cd <project_url>
   ```
6. 在工作目錄中使用以下指令開啟 `Visual Studio Code`。
   ```Bash
   code .
   ```
7. 在 VSC 裡面修改檔案。需要 Commit 時，按照以下步驟進行。  
   
   ![vsccommit](/img/vsccommit.png)
8. 最後要把檔案推到雲端時，按以下 `Sync Changes` 按鈕，檔案就會同步到雲端了。  

   ![vscpush](/img/vscpush.png)


