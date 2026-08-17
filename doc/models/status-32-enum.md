
# Status 32 Enum

The status of the check.

Possible values: **AWAITING_DATA** , **DATA_PROVIDED**, **FAILED**, **INVALID_DATA**, **PASSED**, **PENDING**, **RETRY_LIMIT_REACHED**.

## Enumeration

`Status32Enum`

## Fields

| Name |
|  --- |
| `AWAITINGDATA` |
| `DATAPROVIDED` |
| `FAILED` |
| `INVALIDDATA` |
| `PASSED` |
| `PENDING` |
| `PENDINGREVIEW` |
| `RETRYLIMITREACHED` |
| `UNCHECKED` |

## Example

```ts
import { Status32Enum } from 'adyen';

const status32 = Status32Enum.UNCHECKED;
```

