Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Загрузка проекта в GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$repoUrl = Read-Host "Введите URL вашего GitHub репозитория (например: https://github.com/username/repo.git)"

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "Ошибка: URL репозитория не указан!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Проверка текущего статуса git..." -ForegroundColor Yellow

# Проверка, есть ли уже remote
$existingRemote = git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "Найден существующий remote: $existingRemote" -ForegroundColor Yellow
    $update = Read-Host "Изменить на новый URL? (y/n)"
    if ($update -eq 'y' -or $update -eq 'Y') {
        git remote set-url origin $repoUrl
        Write-Host "✓ Remote обновлен" -ForegroundColor Green
    } else {
        Write-Host "Используется существующий remote" -ForegroundColor Yellow
        $repoUrl = $existingRemote
    }
} else {
    git remote add origin $repoUrl
    Write-Host "✓ Remote добавлен" -ForegroundColor Green
}

Write-Host ""
Write-Host "Проверка ветки..." -ForegroundColor Yellow
$currentBranch = git branch --show-current
if ($currentBranch -ne 'main') {
    Write-Host "Переименование ветки в main..." -ForegroundColor Yellow
    git branch -M main
    Write-Host "✓ Ветка переименована" -ForegroundColor Green
}

Write-Host ""
Write-Host "Отправка кода в GitHub..." -ForegroundColor Yellow
Write-Host "Это может занять некоторое время..." -ForegroundColor Gray
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "✓ Код успешно загружен в GitHub!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Репозиторий доступен по адресу:" -ForegroundColor Cyan
    $repoUrl -replace '\.git$', '' | Write-Host -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "Ошибка при загрузке!" -ForegroundColor Red
    Write-Host "Проверьте:" -ForegroundColor Yellow
    Write-Host "1. Правильность URL репозитория"
    Write-Host "2. Авторизацию в git"
    Write-Host "3. Права доступа к репозиторию"
}

Write-Host ""
Read-Host "Нажмите Enter для выхода"
