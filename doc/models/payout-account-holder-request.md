
# Payout Account Holder Request

## Structure

`PayoutAccountHolderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string` | Required | The code of the account from which the payout is to be made. |
| `accountHolderCode` | `string` | Required | The code of the Account Holder who owns the account from which the payout is to be made.<br>The Account Holder is the party to which the payout will be made. |
| `amount` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | An object containing the currency and value of the payout.<br>If the account has multiple currencies, specify the currency to be used.<br>If the `bankAccountUUID` is provided in the request, the currency supported by the bank is used.<br>If the `payoutMethodCode` is provided in the request, the specified payout method is selected. |
| `bankAccountUUID` | `string \| undefined` | Optional | The unique ID of the Bank Account held by the Account Holder to which the payout is to be made.<br>If left blank, a bank account is automatically selected. |
| `description` | `string \| undefined` | Optional | A description of the payout. Maximum 200 characters.<br>Allowed: **abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?:().,'+ ";**<br><br>**Constraints**: *Maximum Length*: `200` |
| `merchantReference` | `string \| undefined` | Optional | A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another. |
| `payoutMethodCode` | `string \| undefined` | Optional | The unique ID of the payout method held by the Account Holder to which the payout is to be made.<br>If left blank, a payout instrument is automatically selected. |
| `payoutSpeed` | [`PayoutSpeedEnum \| undefined`](../../doc/models/payout-speed-enum.md) | Optional | Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.<br><br>**Default**: `PayoutSpeedEnum.STANDARD` |

## Example

```ts
import { PayoutAccountHolderRequest, PayoutSpeedEnum } from 'adyen';

const payoutAccountHolderRequest: PayoutAccountHolderRequest = {
  accountCode: 'accountCode0',
  accountHolderCode: 'accountHolderCode4',
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  bankAccountUUID: 'bankAccountUUID6',
  description: 'description0',
  merchantReference: 'merchantReference6',
  payoutMethodCode: 'payoutMethodCode0',
  payoutSpeed: PayoutSpeedEnum.STANDARD,
};
```

