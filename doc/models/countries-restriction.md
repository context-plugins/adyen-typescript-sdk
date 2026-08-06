
# Countries Restriction

*This model accepts additional fields of type unknown.*

## Structure

`CountriesRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `string[] \| undefined` | Optional | List of two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CountriesRestriction } from 'adyen';

const countriesRestriction: CountriesRestriction = {
  operation: 'operation6',
  value: [
    'value0',
    'value1',
    'value2'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

