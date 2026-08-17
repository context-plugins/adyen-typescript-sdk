
# Status Reason 2 Enum

The reason for updating the status of the payment instrument.

Possible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.
If the reason is **other**, you must also send the `statusComment` parameter describing the status change.

## Enumeration

`StatusReason2Enum`

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
import { StatusReason2Enum } from 'adyen';

const statusReason2 = StatusReason2Enum.AccountClosure;
```

