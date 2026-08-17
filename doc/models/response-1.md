
# Response 1

Result of a message request processing.
If Result is Success, `ErrorCondition` is absent or not used in the processing of the message. In the other cases, the `ErrorCondition` has to be present and can refine the processing of the message response. `AdditionalResponse` gives more information about the success or the failure of the message request processing, for logging without real time involvements.

## Structure

`Response1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | [`Result11Enum`](../../doc/models/result-11-enum.md) | Required | Result of the processing of the message.<br>Possible values:<br><br>* **Failure**<br>* **Partial**<br>* **Success** |
| `errorCondition` | [`ErrorCondition1Enum \| undefined`](../../doc/models/error-condition-1-enum.md) | Optional | Condition that has produced an error on the processing of a message request.<br>Returned if Result is not Success.<br>Possible values:<br><br>* **Aborted**<br>* **Busy**<br>* **Cancel**<br>* **DeviceOut**<br>* **InProgress**<br>* **InsertedCard**<br>* **InvalidCard**<br>* **LoggedOut**<br>* **MessageFormat**<br>* **NotAllowed**<br>* **NotFound**<br>* **PaymentRestriction**<br>* **Refusal**<br>* **UnavailableDevice**<br>* **UnavailableService**<br>* **UnreachableHost**<br>* **WrongPIN** |
| `additionalResponse` | `string \| undefined` | Optional | Additional information related to processing status of a message request.<br>If present, the POI logs it for further examination.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { ErrorCondition1Enum, Response1, Result11Enum } from 'adyen';

const response1: Response1 = {
  result: Result11Enum.Failure,
  errorCondition: ErrorCondition1Enum.Cancel,
  additionalResponse: 'AdditionalResponse4',
};
```

