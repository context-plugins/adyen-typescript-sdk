
# PL Local Account Identification 1

## Structure

`PLLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `26`, *Maximum Length*: `26` |

## Example

```ts
import { PLLocalAccountIdentification1 } from 'adyen';

const pLLocalAccountIdentification1: PLLocalAccountIdentification1 = {
  accountNumber: 'accountNumber4',
  type: 'plLocal',
};
```

