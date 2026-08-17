
# Expiry

## Structure

`Expiry`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | `string \| undefined` | Optional | The month in which the card will expire. |
| `year` | `string \| undefined` | Optional | The year in which the card will expire. |

## Example

```ts
import { Expiry } from 'adyen';

const expiry: Expiry = {
  month: 'month8',
  year: 'year0',
};
```

