
# Get Uploaded Documents Response

## Structure

`GetUploadedDocumentsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentDetails` | [`DocumentDetail[] \| undefined`](../../doc/models/document-detail.md) | Optional | A list of the documents and their details. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |

## Example

```ts
import {
  DocumentTypeEnum,
  FieldNameEnum,
  GetUploadedDocumentsResponse,
} from 'adyen';

const getUploadedDocumentsResponse: GetUploadedDocumentsResponse = {
  documentDetails: [
    {
      documentType: DocumentTypeEnum.COMPANYREGISTRATIONSCREENING,
      accountHolderCode: 'accountHolderCode0',
      bankAccountUUID: 'bankAccountUUID0',
      description: 'description4',
      filename: 'filename6',
      legalArrangementCode: 'legalArrangementCode6',
    }
  ],
  invalidFields: [
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldNameEnum.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
      },
    },
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldNameEnum.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
      },
    }
  ],
  pspReference: 'pspReference0',
  resultCode: 'resultCode4',
};
```

