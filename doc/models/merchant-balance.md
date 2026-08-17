
# Merchant Balance

## Structure

`MerchantBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `availableFund` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | - |
| `deposit` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | - |
| `merchantAccount` | `string \| undefined` | Optional | - |
| `nextPayout` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | - |
| `pendingBalance` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | - |
| `reserve` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | - |

## Example

```ts
import { MerchantBalance } from 'adyen';

const merchantBalance: MerchantBalance = {
  availableFund: {
    currency: 'currency4',
    value: BigInt(152),
  },
  deposit: {
    currency: 'currency4',
    value: BigInt(62),
  },
  merchantAccount: 'merchantAccount6',
  nextPayout: {
    currency: 'currency4',
    value: BigInt(240),
  },
  pendingBalance: {
    currency: 'currency2',
    value: BigInt(254),
  },
};
```

