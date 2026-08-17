
# Fee 1

Details of the fee configuration.

## Structure

`Fee1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | Contains the fee amount. |

## Example

```ts
import { Fee1 } from 'adyen';

const fee1: Fee1 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

