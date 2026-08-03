
# Response 1

Result of a message request processing.
If Result is Success, `ErrorCondition` is absent or not used in the processing of the message. In the other cases, the `ErrorCondition` has to be present and can refine the processing of the message response. `AdditionalResponse` gives more information about the success or the failure of the message request processing, for logging without real time involvements.

*This model accepts additional fields of type unknown.*

## Structure

`Response1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | [`Result11`](../../doc/models/result-11.md) | Required | - |
| `errorCondition` | [`ErrorCondition1 \| undefined`](../../doc/models/error-condition-1.md) | Optional | - |
| `additionalResponse` | `string \| undefined` | Optional | Additional information related to processing status of a message request.<br>If present, the POI logs it for further examination.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ErrorCondition1, Response1, Result11 } from 'adyenlib';

const response1: Response1 = {
  result: Result11.Failure,
  errorCondition: ErrorCondition1.Cancel,
  additionalResponse: 'AdditionalResponse4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

