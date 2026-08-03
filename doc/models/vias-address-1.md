
# Vias Address 1

Address of the ultimate parent company.

*This model accepts additional fields of type unknown.*

## Structure

`ViasAddress1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The name of the city. Required if the `houseNumberOrName`, `street`, `postalCode`, or `stateOrProvince` are provided. |
| `country` | `string` | Required | The two-character country code of the address in ISO-3166-1 alpha-2 format. For example, **NL**. |
| `houseNumberOrName` | `string \| undefined` | Optional | The number or name of the house. |
| `postalCode` | `string \| undefined` | Optional | The postal code. Required if the `houseNumberOrName`, `street`, `city`, or `stateOrProvince` are provided.<br><br>Maximum length:<br><br>* 5 digits for addresses in the US.<br><br>* 10 characters for all other countries. |
| `stateOrProvince` | `string \| undefined` | Optional | The abbreviation of the state or province. Required if the `houseNumberOrName`, `street`, `city`, or `postalCode` are provided.<br><br>Maximum length:<br><br>* 2 characters for addresses in the US or Canada.<br><br>* 3 characters for all other countries. |
| `street` | `string \| undefined` | Optional | The name of the street. Required if the `houseNumberOrName`, `city`, `postalCode`, or `stateOrProvince` are provided. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ViasAddress1 } from 'adyenlib';

const viasAddress1: ViasAddress1 = {
  country: 'country0',
  city: 'city6',
  houseNumberOrName: 'houseNumberOrName4',
  postalCode: 'postalCode8',
  stateOrProvince: 'stateOrProvince4',
  street: 'street6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

