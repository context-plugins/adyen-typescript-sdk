
# Top Up Amount

## Structure

`TopUpAmount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fixed` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The fixed amount with which you want to top up the balance account. |
| `target` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The target balance for the balance account that the top-up must achieve. |

## Example

```ts
import { TopUpAmount } from 'adyen';

const topUpAmount: TopUpAmount = {
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

