
# Close Account Response

## Structure

`CloseAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string \| undefined` | Optional | The account code of the account that is closed. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |
| `status` | [`Status22Enum \| undefined`](../../doc/models/status-22-enum.md) | Optional | The new status of the account.<br><br>> Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`. |

## Example

```ts
import { CloseAccountResponse, FieldNameEnum, Status22Enum } from 'adyen';

const closeAccountResponse: CloseAccountResponse = {
  accountCode: 'accountCode4',
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
  pspReference: 'pspReference4',
  resultCode: 'resultCode0',
  status: Status22Enum.Inactive,
};
```

