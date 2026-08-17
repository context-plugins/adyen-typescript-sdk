
# Update Account Request

## Structure

`UpdateAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string` | Required | The code of the account to update. |
| `bankAccountUUID` | `string \| undefined` | Optional | The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder. |
| `description` | `string \| undefined` | Optional | A description of the account, maximum 256 characters.You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`. |
| `metadata` | `Record<string, string> \| undefined` | Optional | A set of key and value pairs for general use by the merchant.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br><br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs. |
| `payoutMethodCode` | `string \| undefined` | Optional | The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code. |
| `payoutSchedule` | [`UpdatePayoutScheduleRequest2 \| undefined`](../../doc/models/update-payout-schedule-request-2.md) | Optional | The details of the payout schedule to which the account must be updated. |
| `payoutSpeed` | [`PayoutSpeed1Enum \| undefined`](../../doc/models/payout-speed-1-enum.md) | Optional | Speed at which payouts for this account are processed.<br><br>Possible values: `STANDARD` (default), `SAME_DAY`. |

## Example

```ts
import { ActionEnum, Schedule1Enum, UpdateAccountRequest } from 'adyen';

const updateAccountRequest: UpdateAccountRequest = {
  accountCode: 'accountCode0',
  bankAccountUUID: 'bankAccountUUID6',
  description: 'description0',
  metadata: {
    'key0': 'metadata7'
  },
  payoutMethodCode: 'payoutMethodCode0',
  payoutSchedule: {
    schedule: Schedule1Enum.WEEKLYONTUEFRIMIDNIGHT,
    action: ActionEnum.NOTHING,
    reason: 'reason0',
  },
};
```

