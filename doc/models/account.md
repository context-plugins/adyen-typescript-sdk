
# Account

*This model accepts additional fields of type unknown.*

## Structure

`Account`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string \| undefined` | Optional | The code of the account. |
| `bankAccountUuid` | `string \| undefined` | Optional | The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder. |
| `beneficiaryAccount` | `string \| undefined` | Optional | The beneficiary of the account. |
| `beneficiaryMerchantReference` | `string \| undefined` | Optional | The reason that a beneficiary has been set up for this account. This may have been supplied during the setup of a beneficiary at the discretion of the executing user. |
| `description` | `string \| undefined` | Optional | A description of the account. |
| `metadata` | `Record<string, string> \| undefined` | Optional | A set of key and value pairs for general use by the merchant.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br><br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs. |
| `payoutMethodCode` | `string \| undefined` | Optional | The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code. |
| `payoutSchedule` | [`PayoutScheduleResponse \| undefined`](../../doc/models/payout-schedule-response.md) | Optional | - |
| `payoutSpeed` | [`PayoutSpeed \| undefined`](../../doc/models/payout-speed.md) | Optional | - |
| `status` | `string \| undefined` | Optional | The status of the account. Possible values: `Active`, `Inactive`, `Suspended`, `Closed`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Account } from 'adyen';

const account: Account = {
  accountCode: 'accountCode0',
  bankAccountUuid: 'bankAccountUUID6',
  beneficiaryAccount: 'beneficiaryAccount2',
  beneficiaryMerchantReference: 'beneficiaryMerchantReference2',
  description: 'description0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

