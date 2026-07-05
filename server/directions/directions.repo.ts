import { IDirection, IDirectionBase, IDirectionCategory, IDirectionCategoryBase } from "@/entities/direction";
import { AppLocale } from "@/shared/сonfig/const";

const GH = "https://github.com/Cfvbhgc/";

export const DIRECTIONS_BASE = [
    {
        id: "backend",
        number: "01",

        ru: {
            title: "Backend API",
            description:
                "REST и gRPC API, микросервисы, очереди и кэш — FastAPI, Spring Boot, .NET, Node.js, PHP.",
        },

        en: {
            title: "Backend API",
            description:
                "REST & gRPC APIs, microservices, queues and caching — FastAPI, Spring Boot, .NET, Node.js, PHP.",
        },
    },

    {
        id: "bots",
        number: "02",

        ru: {
            title: "Telegram-боты",
            description:
                "Боты на aiogram 3: магазины, квизы, расписания, автопостинг и мониторинг серверов.",
        },

        en: {
            title: "Telegram Bots",
            description:
                "aiogram 3 bots: shops, quizzes, schedules, auto-posting and server monitoring.",
        },
    },

    {
        id: "fullstack",
        number: "03",

        ru: {
            title: "Fullstack",
            description:
                "Приложения целиком: Laravel, Vue, Blazor, Spring Boot — от админок и CMS до реалтайм-чатов.",
        },

        en: {
            title: "Fullstack",
            description:
                "End-to-end apps: Laravel, Vue, Blazor, Spring Boot — from admin panels and CMS to real-time chats.",
        },
    },

    {
        id: "mobile",
        number: "04",

        ru: {
            title: "Мобильные (Android)",
            description:
                "Android-приложения на Kotlin и Jetpack Compose: привычки, чаты, финансы, погода.",
        },

        en: {
            title: "Mobile (Android)",
            description:
                "Android apps in Kotlin and Jetpack Compose: habits, chats, finances, weather.",
        },
    },

    {
        id: "desktop",
        number: "05",

        ru: {
            title: "Десктоп и системное",
            description:
                "Десктоп на WPF и системный код на C++: симуляции частиц, многопоточные серверы.",
        },

        en: {
            title: "Desktop & Systems",
            description:
                "WPF desktop and systems C++: particle simulations, multithreaded servers.",
        },
    },

    {
        id: "cli",
        number: "06",

        ru: {
            title: "CLI-инструменты",
            description:
                "Инструменты командной строки: шахматный движок, компрессия, анализ логов, файловый менеджер.",
        },

        en: {
            title: "CLI Tools",
            description:
                "Command-line tools: chess engine, compression, log analysis, file navigation.",
        },
    },
] satisfies IDirectionBase[];

const REPOS: Record<
    string,
    [name: string, stack: string, ruTitle: string, enTitle: string][]
