# Скрипт для загрузки в GitHub
cd c:\dev\projects\Tagesförderstätte

Write-Host "Добавление всех файлов..." -ForegroundColor Yellow
git add .

Write-Host "Создание коммита..." -ForegroundColor Yellow
git commit -m "Translate tournaments topic"

Write-Host "Настройка remote..." -ForegroundColor Yellow
git remote set-url origin https://github.com/toshkaraf/tagesf-rderst-tte.git 2>$null
if ($LASTEXITCODE -ne 0) {
    git remote add origin https://github.com/toshkaraf/tagesf-rderst-tte.git
}

Write-Host "Переименование ветки в main..." -ForegroundColor Yellow
git branch -M main

Write-Host "Загрузка в GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✓ Успешно загружено в GitHub!" -ForegroundColor Green
    Write-Host "Репозиторий: https://github.com/toshkaraf/tagesf-rderst-tte" -ForegroundColor Cyan
} else {
    Write-Host "`n✗ Ошибка при загрузке. Проверьте:" -ForegroundColor Red
    Write-Host "1. Авторизацию в git" -ForegroundColor Yellow
    Write-Host "2. Права доступа к репозиторию" -ForegroundColor Yellow
}
