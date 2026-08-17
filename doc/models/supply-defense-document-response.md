
# Supply Defense Document Response

## Structure

`SupplyDefenseDocumentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeServiceResult` | [`DisputeServiceResult1`](../../doc/models/dispute-service-result-1.md) | Required | The result of the dispute service. |

## Example

```ts
import { SupplyDefenseDocumentResponse } from 'adyen';

const supplyDefenseDocumentResponse: SupplyDefenseDocumentResponse = {
  disputeServiceResult: {
    success: false,
    errorMessage: 'errorMessage8',
  },
};
```

