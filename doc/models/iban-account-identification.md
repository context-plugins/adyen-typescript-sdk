
# Iban Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`IbanAccountIdentification`

## Inherits From

[`AccountIdentification`](../../doc/models/account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iban` | `string` | Required | The IBAN of the bank account.<br><br>**Constraints**: *Minimum Length*: `1` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IbanAccountIdentification } from 'adyen';

const ibanAccountIdentification: IbanAccountIdentification = {
  iban: 'NL00AAAA0000000000',
  type: 'iban',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

