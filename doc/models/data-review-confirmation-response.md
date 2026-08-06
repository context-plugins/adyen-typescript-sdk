
# Data Review Confirmation Response

*This model accepts additional fields of type unknown.*

## Structure

`DataReviewConfirmationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dataReviewedAt` | `string \| undefined` | Optional | Date when data review was confirmed. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DataReviewConfirmationResponse } from 'adyen';

const dataReviewConfirmationResponse: DataReviewConfirmationResponse = {
  dataReviewedAt: 'dataReviewedAt0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

