
# Limit Status Enum

The status of the transfer limit. Possible values:

* **active**: the limit is currently active.
* **inactive**: the limit is currently inactive.
* **pendingSCA**: the limit is pending until your user performs SCA.
* **scheduled**: the limit is scheduled to become active at a future date.

## Enumeration

`LimitStatusEnum`

## Fields

| Name |
|  --- |
| `Active` |
| `Inactive` |
| `PendingSCA` |
| `Scheduled` |

## Example

```ts
import { LimitStatusEnum } from 'adyen';

const limitStatus = LimitStatusEnum.PendingSCA;
```

