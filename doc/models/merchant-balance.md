
# Merchant Balance

*This model accepts additional fields of type unknown.*

## Structure

`MerchantBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `availableFund` | [`Amount3 \| undefined`](../../doc/models/amount-3.md) | Optional | The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both. |
| `deposit` | [`Amount3 \| undefined`](../../doc/models/amount-3.md) | Optional | The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both. |
| `merchantAccount` | `string \| undefined` | Optional | - |
| `nextPayout` | [`Amount3 \| undefined`](../../doc/models/amount-3.md) | Optional | The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both. |
| `pendingBalance` | [`Amount3 \| undefined`](../../doc/models/amount-3.md) | Optional | The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both. |
| `reserve` | [`Amount3 \| undefined`](../../doc/models/amount-3.md) | Optional | The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MerchantBalance } from 'adyenlib';

const merchantBalance: MerchantBalance = {
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
  merchantAccount: 'merchantAccount6',
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
};
```

