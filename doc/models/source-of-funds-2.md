
# Source of Funds 2

Indicates where the funds used for the transfer originated. Possible values are:

- **DEBIT** for card-to-card transfers.
- **DEPOSIT_ACCOUNT** for wallet-to-card transfers.

## Enumeration

`SourceOfFunds2`

## Fields

| Name |
|  --- |
| `Debit` |
| `DepositAccount` |

## Example

```ts
import { SourceOfFunds2 } from 'adyen';

const sourceOfFunds2 = SourceOfFunds2.Debit;
```

