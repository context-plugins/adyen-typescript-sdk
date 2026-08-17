
# Grant Account

## Structure

`GrantAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balances` | [`CapitalBalance[] \| undefined`](../../doc/models/capital-balance.md) | Optional | Contains the sum of the balances of all grants tracked by this grant account. The balances are separated by currency. |
| `fundingBalanceAccountId` | `string \| undefined` | Optional | The unique identifier of the balance account used to fund the grant. |
| `id` | `string \| undefined` | Optional | The unique identifier of the grant account. |
| `limits` | [`GrantLimit1[] \| undefined`](../../doc/models/grant-limit-1.md) | Optional | Contains the maximum amount of funds that you can disburse for grants. |

## Example

```ts
import { GrantAccount } from 'adyen';

const grantAccount: GrantAccount = {
  balances: [
    {
      currency: 'currency0',
      fee: BigInt(72),
      principal: BigInt(110),
      total: BigInt(150),
    }
  ],
  fundingBalanceAccountId: 'fundingBalanceAccountId0',
  id: 'id2',
  limits: [
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
    }
  ],
};
```

