
# Reason Enum

The reason for disabling the sweep.

## Enumeration

`ReasonEnum`

## Fields

| Name |
|  --- |
| `AccountHierarchyNotActive` |
| `AmountLimitExceeded` |
| `Approved` |
| `CounterpartyAccountBlocked` |
| `CounterpartyAccountClosed` |
| `CounterpartyAccountNotFound` |
| `CounterpartyAddressRequired` |
| `CounterpartyBankTimedOut` |
| `CounterpartyBankUnavailable` |
| `DirectDebitNotSupported` |
| `Error` |
| `NotEnoughBalance` |
| `RefusedByCounterpartyBank` |
| `RouteNotFound` |
| `TransferInstrumentDoesNotExist` |
| `Unknown` |

## Example

```ts
import { ReasonEnum } from 'adyen';

const reason = ReasonEnum.AccountHierarchyNotActive;
```

