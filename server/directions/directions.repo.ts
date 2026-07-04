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

const REPOS: Record<string, [name: string, stack: string][]> = {
    backend: [
        ["auth-micro", "FastAPI · PostgreSQL · Redis · JWT / 2FA"],
        ["booking-api", ".NET 8 · EF Core · PostgreSQL"],
        ["currency-x", "Java 17 · Spring Boot · gRPC · Redis"],
        ["foodflow-api", "Node.js · Express · MongoDB · Stripe"],
        ["img-processor", ".NET 8 · ImageSharp"],
        ["market-api", "Python · Flask · PostgreSQL"],
        ["meet-room", "Java · Spring Boot · JPA"],
        ["news-aggr", "PHP 8.2 · Slim 4 · MySQL"],
        ["notify-hub", "Node.js · RabbitMQ · WebSocket"],
        ["pdf-forge", "Node.js · Puppeteer"],
        ["price-radar", "FastAPI · Celery · Redis"],
        ["snaplink", "TypeScript · Express · Redis"],
    ],
    bots: [
        ["auto-poster", "Python · aiogram 3 · Celery"],
        ["quiz-master", "Python · aiogram 3 · PostgreSQL · Redis"],
        ["schedule-bot", "Python · aiogram 3 · APScheduler"],
        ["server-watch", "Python · psutil · matplotlib"],
        ["shop-bot", "Python · aiogram 3 · PostgreSQL"],
    ],
    fullstack: [
        ["admin-pro", "Laravel 11 · Vue 3 · MySQL"],
        ["blog-cms", "PHP 8.2 · MVC · MySQL"],
        ["helpdesk", "Laravel 11 · Livewire 3 · MySQL"],
        ["live-chat", "Node.js · Socket.io · MongoDB"],
        ["shop-engine", "Laravel 11 · Blade · MySQL"],
        ["stock-manager", ".NET 8 · Blazor Server · SQLite"],
        ["task-flow", "Java · Spring Boot · Thymeleaf"],
    ],
    mobile: [
        ["fit-log", "Kotlin · Room · MVP"],
        ["habit-pulse", "Kotlin · Jetpack Compose · Room"],
        ["note-keeper", "Java · Android · Room"],
        ["quick-chat", "Kotlin · Compose · Hilt"],
        ["split-pay", "Kotlin · Compose · Clean Architecture"],
        ["weather-now", "Kotlin · Compose · Retrofit"],
    ],
    desktop: [
        ["fin-tracker", "C# · WPF · SQLite"],
        ["particle-sim", "C++17 · OpenGL · GLFW"],
        ["thread-serv", "C++17 · POSIX threads"],
    ],
    cli: [
        ["chess-engine", "C++17 · UCI"],
        ["file-nav", "C · ncurses"],
        ["huff-compress", "C++ · Huffman"],
        ["log-analyzer", "Java 17 · Picocli"],
        ["sheet-sync", "Python · pandas · ReportLab"],
    ],
};

export const DIRECTION_CATEGORIES_BASE = Object.entries(REPOS).flatMap(
    ([directionId, repos]) =>
        repos.map(([name, stack], index) => ({
            id: name,
            directionId,
            order: index + 1,
            stack,
            href: `${GH}${name}`,

            ru: {
                title: name,
            },

            en: {
                title: name,
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
