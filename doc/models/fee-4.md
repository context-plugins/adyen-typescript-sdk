
# Fee 4

An object containing the fee currency and value, in [minor units](https://docs.adyen.com/development-resources/currency-codes).

## Structure

`Fee4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | Contains the fee amount. |

## Example

```ts
import { Fee4 } from 'adyen';

const fee4: Fee4 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

