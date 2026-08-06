
# Create Account Request

*This model accepts additional fields of type unknown.*

## Structure

`CreateAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of Account Holder under which to create the account. |
| `bankAccountUuid` | `string \| undefined` | Optional | The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder. |
| `description` | `string \| undefined` | Optional | A description of the account, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`. |
| `metadata` | `Record<string, string> \| undefined` | Optional | A set of key and value pairs for general use by the merchant.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br><br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs. |
| `payoutMethodCode` | `string \| undefined` | Optional | The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code. |
| `payoutSchedule` | [`PayoutSchedule \| undefined`](../../doc/models/payout-schedule.md) | Optional | - |
| `payoutScheduleReason` | `string \| undefined` | Optional | The reason for the payout schedule choice.<br><br>> This field is required when the `payoutSchedule` parameter is set to `HOLD`. |
| `payoutSpeed` | [`PayoutSpeed1 \| undefined`](../../doc/models/payout-speed-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateAccountRequest, PayoutSchedule } from 'adyen';

const createAccountRequest: CreateAccountRequest = {
  accountHolderCode: 'accountHolderCode8',
  bankAccountUuid: 'bankAccountUUID2',
  description: 'description4',
  metadata: {
    'key0': 'metadata7',
    'key1': 'metadata8'
  },
  payoutMethodCode: 'payoutMethodCode4',
  payoutSchedule: PayoutSchedule.BiweeklyOn1StAnd15ThAtMidnight,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

