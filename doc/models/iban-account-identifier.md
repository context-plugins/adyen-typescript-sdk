
# Iban Account Identifier

*This model accepts additional fields of type unknown.*

## Structure

`IbanAccountIdentifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bban` | `string` | Required | The Basic Bank Account Number (BBAN) component of the IBAN. |
| `bic` | `string` | Required | BIC of a bank account. |
| `iban` | `string` | Required | The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard. This is the national identifier for the bank account, following the country-specific format, and is part of the full IBAN. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IbanAccountIdentifier } from 'adyen';

const ibanAccountIdentifier: IbanAccountIdentifier = {
  bban: 'bban4',
  bic: 'bic2',
  iban: 'iban4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

