
# Suspend Account Holder Response

*This model accepts additional fields of type unknown.*

## Structure

`SuspendAccountHolderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderStatus` | [`AccountHolderStatus \| undefined`](../../doc/models/account-holder-status.md) | Optional | - |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  Event,
  FieldName,
  Status1,
  SuspendAccountHolderResponse,
} from 'adyenlib';

const suspendAccountHolderResponse: SuspendAccountHolderResponse = {
  accountHolderStatus: {
    status: Status1.Inactive,
    events: [
      {
        event: Event.InactivateAccount,
        executionDate: '2016-03-13T12:52:32.123Z',
        reason: 'reason6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
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
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    processingState: {
      disableReason: 'disableReason2',
      disabled: false,
      processedFrom: {
        currency: 'currency4',
        value: BigInt(148),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      processedTo: {
        currency: 'currency2',
        value: BigInt(54),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      tierNumber: 156,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    statusReason: 'statusReason8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
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
  pspReference: 'pspReference8',
  resultCode: 'resultCode8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

