
# Acct Info

Additional information about the cardholder’s account provided by the 3DS Requestor.

## Structure

`AcctInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chAccAgeInd` | [`ChAccAgeIndEnum \| undefined`](../../doc/models/ch-acc-age-ind-enum.md) | Optional | Length of time that the cardholder has had the account with the 3DS Requestor.<br>Allowed values:<br><br>* **01** — No account<br>* **02** — Created during this transaction<br>* **03** — Less than 30 days<br>* **04** — 30–60 days<br>* **05** — More than 60 days<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `chAccChange` | `string \| undefined` | Optional | Date that the cardholder’s account with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added.<br>Format: **YYYYMMDD** |
| `chAccChangeInd` | [`ChAccChangeIndEnum \| undefined`](../../doc/models/ch-acc-change-ind-enum.md) | Optional | Length of time since the cardholder’s account information with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added.<br>Allowed values:<br><br>* **01** — Changed during this transaction<br>* **02** — Less than 30 days<br>* **03** — 30–60 days<br>* **04** — More than 60 days<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `chAccPwChange` | `string \| undefined` | Optional | Date that cardholder’s account with the 3DS Requestor had a password change or account reset.<br>Format: **YYYYMMDD** |
| `chAccPwChangeInd` | [`ChAccPwChangeIndEnum \| undefined`](../../doc/models/ch-acc-pw-change-ind-enum.md) | Optional | Indicates the length of time since the cardholder’s account with the 3DS Requestor had a password change or account reset.<br>Allowed values:<br><br>* **01** — No change<br>* **02** — Changed during this transaction<br>* **03** — Less than 30 days<br>* **04** — 30–60 days<br>* **05** — More than 60 days<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `chAccString` | `string \| undefined` | Optional | Date that the cardholder opened the account with the 3DS Requestor.<br>Format: **YYYYMMDD** |
| `nbPurchaseAccount` | `string \| undefined` | Optional | Number of purchases with this cardholder account during the previous six months. Max length: 4 characters. |
| `paymentAccAge` | `string \| undefined` | Optional | String that the payment account was enrolled in the cardholder’s account with the 3DS Requestor.<br>Format: **YYYYMMDD** |
| `paymentAccInd` | [`PaymentAccIndEnum \| undefined`](../../doc/models/payment-acc-ind-enum.md) | Optional | Indicates the length of time that the payment account was enrolled in the cardholder’s account with the 3DS Requestor.<br>Allowed values:<br><br>* **01** — No account (guest checkout)<br>* **02** — During this transaction<br>* **03** — Less than 30 days<br>* **04** — 30–60 days<br>* **05** — More than 60 days<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `provisionAttemptsDay` | `string \| undefined` | Optional | Number of Add Card attempts in the last 24 hours. Max length: 3 characters. |
| `shipAddressUsage` | `string \| undefined` | Optional | String when the shipping address used for this transaction was first used with the 3DS Requestor.<br>Format: **YYYYMMDD** |
| `shipAddressUsageInd` | [`ShipAddressUsageIndEnum \| undefined`](../../doc/models/ship-address-usage-ind-enum.md) | Optional | Indicates when the shipping address used for this transaction was first used with the 3DS Requestor.<br>Allowed values:<br><br>* **01** — This transaction<br>* **02** — Less than 30 days<br>* **03** — 30–60 days<br>* **04** — More than 60 days<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `shipNameIndicator` | [`ShipNameIndicatorEnum \| undefined`](../../doc/models/ship-name-indicator-enum.md) | Optional | Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction.<br>Allowed values:<br><br>* **01** — Account Name identical to shipping Name<br>* **02** — Account Name different to shipping Name<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `suspiciousAccActivity` | [`SuspiciousAccActivityEnum \| undefined`](../../doc/models/suspicious-acc-activity-enum.md) | Optional | Indicates whether the 3DS Requestor has experienced suspicious activity (including previous fraud) on the cardholder account.<br>Allowed values:<br><br>* **01** — No suspicious activity has been observed<br>* **02** — Suspicious activity has been observed<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `txnActivityDay` | `string \| undefined` | Optional | Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous 24 hours. Max length: 3 characters.<br><br>**Constraints**: *Maximum Length*: `3` |
| `txnActivityYear` | `string \| undefined` | Optional | Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year. Max length: 3 characters.<br><br>**Constraints**: *Maximum Length*: `3` |

## Example

```ts
import {
  AcctInfo,
  ChAccAgeIndEnum,
  ChAccChangeIndEnum,
  ChAccPwChangeIndEnum,
} from 'adyen';

const acctInfo: AcctInfo = {
  chAccAgeInd: ChAccAgeIndEnum.Enum05,
  chAccChange: 'chAccChange8',
  chAccChangeInd: ChAccChangeIndEnum.Enum01,
  chAccPwChange: 'chAccPwChange8',
  chAccPwChangeInd: ChAccPwChangeIndEnum.Enum03,
};
```

