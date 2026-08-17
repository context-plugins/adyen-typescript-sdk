
# Delete Defense Document Response

## Structure

`DeleteDefenseDocumentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeServiceResult` | [`DisputeServiceResult1`](../../doc/models/dispute-service-result-1.md) | Required | The result of the dispute service. |

## Example

```ts
import { DeleteDefenseDocumentResponse } from 'adyen';

const deleteDefenseDocumentResponse: DeleteDefenseDocumentResponse = {
  disputeServiceResult: {
    success: false,
    errorMessage: 'errorMessage8',
  },
};
```

