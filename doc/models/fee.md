
# Fee

## Structure

`Fee`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | Contains the fee amount. |

## Example

```ts
import { Fee } from 'adyen';

const fee: Fee = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

