
# Error Condition 1 Enum

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

`ErrorCondition1Enum`

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
import { ErrorCondition1Enum } from 'adyen';

const errorCondition1 = ErrorCondition1Enum.UnavailableService;
```

