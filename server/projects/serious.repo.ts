import { IProject, IProjectFlat } from "@/entities/project";
import { tp } from "@/shared/lib/formatting";
import { AppLocale } from "@/shared/сonfig/const";

const GH = "https://github.com/Cfvbhgc/";
const PREVIEW = "/portfolio/static/previews/";

export const SERIOUS_PROJECTS_BASE = [
    {
        id: "tg-rag-assistant",
        github: `${GH}tg-rag-assistant`,
        previewImg: {
            src: `${PREVIEW}tg-rag-assistant.jpg`,
        },
        category: "AI / Telegram",

        ru: {
            name: "ИИ-бот знаний",
            summary: tp(
                "Telegram-бот, который отвечает на вопросы строго по загруженным документам компании (прайсы, инструкции, договоры) и не выдумывает. Использует RAG: находит нужный фрагмент в документах и отвечает по нему, а не из общих знаний. Если ответа в базе нет — честно говорит об этом. Python, aiogram, векторный поиск, LLM.",
            ),
        },

        en: {
            name: "Knowledge bot",
            summary:
                "A Telegram bot that answers strictly from the company's uploaded documents (price lists, manuals, contracts) and never makes things up. It uses RAG: it finds the relevant passage in the documents and answers from it, not from general knowledge. If the answer isn't in the base, it says so honestly. Python, aiogram, vector search, LLM.",
        },
    },

    {
        id: "ai-lead-assistant",
        github: `${GH}ai-lead-assistant`,
        previewImg: {
            src: `${PREVIEW}ai-lead-assistant.jpg`,
        },
        category: "AI / Заявки",

        ru: {
            name: "ИИ по заявкам",
            summary: tp(
                "Принимает заявки с сайта и из Telegram, сам расспрашивает клиента (услуга, бюджет, сроки, контакт), отвечает на типовые вопросы по прайсу и отдаёт менеджеру готовую квалифицированную заявку. Сложные случаи переводит на живого человека. Работает круглосуточно. Python, FastAPI, aiogram, LLM.",
            ),
        },

        en: {
            name: "AI lead intake",
            summary:
                "Takes requests from the website and Telegram, questions the client itself (service, budget, timeline, contact), answers typical price questions and hands the manager a ready, qualified lead. It routes hard cases to a human. Runs around the clock. Python, FastAPI, aiogram, LLM.",
        },
    },

    {
        id: "price-parser-ai",
        github: `${GH}price-parser-ai`,
        previewImg: {
            src: `${PREVIEW}price-parser-ai.jpg`,
        },
        category: "AI / Парсинг",

        ru: {
            name: "Парсер прайсов",
            summary: tp(
                "Разбирает прайсы поставщиков в Excel с любой структурой — разные колонки, объединённые ячейки, мусорные шапки. Находит заголовок по смыслу, а не по номеру строки, определяет структуру через ИИ один раз на файл, категоризирует товары и выдаёт аккуратный Excel-отчёт. Python, openpyxl, LLM.",
            ),
        },

        en: {
            name: "AI price parser",
            summary:
                "Parses supplier price lists in Excel with any structure — varying columns, merged cells, junk headers. It finds the header row by meaning rather than by line number, detects the structure with AI once per file, categorizes the items and outputs a clean Excel report. Python, openpyxl, LLM.",
        },
    },

    {
        id: "marketplace-profit-dashboard",
        github: `${GH}marketplace-profit-dashboard`,
        previewImg: {
            src: `${PREVIEW}marketplace-profit-dashboard.jpg`,
        },
        category: "Аналитика / Прибыль",

        ru: {
            name: "Прибыль МП",
            summary: tp(
                "Сводит данные о продажах из API маркетплейса и считает реальную прибыль: выручка минус комиссии, логистика, себестоимость, возвраты. Показывает убыточные товары, которые в «выручке» выглядят нормально. Фоновая синхронизация, KPI, графики, cash-flow выплат. FastAPI, React, PostgreSQL.",
            ),
        },

        en: {
            name: "Profit dashboard",
            summary:
                "Pulls sales data from the marketplace API and computes real profit: revenue minus fees, logistics, cost of goods and returns. It surfaces loss-making items that look fine by «revenue». Background sync, KPIs, charts, payout cash-flow. FastAPI, React, PostgreSQL.",
        },
    },

    {
        id: "analytics-dashboard-roles",
        github: `${GH}analytics-dashboard-roles`,
        previewImg: {
            src: `${PREVIEW}analytics-dashboard-roles.jpg`,
        },
        category: "CRM / Доступы",

        ru: {
            name: "CRM с ролями",
            summary: tp(
                "Аналитическая панель с разграничением доступа: директор видит всю финансовую картину, менеджер — только свои продажи. Права проверяются на сервере, а не прячутся в интерфейсе — менеджер не получит чужие данные даже через прямой запрос. JWT-авторизация, аудит действий. FastAPI, React, PostgreSQL.",
            ),
        },

        en: {
            name: "CRM dashboard",
            summary:
                "An analytics panel with access control: the director sees the full financial picture, a manager sees only their own sales. Permissions are enforced on the server, not hidden in the UI — a manager can't get others' data even via a direct request. JWT auth, action audit log. FastAPI, React, PostgreSQL.",
        },
    },

    {
        id: "docx-generator",
        github: `${GH}docx-generator`,
        previewImg: {
            src: `${PREVIEW}docx-generator.jpg`,
        },
        category: "Документы",

        ru: {
            name: "Генератор докум.",
            summary: tp(
                "Заполняет однотипные документы (договор, счёт, акт) по введённым данным одним нажатием. Форматирование шаблона сохраняется один в один, сумма прописью считается с правильными окончаниями, готовые файлы скачиваются пакетом. Python, FastAPI, docxtpl, React.",
            ),
        },

        en: {
            name: "Doc generator",
            summary:
                "Fills repetitive documents (contract, invoice, act) from entered data in one click. The template formatting is preserved exactly, the amount-in-words is spelled with correct grammatical endings, and finished files download in a batch. Python, FastAPI, docxtpl, React.",
        },
    },

    {
        id: "company-enricher",
        github: `${GH}company-enricher`,
        previewImg: {
            src: `${PREVIEW}company-enricher.jpg`,
        },
        category: "Данные / Обогащение",

        ru: {
            name: "Обогащение баз",
            summary: tp(
                "По списку компаний (название, ИНН) находит официальные сайты, проверяет принадлежность по ИНН, собирает email и выдаёт Excel-отчёт. Не тащит в базу почту агрегаторов — сайт считается сайтом компании только когда это доказано. Python, openpyxl.",
            ),
        },

        en: {
            name: "Data enrichment",
            summary:
                "From a list of companies (name, tax ID) it finds official websites, verifies ownership by tax ID, collects emails and outputs an Excel report. It won't pull aggregator emails into the base — a site counts as the company's own only once that's proven. Python, openpyxl.",
        },
    },
] satisfies IProject[];

export const getSeriousProjects = async (
    locale: AppLocale = "ru",
): Promise<IProjectFlat[]> =>
    SERIOUS_PROJECTS_BASE.map(({ ru, en, ...base }) => ({
        ...base,
        ...(locale === "en" ? en : ru),
    }));
