
# Defend Dispute Response

## Structure

`DefendDisputeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeServiceResult` | [`DisputeServiceResult1`](../../doc/models/dispute-service-result-1.md) | Required | The result of the dispute service. |

## Example

```ts
import { DefendDisputeResponse } from 'adyen';

const defendDisputeResponse: DefendDisputeResponse = {
  disputeServiceResult: {
    success: false,
    errorMessage: 'errorMessage8',
  },
};
```

