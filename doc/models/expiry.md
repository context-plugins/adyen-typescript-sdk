
# Expiry

*This model accepts additional fields of type unknown.*

## Structure

`Expiry`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | `string \| undefined` | Optional | The month in which the card will expire. |
| `year` | `string \| undefined` | Optional | The year in which the card will expire. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Expiry } from 'adyenlib';

const expiry: Expiry = {
  month: 'month8',
  year: 'year0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

