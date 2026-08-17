
# Top Up Amount 1

The currency and value to be added to the balance account, specified in minor units. This can be a fixed amount or a target amount.

## Structure

`TopUpAmount1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fixed` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The fixed amount with which you want to top up the balance account. |
| `target` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The target balance for the balance account that the top-up must achieve. |

## Example

```ts
import { TopUpAmount1 } from 'adyen';

const topUpAmount1: TopUpAmount1 = {
  fixed: {
    currency: 'currency0',
    value: BigInt(164),
  },
  target: {
    currency: 'currency2',
    value: BigInt(188),
  },
};
```

