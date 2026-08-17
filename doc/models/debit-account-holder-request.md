
# Debit Account Holder Request

## Structure

`DebitAccountHolderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder. |
| `amount` | [`Amount`](../../doc/models/amount.md) | Required | The amount to be debited from the account holder's bank account. |
| `bankAccountUUID` | `string` | Required | The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account. |
| `description` | `string \| undefined` | Optional | A description of the direct debit. Maximum length: 35 characters.<br><br>Allowed characters: **a-z**, **A-Z**, **0-9**, and special characters **/?:().,'+ ";**.<br><br>**Constraints**: *Maximum Length*: `35` |
| `merchantAccount` | `string` | Required | Your merchant account. |
| `splits` | [`Split1[]`](../../doc/models/split-1.md) | Required | Contains instructions on how to split the funds between the accounts in your platform. The request must have at least one split item. |

## Example

```ts
import { DebitAccountHolderRequest, Type60Enum } from 'adyen';

const debitAccountHolderRequest: DebitAccountHolderRequest = {
  accountHolderCode: 'accountHolderCode8',
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  bankAccountUUID: 'bankAccountUUID2',
  merchantAccount: 'merchantAccount2',
  splits: [
    {
      type: Type60Enum.Tip,
      account: 'account2',
      amount: {
        value: BigInt(110),
        currency: 'currency2',
      },
      description: 'description2',
      reference: 'reference2',
    }
  ],
  description: 'description4',
};
```

