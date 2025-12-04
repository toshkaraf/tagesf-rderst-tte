@echo off
chcp 65001 >nul
echo ========================================
echo Запуск сервера разработки
echo ========================================
echo.

cd /d "%~dp0"

echo Проверка зависимостей...
if not exist "node_modules" (
    echo Установка зависимостей...
    call npm install
    if errorlevel 1 (
        echo ОШИБКА: Не удалось установить зависимости
        pause
        exit /b 1
    )
)

echo.
echo Запуск сервера...
echo.
echo ========================================
echo Сервер будет доступен по адресу:
echo http://localhost:3000
echo ========================================
echo.
echo Нажмите Ctrl+C для остановки сервера
echo.

call npm run dev

pause



