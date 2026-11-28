# Вопросы по развёртыванию {#deploy-questions}

Здесь вы найдёте причины и решения большинства проблем с установкой Office. Если не удаётся решить проблему самостоятельно, вы также можете обратиться к нам за помощью в анализе/решении проблемы; наша команда может предоставить высокопрофессиональную техническую поддержку.

## Окончание поддержки Windows и Microsoft 365 Apps {#windows-end-of-support-and-microsoft-365-apps}

Microsoft 365 Apps may not run properly on the older systems. Microsoft recommend you move to a supported operating system for better experience.

The table below lists the relationship between various Windows versions and Office:

| Windows                       | Office 2019 - 2024 | Latest Build on Current Channel |
| :--                           | :-:                | :--                             |
| Windows 7                     | ×                  | 16.0.12527.22286                |
| Windows 8                     | ×                  | 16.0.12730.20270                |
| Windows 8.1                   | ×                  | 16.0.16026.20200                |
| Windows 10 1507 to 1803 (RS4) | √                  | 16.0.19725.xxxxx                |
| Windows Server 2016           | √                  | 16.0.19725.xxxxx                |
| Windows 10 1809 (RS5) to 22H2 | √                  | 16.0.20326.xxxxx                |
| Windows Server 2019           | √                  | 16.0.20326.xxxxx                |
| Windows Server 2022           | √                  | 16.0.20326.xxxxx                |

For versions of Windows not listed (such as Windows 11), it is still possible to deploy the latest version of Office and continue receiving feature updates for Office.

Подробнее:

- [Окончание поддержки Windows 7 и Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-7-support).
- [Окончание поддержки Windows 8 и Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-8-support).
- [Окончание поддержки Windows 8.1 и Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-81-support).
- [Окончание поддержки Windows 10 и Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-10-support).
- [Окончание поддержки Windows Server и Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-server-support).

## Как установить Office в другой путь {#how-to-install-office-to-another-path}

Microsoft не позволяет устанавливать Office в другой путь, и мы также не рекомендуем принудительно его менять.

## В этих установочных файлах есть ошибки {#these-installation-files-contains-errors}

Попробуйте удалить установочные файлы на панели [Установочные файлы](/ru/usage/deploy/settings/basic.md#installation-files) и скачать заново.

Если проблема сохраняется, попробуйте [включить HTTPS-подключение](/ru/usage/settings.md#connect-using-https) или переключиться на другую сеть, затем повторите попытку.

## Как прервать установщик Office {#how-to-terminate-office-installer}

Если по какой-либо причине нужно прервать установщик Office, перейдите на страницу «Инструменты» и [удалите Office](/ru/usage/toolbox/office.md), затем разверните Office заново.

::: warning Внимание

Если установщик Office завис на `We're getting things ready...`, принудительно завершите соответствующий процесс setup.exe через Диспетчер задач.

:::

## Установка Office зависла {#office-installation-is-stuck}

Если прогресс установки Office завис между 0–49%, это означает, что установщик Office не смог получить необходимые файлы.

- Если вы устанавливаете онлайн, проверьте сетевое подключение или попробуйте другую сеть.
- Включите [скачать сначала](/ru/usage/deploy/first-deployment.md#download-first) — это минимизирует проблемы из-за сети.
- Попробуйте [проверить установочные файлы Office](/ru/usage/deploy/settings/basic.md#installation-files); иногда с файлами бывают проблемы.

Если прогресс установки Office завис между 50–100%, это означает, что во время установки произошла ошибка.

- Если установщик позволяет игнорировать эту ошибку, можно её проигнорировать, но VBA или некоторые функции могут быть недоступны.
- Попробуйте закрыть или выйти из всего стороннего ПО. Некоторые сторонние программы могут неправильно блокировать работу установщика.
- Попробуйте [удалить Office](/ru/usage/toolbox/office.md#remove-office), затем установите заново.

Если указанные шаги не помогают, вы можете собрать журналы установки Office на странице «Инструменты» и проанализировать их, чтобы найти проблему.
