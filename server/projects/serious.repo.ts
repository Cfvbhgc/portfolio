import { ISeriousProject, ISeriousProjectFlat } from "@/entities/project";
import { tp } from "@/shared/lib/formatting";
import { AppLocale } from "@/shared/сonfig/const";

const GH = "https://github.com/Cfvbhgc/";

export const SERIOUS_PROJECTS_BASE = [
    {
        id: "tg-rag-assistant",
        github: `${GH}tg-rag-assistant`,
        category: "AI / Telegram",

        ru: {
            name: "ИИ-ассистент по базе знаний (Telegram-бот)",
            summary: tp(
                "Telegram-бот, который отвечает на вопросы строго по загруженным документам компании (прайсы, инструкции, договоры) и не выдумывает. Использует RAG: находит нужный фрагмент в документах и отвечает по нему, а не из общих знаний. Если ответа в базе нет — честно говорит об этом. Python, aiogram, векторный поиск, LLM.",
            ),
        },

        en: {
            name: "Knowledge-base AI assistant (Telegram bot)",
            summary:
                "A Telegram bot that answers strictly from the company's uploaded documents (price lists, manuals, contracts) and never makes things up. It uses RAG: it finds the relevant fragment in the documents and answers from it, not from general knowledge. If the answer isn't in the base, it says so honestly. Python, aiogram, vector search, LLM.",
        },
    },

    {
        id: "ai-lead-assistant",
        github: `${GH}ai-lead-assistant`,
        category: "AI / Заявки",

        ru: {
            name: "ИИ-ассистент по обработке заявок",
            summary: tp(
                "Принимает заявки с сайта и из Telegram, сам расспрашивает клиента (услуга, бюджет, сроки, контакт), отвечает на типовые вопросы по прайсу и отдаёт менеджеру готовую квалифицированную заявку. Сложные случаи переводит на живого человека. Работает круглосуточно. Python, FastAPI, aiogram, LLM.",
            ),
        },

        en: {
            name: "AI assistant for incoming leads",
            summary:
                "Takes requests from the site and from Telegram, questions the client itself (service, budget, deadlines, contact), answers routine pricing questions and hands the manager a ready, qualified lead. Complex cases go to a human. Works around the clock. Python, FastAPI, aiogram, LLM.",
        },
    },

    {
        id: "price-parser-ai",
        github: `${GH}price-parser-ai`,
        category: "AI / Парсинг",

        ru: {
            name: "Парсер прайс-листов через ИИ",
            summary: tp(
                "Разбирает прайсы поставщиков в Excel с любой структурой — разные колонки, объединённые ячейки, мусорные шапки. Находит заголовок по смыслу, а не по номеру строки, определяет структуру через ИИ один раз на файл, категоризирует товары и выдаёт аккуратный Excel-отчёт. Python, openpyxl, LLM.",
            ),
        },

        en: {
            name: "AI price-list parser",
            summary:
                "Parses supplier price lists in Excel with any structure — different columns, merged cells, junk headers. It finds the header by meaning rather than row number, detects the structure via AI once per file, categorizes the items and outputs a tidy Excel report. Python, openpyxl, LLM.",
        },
    },

    {
        id: "marketplace-profit-dashboard",
        github: `${GH}marketplace-profit-dashboard`,
        category: "Аналитика / Прибыль",

        ru: {
            name: "Дашборд честной прибыли для маркетплейсов",
            summary: tp(
                "Сводит данные о продажах из API маркетплейса и считает реальную прибыль: выручка минус комиссии, логистика, себестоимость, возвраты. Показывает убыточные товары, которые в «выручке» выглядят нормально. Фоновая синхронизация, KPI, графики, cash-flow выплат. FastAPI, React, PostgreSQL.",
            ),
        },

        en: {
            name: "Honest-profit dashboard for marketplaces",
            summary:
                "Pulls sales data from a marketplace API and computes real profit: revenue minus commissions, logistics, cost of goods, returns. It surfaces loss-making products that look fine by «revenue» alone. Background sync, KPIs, charts, payout cash-flow. FastAPI, React, PostgreSQL.",
        },
    },

    {
        id: "analytics-dashboard-roles",
        github: `${GH}analytics-dashboard-roles`,
        category: "CRM / Доступы",

        ru: {
            name: "CRM-дашборд с ролями и правами",
            summary: tp(
                "Аналитическая панель с разграничением доступа: директор видит всю финансовую картину, менеджер — только свои продажи. Права проверяются на сервере, а не прячутся в интерфейсе — менеджер не получит чужие данные даже через прямой запрос. JWT-авторизация, аудит действий. FastAPI, React, PostgreSQL.",
            ),
        },

        en: {
            name: "CRM dashboard with roles & permissions",
            summary:
                "An analytics panel with access control: the director sees the full financial picture, a manager sees only their own sales. Permissions are checked on the server, not hidden in the UI — a manager can't get others' data even through a direct request. JWT auth, action audit. FastAPI, React, PostgreSQL.",
        },
    },

    {
        id: "docx-generator",
        github: `${GH}docx-generator`,
        category: "Документы",

        ru: {
            name: "Генератор документов из шаблонов",
            summary: tp(
                "Заполняет однотипные документы (договор, счёт, акт) по введённым данным одним нажатием. Форматирование шаблона сохраняется один в один, сумма прописью считается с правильными окончаниями, готовые файлы скачиваются пакетом. Python, FastAPI, docxtpl, React.",
            ),
        },

        en: {
            name: "Document generator from templates",
            summary:
                "Fills repetitive documents (contract, invoice, act) from entered data in one click. The template formatting is preserved exactly, the amount-in-words is computed with correct grammatical endings, and ready files download as a batch. Python, FastAPI, docxtpl, React.",
        },
    },

    {
        id: "company-enricher",
        github: `${GH}company-enricher`,
        category: "Данные / Обогащение",

        ru: {
            name: "Обогащение базы компаний контактами",
            summary: tp(
                "По списку компаний (название, ИНН) находит официальные сайты, проверяет принадлежность по ИНН, собирает email и выдаёт Excel-отчёт. Не тащит в базу почту агрегаторов — сайт считается сайтом компании только когда это доказано. Python, openpyxl.",
            ),
        },

        en: {
            name: "Company database enrichment",
            summary:
                "From a list of companies (name, INN) it finds official sites, verifies ownership by INN, collects emails and outputs an Excel report. It never pulls aggregators' mail into the base — a site counts as the company's site only when it's proven. Python, openpyxl.",
        },
    },
] satisfies ISeriousProject[];

export const getSeriousProjects = async (
    locale: AppLocale = 'ru',
): Promise<ISeriousProjectFlat[]> =>
    SERIOUS_PROJECTS_BASE.map(({ ru, en, ...base }) => ({
        ...base,
        ...(locale === 'en' ? en : ru),
    }));
