
# Upload Document Request

*This model accepts additional fields of type unknown.*

## Structure

`UploadDocumentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentContent` | `string` | Required | The content of the document, in Base64-encoded string format.<br><br>To learn about document requirements, refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks). |
| `documentDetail` | [`DocumentDetail`](../../doc/models/document-detail.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DocumentType, UploadDocumentRequest } from 'adyen';

const uploadDocumentRequest: UploadDocumentRequest = {
  documentContent: 'documentContent8',
  documentDetail: {
    documentType: DocumentType.Ssn,
    accountHolderCode: 'accountHolderCode0',
    bankAccountUuid: 'bankAccountUUID0',
    description: 'description6',
    filename: 'filename6',
    legalArrangementCode: 'legalArrangementCode6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

