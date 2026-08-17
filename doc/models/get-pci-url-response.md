
# Get Pci Url Response

## Structure

`GetPciUrlResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Information about any invalid fields. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `redirectUrl` | `string \| undefined` | Optional | The URL to the PCI compliance questionnaire where you should redirect your account holder. This URL must be used within 30 seconds and can only be used once. |
| `resultCode` | `string \| undefined` | Optional | The result code. |

## Example

```ts
import { FieldNameEnum, GetPciUrlResponse } from 'adyen';

const getPciUrlResponse: GetPciUrlResponse = {
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
  pspReference: 'pspReference4',
  redirectUrl: 'redirectUrl4',
  resultCode: 'resultCode2',
};
```

