@echo off
chcp 65001 >nul
title Запуск сервера Tagesförderstätte
color 0A

echo.
echo ========================================
echo   ЗАПУСК СЕРВЕРА РАЗРАБОТКИ
echo ========================================
echo.
echo Папка: %CD%
echo.

REM Проверка Node.js
echo [1/4] Проверка Node.js...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ОШИБКА] Node.js не найден!
    echo.
    echo Установите Node.js с сайта: https://nodejs.org/
    echo.
    pause
    exit /b 1
)
node --version
echo [OK] Node.js найден
echo.

REM Проверка npm
echo [2/4] Проверка npm...
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo [ОШИБКА] npm не найден!
    pause
    exit /b 1
)
npm --version
echo [OK] npm найден
echo.

REM Проверка зависимостей
echo [3/4] Проверка зависимостей...
if not exist "node_modules" (
    echo [ВНИМАНИЕ] Зависимости не установлены!
    echo Устанавливаю зависимости (это может занять несколько минут)...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo [ОШИБКА] Не удалось установить зависимости!
        echo Проверьте подключение к интернету и попробуйте снова.
        pause
        exit /b 1
    )
    echo.
    echo [OK] Зависимости установлены
) else (
    echo [OK] Зависимости уже установлены
)
echo.

REM Запуск сервера
echo [4/4] Запуск сервера...
echo.
echo ========================================
echo   СЕРВЕР ЗАПУСКАЕТСЯ...
echo ========================================
echo.
echo После запуска откройте браузер и перейдите на:
echo   http://localhost:3000
echo.
echo Нажмите Ctrl+C для остановки сервера
echo.
echo ========================================
echo.

call npm run dev

pause



