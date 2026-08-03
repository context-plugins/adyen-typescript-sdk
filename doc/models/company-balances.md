
# Company Balances

*This model accepts additional fields of type unknown.*

## Structure

`CompanyBalances`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantBalancesOverview` | [`MerchantBalance[] \| undefined`](../../doc/models/merchant-balance.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CompanyBalances } from 'adyenlib';

const companyBalances: CompanyBalances = {
  merchantBalancesOverview: [
    {
      availableFund: {
        currency: 'currency4',
        value: BigInt(152),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      deposit: {
        currency: 'currency4',
        value: BigInt(62),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      merchantAccount: 'merchantAccount4',
      nextPayout: {
        currency: 'currency4',
        value: BigInt(240),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      pendingBalance: {
        currency: 'currency2',
        value: BigInt(254),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      availableFund: {
        currency: 'currency4',
        value: BigInt(152),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      deposit: {
        currency: 'currency4',
        value: BigInt(62),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      merchantAccount: 'merchantAccount4',
      nextPayout: {
        currency: 'currency4',
        value: BigInt(240),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      pendingBalance: {
        currency: 'currency2',
        value: BigInt(254),
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

