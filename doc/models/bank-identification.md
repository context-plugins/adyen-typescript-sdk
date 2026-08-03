
# Bank Identification

*This model accepts additional fields of type unknown.*

## Structure

`BankIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `country` | `string \| undefined` | Optional | Two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. |
| `identification` | `string \| undefined` | Optional | The bank identification code. |
| `identificationType` | [`IdentificationType \| undefined`](../../doc/models/identification-type.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BankIdentification, IdentificationType } from 'adyenlib';

const bankIdentification: BankIdentification = {
  country: 'country4',
  identification: 'identification2',
  identificationType: IdentificationType.RoutingNumber,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

