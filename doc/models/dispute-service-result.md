
# Dispute Service Result

*This model accepts additional fields of type unknown.*

## Structure

`DisputeServiceResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorMessage` | `string \| undefined` | Optional | The general error message. |
| `success` | `boolean` | Required | Indicates whether the request succeeded. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DisputeServiceResult } from 'adyen';

const disputeServiceResult: DisputeServiceResult = {
  success: false,
  errorMessage: 'errorMessage8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

