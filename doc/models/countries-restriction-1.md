
# Countries Restriction 1

List of countries and the operation.

Supported operations: **anyMatch**, **noneMatch**.

*This model accepts additional fields of type unknown.*

## Structure

`CountriesRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `string[] \| undefined` | Optional | List of two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CountriesRestriction1 } from 'adyen';

const countriesRestriction1: CountriesRestriction1 = {
  operation: 'operation0',
  value: [
    'value4',
    'value5',
    'value6'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

