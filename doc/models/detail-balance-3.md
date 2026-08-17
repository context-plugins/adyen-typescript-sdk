
# Detail Balance 3

Details of the balance held by the account.

## Structure

`DetailBalance3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balance` | [`Amount[] \| undefined`](../../doc/models/amount.md) | Optional | The list of balances held by the account. |
| `onHoldBalance` | [`Amount[] \| undefined`](../../doc/models/amount.md) | Optional | The list of on hold balances held by the account. |
| `pendingBalance` | [`Amount[] \| undefined`](../../doc/models/amount.md) | Optional | The list of pending balances held by the account. |

## Example

```ts
import { DetailBalance3 } from 'adyen';

const detailBalance3: DetailBalance3 = {
  balance: [
    {
      currency: 'currency4',
      value: BigInt(128),
    },
    {
      currency: 'currency4',
      value: BigInt(128),
    }
  ],
  onHoldBalance: [
    {
      currency: 'currency8',
      value: BigInt(72),
    },
    {
      currency: 'currency8',
      value: BigInt(72),
    },
    {
      currency: 'currency8',
      value: BigInt(72),
    }
  ],
  pendingBalance: [
    {
      currency: 'currency2',
      value: BigInt(254),
    }
  ],
};
```

