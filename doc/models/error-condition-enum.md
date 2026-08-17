
# Error Condition Enum

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

`ErrorConditionEnum`

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
| `WrongPIN` |

## Example

```ts
import { ErrorConditionEnum } from 'adyen';

const errorCondition = ErrorConditionEnum.DeviceOut;
```

