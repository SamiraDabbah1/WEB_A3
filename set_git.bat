:: this bat file is used to set git repository
:: to run use .\set_git.bat
@echo off
:: add :: before the next row to initialize the repository
::exit /b

git init
git add .
git commit -m "reema adding db"
git branch -M main
git remote add origin https://github.com/ReemaNa81/WEB_LMS/tree/main
git push -u origin main