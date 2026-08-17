
# Debit Account Holder Response

## Structure

`DebitAccountHolderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string \| undefined` | Optional | The code of the account holder. |
| `bankAccountUUID` | `string \| undefined` | Optional | The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `merchantReferences` | `string[] \| undefined` | Optional | List of the `reference` values from the `split` array in the request. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |

## Example

```ts
import { DebitAccountHolderResponse, FieldNameEnum } from 'adyen';

const debitAccountHolderResponse: DebitAccountHolderResponse = {
  accountHolderCode: 'accountHolderCode2',
  bankAccountUUID: 'bankAccountUUID8',
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
  merchantReferences: [
    'merchantReferences7',
    'merchantReferences8',
    'merchantReferences9'
  ],
  pspReference: 'pspReference6',
};
```

