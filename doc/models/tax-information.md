
# Tax Information

*This model accepts additional fields of type unknown.*

## Structure

`TaxInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `country` | `string \| undefined` | Optional | The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `number` | `string \| undefined` | Optional | The tax ID number (TIN) of the organization or individual. |
| `numberAbsent` | `boolean \| undefined` | Optional | Set this to **true** if the legal entity or legal arrangement does not have a tax ID number (TIN). Only applicable in Australia. |
| `type` | `string \| undefined` | Optional | The TIN type depending on the country where it was issued. Only provide if the country has multiple tax IDs: Singapore, Sweden, the UK, or the US. For example, provide **SSN**, **EIN**, or **ITIN** for the US. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TaxInformation } from 'adyenlib';

const taxInformation: TaxInformation = {
  country: 'country4',
  number: 'number2',
  numberAbsent: false,
  type: 'type0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

