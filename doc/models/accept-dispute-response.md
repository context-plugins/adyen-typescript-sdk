
# Accept Dispute Response

## Structure

`AcceptDisputeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeServiceResult` | [`DisputeServiceResult1`](../../doc/models/dispute-service-result-1.md) | Required | The result of the dispute service. |

## Example

```ts
import { AcceptDisputeResponse } from 'adyen';

const acceptDisputeResponse: AcceptDisputeResponse = {
  disputeServiceResult: {
    success: false,
    errorMessage: 'errorMessage8',
  },
};
```

