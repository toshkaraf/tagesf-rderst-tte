Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Запуск сервера разработки Vite" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Проверка Node.js
Write-Host "Проверка Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js установлен: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js не найден! Установите Node.js." -ForegroundColor Red
    exit 1
}

# Проверка npm
Write-Host "Проверка npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✓ npm установлен: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ npm не найден!" -ForegroundColor Red
    exit 1
}

# Проверка зависимостей
Write-Host "Проверка зависимостей..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "✓ Зависимости установлены" -ForegroundColor Green
} else {
    Write-Host "✗ Зависимости не найдены. Устанавливаю..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "✗ Ошибка установки зависимостей!" -ForegroundColor Red
        exit 1
    }
}

# Проверка порта
Write-Host "Проверка порта 3000..." -ForegroundColor Yellow
$portInUse = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($portInUse) {
    Write-Host "⚠ Порт 3000 занят. Пытаюсь использовать другой порт..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Запуск сервера..." -ForegroundColor Green
Write-Host "Сервер будет доступен по адресу: http://localhost:3000" -ForegroundColor Cyan
Write-Host "Нажмите Ctrl+C для остановки" -ForegroundColor Gray
Write-Host ""

# Запуск сервера
npm run dev



