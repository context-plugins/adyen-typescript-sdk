
# Subject Erasure Response

*This model accepts additional fields of type unknown.*

## Structure

`SubjectErasureResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | [`Result2 \| undefined`](../../doc/models/result-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Result2, SubjectErasureResponse } from 'adyenlib';

const subjectErasureResponse: SubjectErasureResponse = {
  result: Result2.PaymentNotFound,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

