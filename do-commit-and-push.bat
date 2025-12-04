@echo off
chcp 65001 >nul
cd /d "c:\dev\projects\Tagesförderstätte"

echo ========================================
echo Загрузка в GitHub
echo ========================================
echo.

echo [1/5] Добавление файлов...
git add .
if %errorlevel% equ 0 (
    echo ✓ Файлы добавлены
) else (
    echo ✗ Ошибка при добавлении файлов
    pause
    exit /b 1
)
echo.

echo [2/5] Создание коммита "Translate tournaments topic"...
git commit -m "Translate tournaments topic"
if %errorlevel% equ 0 (
    echo ✓ Коммит создан
) else (
    echo ℹ Нет изменений для коммита или коммит уже существует
)
echo.

echo [3/5] Настройка remote...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/toshkaraf/tagesf-rderst-tte.git
if %errorlevel% equ 0 (
    echo ✓ Remote настроен
) else (
    echo ℹ Remote уже существует, обновляю...
    git remote set-url origin https://github.com/toshkaraf/tagesf-rderst-tte.git
)
echo.

echo [4/5] Переименование ветки в main...
git branch -M main
echo ✓ Готово
echo.

echo [5/5] Отправка в GitHub...
echo Это может занять некоторое время...
git push -u origin main
if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo ✓ УСПЕШНО ЗАГРУЖЕНО В GITHUB!
    echo ========================================
    echo.
    echo Репозиторий: https://github.com/toshkaraf/tagesf-rderst-tte
    echo.
) else (
    echo.
    echo ========================================
    echo ✗ ОШИБКА ПРИ ЗАГРУЗКЕ
    echo ========================================
    echo.
    echo Возможные причины:
    echo 1. Нет авторизации в git
    echo 2. Нет прав доступа к репозиторию
    echo 3. Проблемы с сетью
    echo.
)
echo.
pause
