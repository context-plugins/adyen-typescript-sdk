
# UK Local Account Identification 1

## Structure

`UKLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 8-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `8` |
| `sortCode` | `string` | Required | The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `6` |

## Example

```ts
import { UKLocalAccountIdentification1 } from 'adyen';

const uKLocalAccountIdentification1: UKLocalAccountIdentification1 = {
  accountNumber: 'accountNumber8',
  sortCode: 'sortCode8',
  type: 'ukLocal',
};
```

