
# Company Balances

## Structure

`CompanyBalances`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantBalancesOverview` | [`MerchantBalance[] \| undefined`](../../doc/models/merchant-balance.md) | Optional | - |

## Example

```ts
import { CompanyBalances } from 'adyen';

const companyBalances: CompanyBalances = {
  merchantBalancesOverview: [
    {
      availableFund: {
        currency: 'currency4',
        value: BigInt(152),
      },
      deposit: {
        currency: 'currency4',
        value: BigInt(62),
      },
      merchantAccount: 'merchantAccount4',
      nextPayout: {
        currency: 'currency4',
        value: BigInt(240),
      },
      pendingBalance: {
        currency: 'currency2',
        value: BigInt(254),
      },
    },
    {
      availableFund: {
        currency: 'currency4',
        value: BigInt(152),
      },
      deposit: {
        currency: 'currency4',
        value: BigInt(62),
      },
      merchantAccount: 'merchantAccount4',
      nextPayout: {
        currency: 'currency4',
        value: BigInt(240),
      },
      pendingBalance: {
        currency: 'currency2',
        value: BigInt(254),
      },
    }
  ],
};
```

