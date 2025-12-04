# Инструкция по загрузке проекта в GitHub

## Шаг 1: Создайте репозиторий на GitHub

1. Перейдите на https://github.com
2. Нажмите кнопку **"New"** (или **"+"** → **"New repository"**)
3. Введите название репозитория, например: `Tagesförderstätte`
4. Выберите **Public** или **Private**
5. **НЕ** создавайте README, .gitignore или лицензию (они уже есть)
6. Нажмите **"Create repository"**

## Шаг 2: Скопируйте URL репозитория

После создания репозитория GitHub покажет URL вида:
```
https://github.com/ваш-username/tagesforderstatte.git
```

## Шаг 3: Загрузите код

Откройте PowerShell или командную строку в папке проекта и выполните:

```bash
cd c:\dev\projects\Tagesförderstätte

# Добавить удаленный репозиторий (замените URL на ваш!)
git remote add origin https://github.com/ваш-username/tagesforderstatte.git

# Переименовать ветку в main (если нужно)
git branch -M main

# Отправить код в GitHub
git push -u origin main
```

## Что уже готово

✅ Все файлы добавлены в git
✅ Система переводов (немецкий/русский)
✅ Кнопка переключения языка
✅ Интерфейс переведен
✅ Готово к загрузке

## Если возникнут проблемы

- Проверьте, что вы авторизованы в git: `git config user.name` и `git config user.email`
- Если репозиторий уже существует, используйте: `git remote set-url origin URL`
- Для просмотра удаленных репозиториев: `git remote -v`
