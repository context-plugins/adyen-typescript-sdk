
# Action

Direction on how to handle any payouts that have already been scheduled.

Possible values:

* `CLOSE`: close the existing batch of payouts.
* `UPDATE`: reschedule the existing batch to the new schedule.
* `NOTHING` (**default**): allow the payout to proceed.

## Enumeration

`Action`

## Fields

| Name |
|  --- |
| `Close` |
| `Nothing` |
| `Update` |

## Example

```ts
import { Action } from 'adyen';

const action = Action.Close;
```

