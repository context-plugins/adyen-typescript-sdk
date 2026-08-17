
# Response 11

Result of a message request processing.

## Structure

`Response11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | [`Result11Enum`](../../doc/models/result-11-enum.md) | Required | Result of the processing of the message.<br>Possible values:<br><br>* **Failure**<br>* **Partial**<br>* **Success** |
| `errorCondition` | [`ErrorCondition1Enum \| undefined`](../../doc/models/error-condition-1-enum.md) | Optional | Condition that has produced an error on the processing of a message request.<br>Returned if Result is not Success.<br>Possible values:<br><br>* **Aborted**<br>* **Busy**<br>* **Cancel**<br>* **DeviceOut**<br>* **InProgress**<br>* **InsertedCard**<br>* **InvalidCard**<br>* **LoggedOut**<br>* **MessageFormat**<br>* **NotAllowed**<br>* **NotFound**<br>* **PaymentRestriction**<br>* **Refusal**<br>* **UnavailableDevice**<br>* **UnavailableService**<br>* **UnreachableHost**<br>* **WrongPIN** |
| `additionalResponse` | `string \| undefined` | Optional | Additional information related to processing status of a message request.<br>If present, the POI logs it for further examination.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { ErrorCondition1Enum, Response11, Result11Enum } from 'adyen';

const response11: Response11 = {
  result: Result11Enum.Partial,
  errorCondition: ErrorCondition1Enum.UnreachableHost,
  additionalResponse: 'AdditionalResponse4',
};
```

