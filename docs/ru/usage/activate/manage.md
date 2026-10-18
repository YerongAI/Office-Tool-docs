# Управление активацией {#activation-management}

## Очистить активацию {#clear-activation}

Удаление Office не удаляет информацию об активации Office. С помощью этой функции можно очистить информацию об активации Office. После очистки Office нужно будет активировать заново.

![Скриншот очистки активации](/images/ru/activation/clear-activation.webp)

## Licensing mode {#licensing-mode}

There are various licensing modes that can be used with **a supported version of Microsoft 365 Apps**.

User based is the default licensing mode. For most users, this is the most commonly used licensing mode; selecting the wrong one will prevent Microsoft 365 Apps from being activated.

For more information please visit [Overview of licensing and activation in Microsoft 365 Apps](https://learn.microsoft.com/ru-ru/microsoft-365-apps/licensing-activation/overview-licensing-activation-microsoft-365-apps#licensing-modes).

## Управление лицензиями {#licenses-management}

### Установить лицензию {#install-license}

Вы можете найти нужную лицензию в списке и установить её. В Office Tool Plus встроены Grace-ключи продуктов для розничных лицензий и клиентские ключи KMS (GVLK) для корпоративных лицензий — они устанавливаются автоматически после установки лицензии.

При установке новой лицензии существующие лицензии не перезаписываются, поэтому лицензии могут сосуществовать.

::: tip Подсказка

При установке лицензий можно удерживать <kbd>Ctrl</kbd>, чтобы выбрать несколько пунктов. Также можно вводить `|` в поле фильтра для фильтрации по нескольким условиям. Например, введите `office ltsc 2021|visio 2021`, чтобы отфильтровать лицензии Office 2021 LTSC и Visio 2021.

:::

### Установить другие лицензии {#install-other-licenses}

При необходимости можно установить другие лицензии. Обычно лицензии Office хранятся в `C:\Program Files\Microsoft Office\root\Licenses16`. Эта операция не устанавливает соответствующий ключ продукта Office автоматически, поэтому после установки лицензии нужно самостоятельно установить соответствующий ключ продукта Office, иначе лицензия может не отображаться в приложении Office или в списке лицензий.

### Удалить все лицензии {#uninstall-all-licenses}

Операция удалит все лицензии, но не затронет ключи продуктов.

## Управление ключами {#key-management}

### Установить ключ {#install-key}

Введите действительный ключ продукта Office для установки. Если при установке ключа появляется код ошибки [0xC004F069](/ru/help/activation.md#_0xc004f069), сначала установите лицензии Office для соответствующего продукта.

### Удалить все неактивированные ключи {#uninstall-all-unactivated-keys}

Эта функция запросит все лицензии и автоматически удалит все неактивированные ключи. Будьте осторожны при использовании.

### Установить Confirmation ID (CID) {#install-confirmation-id-cid}

Вы можете установить CID для активации Office через телефонную активацию.

## Управление KMS {#kms-management}

Хост KMS может быть доменным именем или IP-адресом, например `kms.example.com` или `192.168.123.1`.

Порт KMS по умолчанию — 1688. При необходимости его можно изменить, например `kms.example.com:1688` или `192.168.123.1:1688`.

## Список лицензий Office {#office-licenses-list}

Вы можете просматривать информацию обо всех установленных лицензиях Office, поддерживаются лицензии vNext и устаревшие (legacy) лицензии.

### Лицензии vNext {#vnext-licenses}

Office Tool Plus поддерживает просмотр статуса, даты истечения и информации о пользователе для лицензий vNext. Перед удалением лицензии следует выйти из учётной записи Microsoft в приложениях Office.

### Устаревшие лицензии Office {#office-legacy-licenses}

Office Tool Plus поддерживает запрос базовой информации о лицензии. Вы можете удалить ключ для лицензии или скопировать CID для телефонной активации.
