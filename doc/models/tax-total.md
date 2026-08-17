
# Tax Total

## Structure

`TaxTotal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | - |

## Example

```ts
import { TaxTotal } from 'adyen';

const taxTotal: TaxTotal = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

