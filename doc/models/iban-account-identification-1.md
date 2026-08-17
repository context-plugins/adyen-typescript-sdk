
# Iban Account Identification 1

## Structure

`IbanAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bic` | `string \| undefined` | Optional | The bank's 8- or 11-character BIC or SWIFT code. |
| `iban` | `string` | Required | The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard. |

## Example

```ts
import { IbanAccountIdentification1 } from 'adyen';

const ibanAccountIdentification1: IbanAccountIdentification1 = {
  iban: 'iban0',
  bic: 'bic8',
  type: 'iban',
};
```

