
# Expiry 2

The expiration date of the card.

## Structure

`Expiry2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | `string \| undefined` | Optional | The month in which the card will expire. |
| `year` | `string \| undefined` | Optional | The year in which the card will expire. |

## Example

```ts
import { Expiry2 } from 'adyen';

const expiry2: Expiry2 = {
  month: 'month2',
  year: 'year6',
};
```

