
# Fee 21

Contains the currency and value of the cashout fee, in [minor units](https://docs.adyen.com/development-resources/currency-codes).

## Structure

`Fee21`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | Contains the fee amount. |

## Example

```ts
import { Fee21 } from 'adyen';

const fee21: Fee21 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

