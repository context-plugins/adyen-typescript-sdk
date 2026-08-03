
# Acct Info

Additional information about the cardholder’s account provided by the 3DS Requestor.

*This model accepts additional fields of type unknown.*

## Structure

`AcctInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chAccAgeInd` | [`ChAccAgeInd \| undefined`](../../doc/models/ch-acc-age-ind.md) | Optional | **Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `chAccChange` | `string \| undefined` | Optional | Date that the cardholder’s account with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added.<br>Format: **YYYYMMDD** |
| `chAccChangeInd` | [`ChAccChangeInd \| undefined`](../../doc/models/ch-acc-change-ind.md) | Optional | **Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `chAccPwChange` | `string \| undefined` | Optional | Date that cardholder’s account with the 3DS Requestor had a password change or account reset.<br>Format: **YYYYMMDD** |
| `chAccPwChangeInd` | [`ChAccPwChangeInd \| undefined`](../../doc/models/ch-acc-pw-change-ind.md) | Optional | **Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `chAccString` | `string \| undefined` | Optional | Date that the cardholder opened the account with the 3DS Requestor.<br>Format: **YYYYMMDD** |
| `nbPurchaseAccount` | `string \| undefined` | Optional | Number of purchases with this cardholder account during the previous six months. Max length: 4 characters. |
| `paymentAccAge` | `string \| undefined` | Optional | String that the payment account was enrolled in the cardholder’s account with the 3DS Requestor.<br>Format: **YYYYMMDD** |
| `paymentAccInd` | [`PaymentAccInd \| undefined`](../../doc/models/payment-acc-ind.md) | Optional | **Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `provisionAttemptsDay` | `string \| undefined` | Optional | Number of Add Card attempts in the last 24 hours. Max length: 3 characters. |
| `shipAddressUsage` | `string \| undefined` | Optional | String when the shipping address used for this transaction was first used with the 3DS Requestor.<br>Format: **YYYYMMDD** |
| `shipAddressUsageInd` | [`ShipAddressUsageInd \| undefined`](../../doc/models/ship-address-usage-ind.md) | Optional | **Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `shipNameIndicator` | [`ShipNameIndicator \| undefined`](../../doc/models/ship-name-indicator.md) | Optional | **Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `suspiciousAccActivity` | [`SuspiciousAccActivity \| undefined`](../../doc/models/suspicious-acc-activity.md) | Optional | **Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `txnActivityDay` | `string \| undefined` | Optional | Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous 24 hours. Max length: 3 characters.<br><br>**Constraints**: *Maximum Length*: `3` |
| `txnActivityYear` | `string \| undefined` | Optional | Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year. Max length: 3 characters.<br><br>**Constraints**: *Maximum Length*: `3` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AcctInfo,
  ChAccAgeInd,
  ChAccChangeInd,
  ChAccPwChangeInd,
} from 'adyenlib';

const acctInfo: AcctInfo = {
  chAccAgeInd: ChAccAgeInd.Enum05,
  chAccChange: 'chAccChange8',
  chAccChangeInd: ChAccChangeInd.Enum01,
  chAccPwChange: 'chAccPwChange8',
  chAccPwChangeInd: ChAccPwChangeInd.Enum03,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

