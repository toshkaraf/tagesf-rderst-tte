@echo off
cd /d "%~dp0"
chcp 65001
cls

echo ========================================
echo ЗАГРУЗКА В GITHUB
echo ========================================
echo.

echo Добавление файлов...
git add .

echo.
echo Создание коммита "Translate tournaments topic"...
git commit -m "Translate tournaments topic"

echo.
echo Настройка remote репозитория...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/toshkaraf/tagesf-rderst-tte.git

echo.
echo Переименование ветки в main...
git branch -M main

echo.
echo Отправка в GitHub...
echo (Это может занять некоторое время)
echo.
git push -u origin main

echo.
echo ========================================
if %errorlevel% equ 0 (
    echo УСПЕШНО ЗАГРУЖЕНО!
) else (
    echo ОШИБКА при загрузке
)
echo ========================================
echo.
pause
