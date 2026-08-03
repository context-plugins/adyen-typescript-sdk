
# Response 11

Result of a message request processing.

*This model accepts additional fields of type unknown.*

## Structure

`Response11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | [`Result11`](../../doc/models/result-11.md) | Required | - |
| `errorCondition` | [`ErrorCondition1 \| undefined`](../../doc/models/error-condition-1.md) | Optional | - |
| `additionalResponse` | `string \| undefined` | Optional | Additional information related to processing status of a message request.<br>If present, the POI logs it for further examination.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ErrorCondition1, Response11, Result11 } from 'adyenlib';

const response11: Response11 = {
  result: Result11.Partial,
  errorCondition: ErrorCondition1.UnreachableHost,
  additionalResponse: 'AdditionalResponse4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

