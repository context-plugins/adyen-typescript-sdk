
# Limit Status

The status of the transfer limit. Possible values:

* **active**: the limit is currently active.
* **inactive**: the limit is currently inactive.
* **pendingSCA**: the limit is pending until your user performs SCA.
* **scheduled**: the limit is scheduled to become active at a future date.

## Enumeration

`LimitStatus`

## Fields

| Name |
|  --- |
| `Active` |
| `Inactive` |
| `PendingSca` |
| `Scheduled` |

## Example

```ts
import { LimitStatus } from 'adyenlib';

const limitStatus = LimitStatus.PendingSca;
```

