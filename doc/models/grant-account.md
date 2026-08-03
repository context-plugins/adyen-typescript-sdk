
# Grant Account

*This model accepts additional fields of type unknown.*

## Structure

`GrantAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balances` | [`CapitalBalance[] \| undefined`](../../doc/models/capital-balance.md) | Optional | Contains the sum of the balances of all grants tracked by this grant account. The balances are separated by currency. |
| `fundingBalanceAccountId` | `string \| undefined` | Optional | The unique identifier of the balance account used to fund the grant. |
| `id` | `string \| undefined` | Optional | The unique identifier of the grant account. |
| `limits` | [`GrantLimit[] \| undefined`](../../doc/models/grant-limit.md) | Optional | Contains the maximum amount of funds that you can disburse for grants. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GrantAccount } from 'adyenlib';

const grantAccount: GrantAccount = {
  balances: [
    {
      currency: 'currency0',
      fee: BigInt(72),
      principal: BigInt(110),
      total: BigInt(150),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  fundingBalanceAccountId: 'fundingBalanceAccountId0',
  id: 'id2',
  limits: [
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

