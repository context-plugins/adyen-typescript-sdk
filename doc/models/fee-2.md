
# Fee 2

## Structure

`Fee2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | Contains the amount of the grant fee. |

## Example

```ts
import { Fee2 } from 'adyen';

const fee2: Fee2 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

