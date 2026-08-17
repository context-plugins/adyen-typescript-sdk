
# Account Info

Shopper account information for 3D Secure 2.

> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.

## Structure

`AccountInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountAgeIndicator` | [`AccountAgeIndicatorEnum \| undefined`](../../doc/models/account-age-indicator-enum.md) | Optional | Indicator for the length of time since this shopper account was created in the merchant's environment.<br>Allowed values:<br><br>* notApplicable<br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days |
| `accountChangeDate` | `string \| undefined` | Optional | Date when the shopper's account was last changed. |
| `accountChangeIndicator` | [`AccountChangeIndicatorEnum \| undefined`](../../doc/models/account-change-indicator-enum.md) | Optional | Indicator for the length of time since the shopper's account was last updated.<br>Allowed values:<br><br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days |
| `accountCreationDate` | `string \| undefined` | Optional | Date when the shopper's account was created. |
| `accountType` | [`AccountTypeEnum \| undefined`](../../doc/models/account-type-enum.md) | Optional | Indicates the type of account. For example, for a multi-account card product.<br>Allowed values:<br><br>* notApplicable<br>* credit<br>* debit |
| `addCardAttemptsDay` | `number \| undefined` | Optional | Number of attempts the shopper tried to add a card to their account in the last day. |
| `deliveryAddressUsageDate` | `string \| undefined` | Optional | Date the selected delivery address was first used. |
| `deliveryAddressUsageIndicator` | [`DeliveryAddressUsageIndicatorEnum \| undefined`](../../doc/models/delivery-address-usage-indicator-enum.md) | Optional | Indicator for the length of time since this delivery address was first used.<br>Allowed values:<br><br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days |
| `homePhone` | `string \| undefined` | Optional | Shopper's home phone number (including the country code). |
| `mobilePhone` | `string \| undefined` | Optional | Shopper's mobile phone number (including the country code). |
| `passwordChangeDate` | `string \| undefined` | Optional | Date when the shopper last changed their password. |
| `passwordChangeIndicator` | [`PasswordChangeIndicatorEnum \| undefined`](../../doc/models/password-change-indicator-enum.md) | Optional | Indicator when the shopper has changed their password.<br>Allowed values:<br><br>* notApplicable<br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days |
| `pastTransactionsDay` | `number \| undefined` | Optional | Number of all transactions (successful and abandoned) from this shopper in the past 24 hours. |
| `pastTransactionsYear` | `number \| undefined` | Optional | Number of all transactions (successful and abandoned) from this shopper in the past year. |
| `paymentAccountAge` | `string \| undefined` | Optional | Date this payment method was added to the shopper's account. |
| `paymentAccountIndicator` | [`PaymentAccountIndicatorEnum \| undefined`](../../doc/models/payment-account-indicator-enum.md) | Optional | Indicator for the length of time since this payment method was added to this shopper's account.<br>Allowed values:<br><br>* notApplicable<br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days |
| `purchasesLast6Months` | `number \| undefined` | Optional | Number of successful purchases in the last six months. |
| `suspiciousActivity` | `boolean \| undefined` | Optional | Whether suspicious activity was recorded on this account. |
| `workPhone` | `string \| undefined` | Optional | Shopper's work phone number (including the country code). |

## Example

```ts
import {
  AccountAgeIndicatorEnum,
  AccountChangeIndicatorEnum,
  AccountInfo,
  AccountTypeEnum,
} from 'adyen';

const accountInfo: AccountInfo = {
  accountAgeIndicator: AccountAgeIndicatorEnum.From30To60Days,
  accountChangeDate: '2016-03-13T12:52:32.123Z',
  accountChangeIndicator: AccountChangeIndicatorEnum.ThisTransaction,
  accountCreationDate: '2016-03-13T12:52:32.123Z',
  accountType: AccountTypeEnum.NotApplicable,
};
```

