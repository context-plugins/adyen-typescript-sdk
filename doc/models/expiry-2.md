
# Expiry 2

The expiration date of the card.

*This model accepts additional fields of type unknown.*

## Structure

`Expiry2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | `string \| undefined` | Optional | The month in which the card will expire. |
| `year` | `string \| undefined` | Optional | The year in which the card will expire. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Expiry2 } from 'adyenlib';

const expiry2: Expiry2 = {
  month: 'month2',
  year: 'year6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

