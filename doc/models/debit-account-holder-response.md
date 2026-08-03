
# Debit Account Holder Response

*This model accepts additional fields of type unknown.*

## Structure

`DebitAccountHolderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string \| undefined` | Optional | The code of the account holder. |
| `bankAccountUuid` | `string \| undefined` | Optional | The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `merchantReferences` | `string[] \| undefined` | Optional | List of the `reference` values from the `split` array in the request. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DebitAccountHolderResponse, FieldName } from 'adyenlib';

const debitAccountHolderResponse: DebitAccountHolderResponse = {
  accountHolderCode: 'accountHolderCode2',
  bankAccountUuid: 'bankAccountUUID8',
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
    }
  ],
  merchantReferences: [
    'merchantReferences7',
    'merchantReferences8',
    'merchantReferences9'
  ],
  pspReference: 'pspReference6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

