
# Fee 22

Contains information about the fee that your user must pay for the disbursement.

## Structure

`Fee22`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | Contains the amount of the grant fee. |

## Example

```ts
import { Fee22 } from 'adyen';

const fee22: Fee22 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

