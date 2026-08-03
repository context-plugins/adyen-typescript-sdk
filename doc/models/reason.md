
# Reason

The reason for disabling the sweep.

## Enumeration

`Reason`

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
import { Reason } from 'adyenlib';

const reason = Reason.AccountHierarchyNotActive;
```

