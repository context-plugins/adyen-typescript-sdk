
# Delete Defense Document Response

*This model accepts additional fields of type unknown.*

## Structure

`DeleteDefenseDocumentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputeServiceResult` | [`DisputeServiceResult`](../../doc/models/dispute-service-result.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeleteDefenseDocumentResponse } from 'adyenlib';

const deleteDefenseDocumentResponse: DeleteDefenseDocumentResponse = {
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

