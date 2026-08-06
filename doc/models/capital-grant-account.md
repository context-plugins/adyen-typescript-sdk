
# Capital Grant Account

*This model accepts additional fields of type unknown.*

## Structure

`CapitalGrantAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balances` | [`CapitalBalance[] \| undefined`](../../doc/models/capital-balance.md) | Optional | The balances of the grant account. |
| `fundingBalanceAccountId` | `string \| undefined` | Optional | The unique identifier of the balance account used to fund the grant. |
| `id` | `string \| undefined` | Optional | The identifier of the grant account. |
| `limits` | [`GrantLimit[] \| undefined`](../../doc/models/grant-limit.md) | Optional | The limits of the grant account. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

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
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      currency: 'currency0',
      fee: BigInt(72),
      principal: BigInt(110),
      total: BigInt(150),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
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
  fundingBalanceAccountId: 'fundingBalanceAccountId6',
  id: 'id6',
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
    },
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
    },
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

