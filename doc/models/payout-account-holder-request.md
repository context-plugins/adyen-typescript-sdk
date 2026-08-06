
# Payout Account Holder Request

*This model accepts additional fields of type unknown.*

## Structure

`PayoutAccountHolderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string` | Required | The code of the account from which the payout is to be made. |
| `accountHolderCode` | `string` | Required | The code of the Account Holder who owns the account from which the payout is to be made.<br>The Account Holder is the party to which the payout will be made. |
| `amount` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | - |
| `bankAccountUuid` | `string \| undefined` | Optional | The unique ID of the Bank Account held by the Account Holder to which the payout is to be made.<br>If left blank, a bank account is automatically selected. |
| `description` | `string \| undefined` | Optional | A description of the payout. Maximum 200 characters.<br>Allowed: **abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?:().,'+ ";**<br><br>**Constraints**: *Maximum Length*: `200` |
| `merchantReference` | `string \| undefined` | Optional | A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another. |
| `payoutMethodCode` | `string \| undefined` | Optional | The unique ID of the payout method held by the Account Holder to which the payout is to be made.<br>If left blank, a payout instrument is automatically selected. |
| `payoutSpeed` | [`PayoutSpeed \| undefined`](../../doc/models/payout-speed.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayoutAccountHolderRequest } from 'adyen';

const payoutAccountHolderRequest: PayoutAccountHolderRequest = {
  accountCode: 'accountCode0',
  accountHolderCode: 'accountHolderCode4',
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  bankAccountUuid: 'bankAccountUUID6',
  description: 'description0',
  merchantReference: 'merchantReference6',
  payoutMethodCode: 'payoutMethodCode0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

