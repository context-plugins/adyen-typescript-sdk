
# Event

The event.

> Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`.
> For more information, refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-process).

## Enumeration

`Event`

## Fields

| Name |
|  --- |
| `InactivateAccount` |
| `RefundNotPaidOutTransfers` |

## Example

```ts
import { Event } from 'adyenlib';

const event = Event.InactivateAccount;
```

