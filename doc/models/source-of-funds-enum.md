
# Source of Funds Enum

Indicates where the funds used for the transfer originated. Possible values are:

- **DEBIT** for card-to-card transfers.
- **DEPOSIT_ACCOUNT** for wallet-to-card transfers.

## Enumeration

`SourceOfFundsEnum`

## Fields

| Name |
|  --- |
| `DEBIT` |
| `DEPOSITACCOUNT` |

## Example

```ts
import { SourceOfFundsEnum } from 'adyen';

const sourceOfFunds = SourceOfFundsEnum.DEBIT;
```

