
# Payout Account Holder Response

## Structure

`PayoutAccountHolderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountUUID` | `string \| undefined` | Optional | The unique ID of the Bank Account to which the payout was made. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `merchantReference` | `string \| undefined` | Optional | The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions. |
| `payoutSpeed` | [`PayoutSpeedEnum \| undefined`](../../doc/models/payout-speed-enum.md) | Optional | Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.<br><br>**Default**: `PayoutSpeedEnum.STANDARD` |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |

## Example

```ts
import {
  FieldNameEnum,
  PayoutAccountHolderResponse,
  PayoutSpeedEnum,
} from 'adyen';

const payoutAccountHolderResponse: PayoutAccountHolderResponse = {
  bankAccountUUID: 'bankAccountUUID6',
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
  merchantReference: 'merchantReference4',
  payoutSpeed: PayoutSpeedEnum.STANDARD,
  pspReference: 'pspReference2',
};
```

