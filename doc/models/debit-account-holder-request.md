
# Debit Account Holder Request

*This model accepts additional fields of type unknown.*

## Structure

`DebitAccountHolderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder. |
| `amount` | [`Amount16`](../../doc/models/amount-16.md) | Required | - |
| `bankAccountUuid` | `string` | Required | The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account. |
| `description` | `string \| undefined` | Optional | A description of the direct debit. Maximum length: 35 characters.<br><br>Allowed characters: **a-z**, **A-Z**, **0-9**, and special characters **/?:().,'+ ";**.<br><br>**Constraints**: *Maximum Length*: `35` |
| `merchantAccount` | `string` | Required | Your merchant account. |
| `splits` | [`Split1[]`](../../doc/models/split-1.md) | Required | Contains instructions on how to split the funds between the accounts in your platform. The request must have at least one split item. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DebitAccountHolderRequest, Type15 } from 'adyen';

const debitAccountHolderRequest: DebitAccountHolderRequest = {
  accountHolderCode: 'accountHolderCode8',
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  bankAccountUuid: 'bankAccountUUID2',
  merchantAccount: 'merchantAccount2',
  splits: [
    {
      type: Type15.Tip,
      account: 'account2',
      amount: {
        value: BigInt(110),
        currency: 'currency2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      description: 'description2',
      reference: 'reference2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  description: 'description4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

