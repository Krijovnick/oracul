# Tarot & Dreams

Монорепозиторий для гадания на картах Таро и расшифровки снов.

## Стек

| Часть | Технологии |
|-------|------------|
| Frontend | Next.js, TypeScript, Zustand, Tailwind CSS, Motion (FSD) |
| Backend | NestJS, TypeScript, PostgreSQL |

## Быстрый старт

### 1. Зависимости

```bash
npm install
```

### 2. Переменные окружения

```bash
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

### 3. База данных

Убедитесь, что **Docker Desktop** запущен, затем:

```bash
npm run docker:up
```

PostgreSQL поднимается на порту **5433** (чтобы не конфликтовать с локальными сервисами на 5432).

### 4. Запуск (фронт + бек)

```bash
npm run dev
```

- Frontend: http://localhost:3001
- Backend API: http://localhost:3003/api

## Структура

```
├── frontend/          # Next.js + FSD (Feature-Sliced Design)
│   └── src/
│       ├── app/           # Next.js роутинг (тонкие обёртки)
│       ├── screens/       # FSD Pages — композиции страниц
│       ├── widgets/       # Крупные блоки UI (header, landing-hero)
│       ├── features/      # Пользовательские сценарии (tarot-status, dreams-status)
│       ├── entities/      # Бизнес-сущности (tarot-card)
│       └── shared/        # API, конфиг, стили
├── backend/           # NestJS API
│   └── src/
│       ├── tarot/
│       ├── dreams/
│       ├── shares/
│       └── database/
└── docker-compose.yml
```

### FSD на фронтенде

Слой **Pages** в FSD назван `screens`, потому что `src/pages` занят роутером Next.js.

Правило импортов: слой может импортировать только из слоёв ниже (`screens` → `widgets` → `features` → `entities` → `shared`).

### CSS и анимации карт

- **Tailwind CSS** — вёрстка, адаптив, дизайн-токены (уже используется)
- **Motion** — flip, раздача, веер, drag карт с физикой spring (установлен, подключим при реализации раскладов)
- Статичные эффекты (золотой градиент, рубашка) — CSS в `shared/styles/`
