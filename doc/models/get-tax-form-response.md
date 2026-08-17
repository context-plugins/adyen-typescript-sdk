
# Get Tax Form Response

## Structure

`GetTaxFormResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content` | `string \| undefined` | Optional | The content of the tax form in the Base64 binary format. |
| `contentType` | `string \| undefined` | Optional | The content type of the tax form. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |

## Example

```ts
import { FieldNameEnum, GetTaxFormResponse } from 'adyen';

const getTaxFormResponse: GetTaxFormResponse = {
  content: 'content4',
  contentType: 'contentType6',
  invalidFields: [
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
  pspReference: 'pspReference8',
  resultCode: 'resultCode4',
};
```

