
# Get Account Holder Status Response

## Structure

`GetAccountHolderStatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string \| undefined` | Optional | The code of the Account Holder. |
| `accountHolderStatus` | [`AccountHolderStatus4 \| undefined`](../../doc/models/account-holder-status-4.md) | Optional | The status of the Account Holder. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |

## Example

```ts
import {
  EventEnum,
  FieldNameEnum,
  GetAccountHolderStatusResponse,
  Status12Enum,
} from 'adyen';

const getAccountHolderStatusResponse: GetAccountHolderStatusResponse = {
  accountHolderCode: 'accountHolderCode2',
  accountHolderStatus: {
    status: Status12Enum.Inactive,
    events: [
      {
        event: EventEnum.InactivateAccount,
        executionDate: '2016-03-13T12:52:32.123Z',
        reason: 'reason6',
      }
    ],
    payoutState: {
      allowPayout: false,
      disableReason: 'disableReason2',
      disabled: false,
      notAllowedReason: 'notAllowedReason4',
      payoutLimit: {
        currency: 'currency8',
        value: BigInt(88),
      },
    },
    processingState: {
      disableReason: 'disableReason2',
      disabled: false,
      processedFrom: {
        currency: 'currency4',
        value: BigInt(148),
      },
      processedTo: {
        currency: 'currency2',
        value: BigInt(54),
      },
      tierNumber: 156,
    },
    statusReason: 'statusReason8',
  },
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
  pspReference: 'pspReference6',
  resultCode: 'resultCode2',
};
```