> = {
    backend: [
        ["auth-micro", "FastAPI · PostgreSQL · Redis · JWT / 2FA", "Микросервис авторизации", "Auth microservice"],
        ["booking-api", ".NET 8 · EF Core · PostgreSQL", "API бронирования", "Booking API"],
        ["currency-x", "Java 17 · Spring Boot · gRPC · Redis", "Сервис курсов валют", "Currency rates service"],
        ["foodflow-api", "Node.js · Express · MongoDB · Stripe", "API доставки еды", "Food delivery API"],
        ["img-processor", ".NET 8 · ImageSharp", "Обработка изображений", "Image processing service"],
        ["market-api", "Python · Flask · PostgreSQL", "API интернет-магазина", "E-commerce API"],
        ["meet-room", "Java · Spring Boot · JPA", "Бронирование переговорок", "Meeting room booking"],
        ["news-aggr", "PHP 8.2 · Slim 4 · MySQL", "Агрегатор новостей", "News aggregator"],
        ["notify-hub", "Node.js · RabbitMQ · WebSocket", "Центр уведомлений", "Notification hub"],
        ["pdf-forge", "Node.js · Puppeteer", "Генератор PDF-документов", "PDF generator"],
        ["price-radar", "FastAPI · Celery · Redis", "Мониторинг цен", "Price monitoring"],
        ["snaplink", "TypeScript · Express · Redis", "Сокращатель ссылок", "Link shortener"],
    ],
    bots: [
        ["auto-poster", "Python · aiogram 3 · Celery", "Бот автопостинга", "Auto-posting bot"],
        ["quiz-master", "Python · aiogram 3 · PostgreSQL · Redis", "Квиз-бот с рейтингом", "Quiz bot"],
        ["schedule-bot", "Python · aiogram 3 · APScheduler", "Бот-расписание", "Schedule bot"],
        ["server-watch", "Python · psutil · matplotlib", "Мониторинг серверов", "Server monitoring bot"],
        ["shop-bot", "Python · aiogram 3 · PostgreSQL", "Бот-магазин", "Shop bot"],
    ],
    fullstack: [
        ["admin-pro", "Laravel 11 · Vue 3 · MySQL", "Админ-панель", "Admin panel"],
        ["blog-cms", "PHP 8.2 · MVC · MySQL", "CMS для блога", "Blog CMS"],
        ["helpdesk", "Laravel 11 · Livewire 3 · MySQL", "Служба поддержки", "Helpdesk"],
        ["live-chat", "Node.js · Socket.io · MongoDB", "Реалтайм-чат", "Real-time chat"],
        ["shop-engine", "Laravel 11 · Blade · MySQL", "Движок интернет-магазина", "E-commerce engine"],
        ["stock-manager", ".NET 8 · Blazor Server · SQLite", "Складской учёт", "Inventory manager"],
        ["task-flow", "Java · Spring Boot · Thymeleaf", "Таск-менеджер", "Task manager"],
    ],
    mobile: [
        ["fit-log", "Kotlin · Room · MVP", "Дневник тренировок", "Workout log"],
        ["habit-pulse", "Kotlin · Jetpack Compose · Room", "Трекер привычек", "Habit tracker"],
        ["note-keeper", "Java · Android · Room", "Заметки", "Notes app"],
        ["quick-chat", "Kotlin · Compose · Hilt", "Мессенджер", "Messenger"],
        ["split-pay", "Kotlin · Compose · Clean Architecture", "Делёж счёта в компании", "Bill splitting"],
        ["weather-now", "Kotlin · Compose · Retrofit", "Погода", "Weather app"],
    ],
    desktop: [
        ["fin-tracker", "C# · WPF · SQLite", "Учёт личных финансов", "Finance tracker"],
        ["particle-sim", "C++17 · OpenGL · GLFW", "Симуляция частиц", "Particle simulation"],
        ["thread-serv", "C++17 · POSIX threads", "Многопоточный сервер", "Multithreaded server"],
    ],
    cli: [
        ["chess-engine", "C++17 · UCI", "Шахматный движок", "Chess engine"],
        ["file-nav", "C · ncurses", "Файловый менеджер", "File manager"],
        ["huff-compress", "C++ · Huffman", "Архиватор (Хаффман)", "Huffman compressor"],
        ["log-analyzer", "Java 17 · Picocli", "Анализатор логов", "Log analyzer"],
        ["sheet-sync", "Python · pandas · ReportLab", "Отчёты из таблиц", "Spreadsheet reports"],
    ],
};

export const DIRECTION_CATEGORIES_BASE = Object.entries(REPOS).flatMap(
    ([directionId, repos]) =>
        repos.map(([name, stack, ruTitle, enTitle], index) => ({
            id: name,
            directionId,
            order: index + 1,
            stack,
            href: `${GH}${name}`,

            ru: {
                title: ruTitle,
            },

            en: {
                title: enTitle,
            },
        })),
) satisfies IDirectionCategoryBase[];

export const getDirections = async (
    locale: AppLocale = "ru",
): Promise<IDirection[]> =>
    DIRECTIONS_BASE.map(({ ru, en, ...base }) => ({
        ...base,
        ...(locale === "en" ? en : ru),
    }));

export const getDirectionCategories = async (
    locale: AppLocale = "ru",
): Promise<IDirectionCategory[]> =>
    DIRECTION_CATEGORIES_BASE.map(({ ru, en, ...base }) => ({
        ...base,
        ...(locale === "en" ? en : ru),
    }));
