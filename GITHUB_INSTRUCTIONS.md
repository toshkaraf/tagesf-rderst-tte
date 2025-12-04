# Инструкция по загрузке проекта в GitHub

## Быстрая загрузка

### Шаг 1: Создайте репозиторий на GitHub

1. Откройте https://github.com
2. Нажмите кнопку **"+"** → **"New repository"**
3. Название: `tagesforderstatte` или `Tagesförderstätte`
4. Описание: `Interaktive Bildungsprogramme für Tagesförderstätte`
5. Выберите **Public** или **Private**
6. **НЕ** создавайте README, .gitignore, лицензию
7. Нажмите **"Create repository"**

### Шаг 2: Скопируйте URL репозитория

После создания GitHub покажет URL:
```
https://github.com/ваш-username/tagesforderstatte.git
```

### Шаг 3: Загрузите код

**Вариант А: Используйте скрипт (рекомендуется)**
```powershell
.\upload-to-github.ps1
```

**Вариант Б: Вручную**
```powershell
git remote add origin https://github.com/ваш-username/tagesforderstatte.git
git branch -M main
git push -u origin main
```

## Что будет загружено

✅ Полный исходный код приложения
✅ Система переводов (немецкий/русский)
✅ Кнопка переключения языка
✅ Все компоненты и страницы
✅ 51 слайд о рыцарских турнирах
✅ Викторины и вопросы
✅ Медиа файлы и конфигурация

## После загрузки

Проект будет доступен по адресу:
```
https://github.com/ваш-username/tagesforderstatte
```
