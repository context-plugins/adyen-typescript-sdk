
# Capital Grant Account

## Structure

`CapitalGrantAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balances` | [`CapitalBalance[] \| undefined`](../../doc/models/capital-balance.md) | Optional | The balances of the grant account. |
| `fundingBalanceAccountId` | `string \| undefined` | Optional | The unique identifier of the balance account used to fund the grant. |
| `id` | `string \| undefined` | Optional | The identifier of the grant account. |
| `limits` | [`GrantLimit[] \| undefined`](../../doc/models/grant-limit.md) | Optional | The limits of the grant account. |

## Example

```ts
import { CapitalGrantAccount } from 'adyen';

const capitalGrantAccount: CapitalGrantAccount = {
  balances: [
    {
      currency: 'currency0',
      fee: BigInt(72),
      principal: BigInt(110),
      total: BigInt(150),
    },
    {
      currency: 'currency0',
      fee: BigInt(72),
      principal: BigInt(110),
      total: BigInt(150),
    },
    {
      currency: 'currency0',
      fee: BigInt(72),
      principal: BigInt(110),
      total: BigInt(150),
    }
  ],
  fundingBalanceAccountId: 'fundingBalanceAccountId6',
  id: 'id6',
  limits: [
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
    },
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
    },
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
    }
  ],
};
```

