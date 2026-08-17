
# Upload Document Request

## Structure

`UploadDocumentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentContent` | `string` | Required | The content of the document, in Base64-encoded string format.<br><br>To learn about document requirements, refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks). |
| `documentDetail` | [`DocumentDetail1`](../../doc/models/document-detail-1.md) | Required | Details of the document being submitted. |

## Example

```ts
import { DocumentTypeEnum, UploadDocumentRequest } from 'adyen';

const uploadDocumentRequest: UploadDocumentRequest = {
  documentContent: 'documentContent8',
  documentDetail: {
    documentType: DocumentTypeEnum.SSN,
    accountHolderCode: 'accountHolderCode0',
    bankAccountUUID: 'bankAccountUUID0',
    description: 'description6',
    filename: 'filename6',
    legalArrangementCode: 'legalArrangementCode6',
  },
};
```

