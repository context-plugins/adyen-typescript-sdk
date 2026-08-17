
# Account Detail Balance

## Structure

`AccountDetailBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string \| undefined` | Optional | The code of the account that holds the balance. |
| `detailBalance` | [`DetailBalance3 \| undefined`](../../doc/models/detail-balance-3.md) | Optional | Details of the balance held by the account. |

## Example

```ts
import { AccountDetailBalance } from 'adyen';

const accountDetailBalance: AccountDetailBalance = {
  accountCode: 'accountCode6',
  detailBalance: {
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
  },
};
```

