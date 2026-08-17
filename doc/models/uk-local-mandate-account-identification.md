
# UK Local Mandate Account Identification

## Structure

`UKLocalMandateAccountIdentification`

## Inherits From

[`MandateAccountIdentification`](../../doc/models/mandate-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 8-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `8` |
| `sortCode` | `string` | Required | The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `6` |

## Example

```ts
import { UKLocalMandateAccountIdentification } from 'adyen';

const uKLocalMandateAccountIdentification: UKLocalMandateAccountIdentification = {
  accountNumber: 'accountNumber4',
  sortCode: 'sortCode4',
  type: 'ukLocal',
};
```

