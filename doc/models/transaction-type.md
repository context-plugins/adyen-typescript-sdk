
# Transaction Type

Identify the type of the transaction being authenticated.

## Enumeration

`TransactionType`

## Fields

| Name |
|  --- |
| `GoodsOrServicePurchase` |
| `CheckAcceptance` |
| `AccountFunding` |
| `QuasiCashTransaction` |
| `PrepaidActivationAndLoad` |

## Example

```ts
import { TransactionType } from 'adyenlib';

const transactionType = TransactionType.PrepaidActivationAndLoad;
```

