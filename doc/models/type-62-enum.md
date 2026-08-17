
# Type 62 Enum

The schedule type.

Possible values:

* **cron**: push out funds based on a `cronExpression`.

* **daily**: push out funds daily at 07:00 AM CET.

* **weekly**: push out funds every Monday at 07:00 AM CET.

* **monthly**: push out funds every first of the month at 07:00 AM CET.

* **balance**: execute the sweep instantly if the `triggerAmount` is reached.

## Enumeration

`Type62Enum`

## Fields

| Name |
|  --- |
| `Daily` |
| `Weekly` |
| `Monthly` |
| `Balance` |
| `Cron` |

## Example

```ts
import { Type62Enum } from 'adyen';

const type62 = Type62Enum.Weekly;
```

