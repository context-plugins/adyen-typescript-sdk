
# Create Account Response

## Structure

`CreateAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string \| undefined` | Optional | The code of the new account. |
| `accountHolderCode` | `string \| undefined` | Optional | The code of the account holder. |
| `bankAccountUUID` | `string \| undefined` | Optional | The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder. |
| `description` | `string \| undefined` | Optional | The description of the account. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | A list of fields that caused the `/createAccount` request to fail. |
| `metadata` | `Record<string, string> \| undefined` | Optional | A set of key and value pairs containing metadata. |
| `payoutMethodCode` | `string \| undefined` | Optional | The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code. |
| `payoutSchedule` | [`PayoutScheduleResponse1 \| undefined`](../../doc/models/payout-schedule-response-1.md) | Optional | The details of the payout schedule added to the account. |
| `payoutSpeed` | [`PayoutSpeedEnum \| undefined`](../../doc/models/payout-speed-enum.md) | Optional | Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |
| `status` | [`Status42Enum \| undefined`](../../doc/models/status-42-enum.md) | Optional | The status of the account.<br><br>> Permitted values: `Active`. |

## Example

```ts
import { CreateAccountResponse, FieldNameEnum } from 'adyen';

const createAccountResponse: CreateAccountResponse = {
  accountCode: 'accountCode2',
  accountHolderCode: 'accountHolderCode6',
  bankAccountUUID: 'bankAccountUUID4',
  description: 'description2',
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
};
```

