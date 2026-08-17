
# DK Local Account Identification 1

## Structure

`DKLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 4-10 digits bank account number (Kontonummer) (without separators or whitespace).<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `10` |
| `bankCode` | `string` | Required | The 4-digit bank code (Registreringsnummer) (without separators or whitespace).<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4` |

## Example

```ts
import { DKLocalAccountIdentification1 } from 'adyen';

const dKLocalAccountIdentification1: DKLocalAccountIdentification1 = {
  accountNumber: 'accountNumber6',
  bankCode: 'bankCode8',
  type: 'dkLocal',
};
```

