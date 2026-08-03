
# Account Transaction List

*This model accepts additional fields of type unknown.*

## Structure

`AccountTransactionList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string \| undefined` | Optional | The code of the account. |
| `hasNextPage` | `boolean \| undefined` | Optional | Indicates whether there is a next page of transactions available. |
| `transactions` | [`Transaction[] \| undefined`](../../doc/models/transaction.md) | Optional | The list of transactions. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountTransactionList } from 'adyenlib';

const accountTransactionList: AccountTransactionList = {
  accountCode: 'accountCode0',
  hasNextPage: false,
  transactions: [
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      bankAccountDetail: {
        accountNumber: 'accountNumber8',
        accountType: 'accountType4',
        bankAccountName: 'bankAccountName4',
        bankAccountReference: 'bankAccountReference4',
        bankAccountUuid: 'bankAccountUUID0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      captureMerchantReference: 'captureMerchantReference8',
      capturePspReference: 'capturePspReference6',
      creationDate: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      bankAccountDetail: {
        accountNumber: 'accountNumber8',
        accountType: 'accountType4',
        bankAccountName: 'bankAccountName4',
        bankAccountReference: 'bankAccountReference4',
        bankAccountUuid: 'bankAccountUUID0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      captureMerchantReference: 'captureMerchantReference8',
      capturePspReference: 'capturePspReference6',
      creationDate: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

