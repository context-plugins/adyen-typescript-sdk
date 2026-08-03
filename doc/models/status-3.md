
# Status 3

The status of the check.

Possible values: **AWAITING_DATA** , **DATA_PROVIDED**, **FAILED**, **INVALID_DATA**, **PASSED**, **PENDING**, **RETRY_LIMIT_REACHED**.

## Enumeration

`Status3`

## Fields

| Name |
|  --- |
| `AwaitingData` |
| `DataProvided` |
| `Failed` |
| `InvalidData` |
| `Passed` |
| `Pending` |
| `PendingReview` |
| `RetryLimitReached` |
| `Unchecked` |

## Example

```ts
import { Status3 } from 'adyenlib';

const status3 = Status3.DataProvided;
```

