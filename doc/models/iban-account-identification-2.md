
# Iban Account Identification 2

*This model accepts additional fields of type unknown.*

## Structure

`IbanAccountIdentification2`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bic` | `string \| undefined` | Optional | The bank's 8- or 11-character BIC or SWIFT code. |
| `iban` | `string` | Required | The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IbanAccountIdentification2 } from 'adyen';

const ibanAccountIdentification2: IbanAccountIdentification2 = {
  iban: 'iban8',
  bic: 'bic6',
  type: 'iban',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

