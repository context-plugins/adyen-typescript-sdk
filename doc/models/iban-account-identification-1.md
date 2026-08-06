
# Iban Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`IbanAccountIdentification1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bic` | `string \| undefined` | Optional | The bank's 8- or 11-character BIC or SWIFT code. |
| `iban` | `string` | Required | The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard. |
| `type` | [`Type203`](../../doc/models/type-203.md) | Required | **iban** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IbanAccountIdentification1, Type203 } from 'adyen';

const ibanAccountIdentification1: IbanAccountIdentification1 = {
  iban: 'iban0',
  type: Type203.Iban,
  bic: 'bic8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

