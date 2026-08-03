
# Accept Dispute Response

*This model accepts additional fields of type unknown.*

## Structure

`AcceptDisputeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeServiceResult` | [`DisputeServiceResult`](../../doc/models/dispute-service-result.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AcceptDisputeResponse } from 'adyenlib';

const acceptDisputeResponse: AcceptDisputeResponse = {
  disputeServiceResult: {
    success: false,
    errorMessage: 'errorMessage8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

