
# Update Account Response

## Structure

`UpdateAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string` | Required | The code of the account. |
| `bankAccountUUID` | `string \| undefined` | Optional | The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder. |
| `description` | `string \| undefined` | Optional | The description of the account. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | A list of fields that caused the `/updateAccount` request to fail. |
| `metadata` | `Record<string, string> \| undefined` | Optional | A set of key and value pairs containing metadata. |
| `payoutMethodCode` | `string \| undefined` | Optional | The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code. |
| `payoutSchedule` | [`PayoutScheduleResponse3 \| undefined`](../../doc/models/payout-schedule-response-3.md) | Optional | The details of the payout schedule to which the account is updated. |
| `payoutSpeed` | [`PayoutSpeed4Enum \| undefined`](../../doc/models/payout-speed-4-enum.md) | Optional | Speed at which payouts for this account are processed.<br><br>Possible values: `STANDARD`, `SAME_DAY`. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |

## Example

```ts
import { FieldNameEnum, UpdateAccountResponse } from 'adyen';

const updateAccountResponse: UpdateAccountResponse = {
  accountCode: 'accountCode2',
  bankAccountUUID: 'bankAccountUUID8',
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
  metadata: {
    'key0': 'metadata9',
    'key1': 'metadata8',
    'key2': 'metadata7'
  },
  payoutMethodCode: 'payoutMethodCode2',
};
```

