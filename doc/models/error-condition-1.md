
# Error Condition 1

Condition that has produced an error on the processing of a message request.
Returned if Result is not Success.
Possible values:

* **Aborted**
* **Busy**
* **Cancel**
* **DeviceOut**
* **InProgress**
* **InsertedCard**
* **InvalidCard**
* **LoggedOut**
* **MessageFormat**
* **NotAllowed**
* **NotFound**
* **PaymentRestriction**
* **Refusal**
* **UnavailableDevice**
* **UnavailableService**
* **UnreachableHost**
* **WrongPIN**

## Enumeration

`ErrorCondition1`

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
import { ErrorCondition1 } from 'adyenlib';

const errorCondition1 = ErrorCondition1.UnavailableService;
```

