# Task Routing Rule

Этот документ определяет, кто из команды должен выполнять задачу.

## Главное правило

Основным исполнителем становится агент, чья зона ответственности ближе всего к конечному результату задачи.

Если задача требует нескольких ролей, назначается один основной исполнитель и список поддерживающих агентов.

## Алгоритм выбора исполнителя

1. Определить главный результат задачи.
2. Найти роль, которая отвечает за этот результат.
3. Назначить эту роль основным исполнителем.
4. Подключить дополнительные роли только там, где они снижают риск или закрывают недостающую экспертизу.
5. Назначить Code Reviewer или QA Tester для независимой проверки, если задача меняет поведение, интерфейс, SEO или деплой.

## Таблица маршрутизации

| Тип задачи | Основной исполнитель | Поддерживающие роли | Обязательная проверка |
| --- | --- | --- | --- |
| Уточнение требований | Product Analyst | UX/UI Designer, SEO Specialist | Product Analyst |
| Декомпозиция фичи | Product Analyst | Frontend Developer, Backend Developer, QA Tester | Code Reviewer |
| Новый экран или страница | Frontend Developer | UX/UI Designer, SEO Specialist | QA Tester, Code Reviewer |
| Изменение UI-компонента | Frontend Developer | UX/UI Designer | Code Reviewer |
| Форма заявки | Frontend Developer | Backend Developer, UX/UI Designer | QA Tester, Code Reviewer |
| Серверная обработка формы | Backend Developer | Frontend Developer, QA Tester | Code Reviewer |
| Telegram-интеграция | Backend Developer | DevOps / Release Engineer | QA Tester, Code Reviewer |
| SEO-страница | SEO Specialist | Frontend Developer, Technical Writer | QA Tester |
| Sitemap, robots, metadata | SEO Specialist | Frontend Developer | Code Reviewer |
| Аналитика и события | Frontend Developer | SEO Specialist, DevOps / Release Engineer | QA Tester |
| Антиспам | Backend Developer | QA Tester | Code Reviewer |
| Исправление бага | Frontend Developer или Backend Developer | QA Tester | Code Reviewer |
| Регрессионная проверка | QA Tester | Product Analyst | QA Tester |
| Деплой | DevOps / Release Engineer | Frontend Developer, Backend Developer | QA Tester |
| Документация | Technical Writer | Роль-владелец предметной области | Code Reviewer |

## Правило для смешанных задач

Если задача затрагивает и frontend, и backend, владелец выбирается по месту основного риска:

- риск в пользовательском сценарии или интерфейсе - Frontend Developer;
- риск в данных, валидации, интеграции или серверной обработке - Backend Developer;
- риск в поисковой видимости - SEO Specialist;
- риск в запуске или окружении - DevOps / Release Engineer;
- риск в понимании задачи - Product Analyst.

## Правило для неясных задач

Если задачу нельзя надежно назначить сразу, первым исполнителем становится Product Analyst.

Product Analyst должен:

- уточнить цель;
- определить ожидаемый результат;
- сформулировать acceptance criteria;
- передать задачу профильному исполнителю по таблице маршрутизации.

## Правило независимой проверки

Проверяющий не должен быть тем же агентом, который был основным исполнителем.

Исключение допустимо только для мелких документационных правок, которые не меняют поведение продукта.

