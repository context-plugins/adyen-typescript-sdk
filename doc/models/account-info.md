
# Account Info

*This model accepts additional fields of type unknown.*

## Structure

`AccountInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountAgeIndicator` | [`AccountAgeIndicator \| undefined`](../../doc/models/account-age-indicator.md) | Optional | - |
| `accountChangeDate` | `string \| undefined` | Optional | Date when the shopper's account was last changed. |
| `accountChangeIndicator` | [`AccountChangeIndicator \| undefined`](../../doc/models/account-change-indicator.md) | Optional | - |
| `accountCreationDate` | `string \| undefined` | Optional | Date when the shopper's account was created. |
| `accountType` | [`AccountType1 \| undefined`](../../doc/models/account-type-1.md) | Optional | - |
| `addCardAttemptsDay` | `number \| undefined` | Optional | Number of attempts the shopper tried to add a card to their account in the last day. |
| `deliveryAddressUsageDate` | `string \| undefined` | Optional | Date the selected delivery address was first used. |
| `deliveryAddressUsageIndicator` | [`DeliveryAddressUsageIndicator \| undefined`](../../doc/models/delivery-address-usage-indicator.md) | Optional | - |
| `homePhone` | `string \| undefined` | Optional | Shopper's home phone number (including the country code). |
| `mobilePhone` | `string \| undefined` | Optional | Shopper's mobile phone number (including the country code). |
| `passwordChangeDate` | `string \| undefined` | Optional | Date when the shopper last changed their password. |
| `passwordChangeIndicator` | [`PasswordChangeIndicator \| undefined`](../../doc/models/password-change-indicator.md) | Optional | - |
| `pastTransactionsDay` | `number \| undefined` | Optional | Number of all transactions (successful and abandoned) from this shopper in the past 24 hours. |
| `pastTransactionsYear` | `number \| undefined` | Optional | Number of all transactions (successful and abandoned) from this shopper in the past year. |
| `paymentAccountAge` | `string \| undefined` | Optional | Date this payment method was added to the shopper's account. |
| `paymentAccountIndicator` | [`PaymentAccountIndicator \| undefined`](../../doc/models/payment-account-indicator.md) | Optional | - |
| `purchasesLast6Months` | `number \| undefined` | Optional | Number of successful purchases in the last six months. |
| `suspiciousActivity` | `boolean \| undefined` | Optional | Whether suspicious activity was recorded on this account. |
| `workPhone` | `string \| undefined` | Optional | Shopper's work phone number (including the country code). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AccountAgeIndicator,
  AccountChangeIndicator,
  AccountInfo,
  AccountType1,
} from 'adyen';

const accountInfo: AccountInfo = {
  accountAgeIndicator: AccountAgeIndicator.From30To60Days,
  accountChangeDate: '2016-03-13T12:52:32.123Z',
  accountChangeIndicator: AccountChangeIndicator.ThisTransaction,
  accountCreationDate: '2016-03-13T12:52:32.123Z',
  accountType: AccountType1.NotApplicable,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

