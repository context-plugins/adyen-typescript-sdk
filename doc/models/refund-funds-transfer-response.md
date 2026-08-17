
# Refund Funds Transfer Response

## Structure

`RefundFundsTransferResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `merchantReference` | `string \| undefined` | Optional | The value supplied by the executing user when initiating the transfer refund; may be used to link multiple transactions. |
| `message` | `string \| undefined` | Optional | The message of the response. |
| `originalReference` | `string \| undefined` | Optional | A PSP reference of the original fund transfer. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |

## Example

```ts
import { FieldNameEnum, RefundFundsTransferResponse } from 'adyen';

const refundFundsTransferResponse: RefundFundsTransferResponse = {
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
  merchantReference: 'merchantReference0',
  message: 'message6',
  originalReference: 'originalReference0',
  pspReference: 'pspReference2',
};
```

