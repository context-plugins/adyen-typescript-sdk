
# Grant Limit

## Structure

`GrantLimit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The amount available on the grant account. |

## Example

```ts
import { GrantLimit } from 'adyen';

const grantLimit: GrantLimit = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

