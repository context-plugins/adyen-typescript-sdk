
# Grant Limit 1

## Structure

`GrantLimit1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The limit amount of the grant account. |

## Example

```ts
import { GrantLimit1 } from 'adyen';

const grantLimit1: GrantLimit1 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

