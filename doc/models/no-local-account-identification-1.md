
# NO Local Account Identification 1

## Structure

`NOLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 11-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `11`, *Maximum Length*: `11` |

## Example

```ts
import { NOLocalAccountIdentification1 } from 'adyen';

const nOLocalAccountIdentification1: NOLocalAccountIdentification1 = {
  accountNumber: 'accountNumber6',
  type: 'noLocal',
};
```

