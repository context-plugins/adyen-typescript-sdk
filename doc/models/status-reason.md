
# Status Reason

The reason for the status of the payment instrument.

Possible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**, **stolen**, **suspectedFraud**, **transactionRule**, **other**.
If the reason is **other**, you must also send the `statusComment` parameter describing the status change.

## Enumeration

`StatusReason`

## Fields

| Name |
|  --- |
| `AccountClosure` |
| `Damaged` |
| `EndOfLife` |
| `Expired` |
| `Lost` |
| `Other` |
| `Stolen` |
| `SuspectedFraud` |
| `TransactionRule` |

## Example

```ts
import { StatusReason } from 'adyenlib';

const statusReason = StatusReason.Other;
```

