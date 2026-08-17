
# Transfer Funds Request

## Structure

`TransferFundsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount`](../../doc/models/amount.md) | Required | The amount to be transferred. |
| `destinationAccountCode` | `string` | Required | The code of the account to which the funds are to be credited.<br><br>> The state of the Account Holder of this account must be Active. |
| `merchantReference` | `string \| undefined` | Optional | A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another. |
| `sourceAccountCode` | `string` | Required | The code of the account from which the funds are to be debited.<br><br>> The state of the Account Holder of this account must be Active and allow payouts. |
| `transferCode` | `string` | Required | The code related to the type of transfer being performed.<br><br>> The permitted codes differ for each platform account and are defined in their service level agreement. |

## Example

```ts
import { TransferFundsRequest } from 'adyen';

const transferFundsRequest: TransferFundsRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  destinationAccountCode: 'destinationAccountCode6',
  sourceAccountCode: 'sourceAccountCode6',
  transferCode: 'transferCode8',
  merchantReference: 'merchantReference6',
};
```

