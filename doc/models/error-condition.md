
# Error Condition

Possible values:

* **Aborted**
* **Busy**
* **Cancel**
* **DeviceOut**
* **InsertedCard**
* **InProgress**
* **LoggedOut**
* **MessageFormat**
* **NotAllowed**
* **NotFound**
* **PaymentRestriction**
* **Refusal**
* **UnavailableDevice**
* **UnavailableService**
* **InvalidCard**
* **UnreachableHost**
* **WrongPIN**

## Enumeration

`ErrorCondition`

## Fields

| Name |
|  --- |
| `Aborted` |
| `Busy` |
| `Cancel` |
| `DeviceOut` |
| `InsertedCard` |
| `InProgress` |
| `LoggedOut` |
| `MessageFormat` |
| `NotAllowed` |
| `NotFound` |
| `PaymentRestriction` |
| `Refusal` |
| `UnavailableDevice` |
| `UnavailableService` |
| `InvalidCard` |
| `UnreachableHost` |
| `WrongPin` |

## Example

```ts
import { ErrorCondition } from 'adyen';

const errorCondition = ErrorCondition.DeviceOut;
```

