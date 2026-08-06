
# Close Account Response

*This model accepts additional fields of type unknown.*

## Structure

`CloseAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string \| undefined` | Optional | The account code of the account that is closed. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |
| `status` | [`Status2 \| undefined`](../../doc/models/status-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CloseAccountResponse, FieldName, Status2 } from 'adyen';

const closeAccountResponse: CloseAccountResponse = {
  accountCode: 'accountCode4',
  invalidFields: [
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldName.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldName.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  pspReference: 'pspReference4',
  resultCode: 'resultCode0',
  status: Status2.Inactive,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

