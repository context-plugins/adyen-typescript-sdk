
# Subject Erasure Response

## Structure

`SubjectErasureResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | [`Result2Enum \| undefined`](../../doc/models/result-2-enum.md) | Optional | The result of this operation. |

## Example

```ts
import { Result2Enum, SubjectErasureResponse } from 'adyen';

const subjectErasureResponse: SubjectErasureResponse = {
  result: Result2Enum.PAYMENTNOTFOUND,
};
```

