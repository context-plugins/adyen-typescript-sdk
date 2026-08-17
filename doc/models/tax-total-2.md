
# Tax Total 2

Total tax amount from the order.

## Structure

`TaxTotal2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | - |

## Example

```ts
import { TaxTotal2 } from 'adyen';

const taxTotal2: TaxTotal2 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

