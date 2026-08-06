
# Transfer Funds Response

*This model accepts additional fields of type unknown.*

## Structure

`TransferFundsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `merchantReference` | `string \| undefined` | Optional | The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FieldName, TransferFundsResponse } from 'adyen';

const transferFundsResponse: TransferFundsResponse = {
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
  merchantReference: 'merchantReference4',
  pspReference: 'pspReference6',
  resultCode: 'resultCode2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

