
# Create Account Request

## Structure

`CreateAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of Account Holder under which to create the account. |
| `bankAccountUUID` | `string \| undefined` | Optional | The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder. |
| `description` | `string \| undefined` | Optional | A description of the account, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`. |
| `metadata` | `Record<string, string> \| undefined` | Optional | A set of key and value pairs for general use by the merchant.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br><br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs. |
| `payoutMethodCode` | `string \| undefined` | Optional | The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code. |
| `payoutSchedule` | [`PayoutScheduleEnum \| undefined`](../../doc/models/payout-schedule-enum.md) | Optional | The payout schedule for the account.<br><br>Possible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.<br><br>> `HOLD` prevents scheduled payouts, but you can still initiate payouts manually. |
| `payoutScheduleReason` | `string \| undefined` | Optional | The reason for the payout schedule choice.<br><br>> This field is required when the `payoutSchedule` parameter is set to `HOLD`. |
| `payoutSpeed` | [`PayoutSpeed1Enum \| undefined`](../../doc/models/payout-speed-1-enum.md) | Optional | Speed at which payouts for this account are processed.<br><br>Possible values: `STANDARD` (default), `SAME_DAY`.<br><br>**Default**: `PayoutSpeed1Enum.STANDARD` |

## Example

```ts
import {
  CreateAccountRequest,
  PayoutScheduleEnum,
  PayoutSpeed1Enum,
} from 'adyen';

const createAccountRequest: CreateAccountRequest = {
  accountHolderCode: 'accountHolderCode8',
  bankAccountUUID: 'bankAccountUUID2',
  description: 'description4',
  metadata: {
    'key0': 'metadata7',
    'key1': 'metadata8'
  },
  payoutMethodCode: 'payoutMethodCode4',
  payoutSchedule: PayoutScheduleEnum.BIWEEKLYON1STAND15THATMIDNIGHT,
  payoutSpeed: PayoutSpeed1Enum.STANDARD,
};
```

