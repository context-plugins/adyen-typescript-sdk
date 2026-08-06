
# Update Account Request

*This model accepts additional fields of type unknown.*

## Structure

`UpdateAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string` | Required | The code of the account to update. |
| `bankAccountUuid` | `string \| undefined` | Optional | The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder. |
| `description` | `string \| undefined` | Optional | A description of the account, maximum 256 characters.You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`. |
| `metadata` | `Record<string, string> \| undefined` | Optional | A set of key and value pairs for general use by the merchant.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br><br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs. |
| `payoutMethodCode` | `string \| undefined` | Optional | The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code. |
| `payoutSchedule` | [`UpdatePayoutScheduleRequest \| undefined`](../../doc/models/update-payout-schedule-request.md) | Optional | - |
| `payoutSpeed` | [`PayoutSpeed1 \| undefined`](../../doc/models/payout-speed-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Action, Schedule1, UpdateAccountRequest } from 'adyen';

const updateAccountRequest: UpdateAccountRequest = {
  accountCode: 'accountCode0',
  bankAccountUuid: 'bankAccountUUID6',
  description: 'description0',
  metadata: {
    'key0': 'metadata7'
  },
  payoutMethodCode: 'payoutMethodCode0',
  payoutSchedule: {
    schedule: Schedule1.WeeklyOnTueFriMidnight,
    action: Action.Nothing,
    reason: 'reason0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

