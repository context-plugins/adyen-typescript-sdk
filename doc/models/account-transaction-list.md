
# Account Transaction List

## Structure

`AccountTransactionList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string \| undefined` | Optional | The code of the account. |
| `hasNextPage` | `boolean \| undefined` | Optional | Indicates whether there is a next page of transactions available. |
| `transactions` | [`Transaction1[] \| undefined`](../../doc/models/transaction-1.md) | Optional | The list of transactions. |

## Example

```ts
import { AccountTransactionList } from 'adyen';

const accountTransactionList: AccountTransactionList = {
  accountCode: 'accountCode0',
  hasNextPage: false,
  transactions: [
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
      bankAccountDetail: {
        accountNumber: 'accountNumber8',
        accountType: 'accountType4',
        bankAccountName: 'bankAccountName4',
        bankAccountReference: 'bankAccountReference4',
        bankAccountUUID: 'bankAccountUUID0',
      },
      captureMerchantReference: 'captureMerchantReference8',
      capturePspReference: 'capturePspReference6',
      creationDate: '2016-03-13T12:52:32.123Z',
    },
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
      bankAccountDetail: {
        accountNumber: 'accountNumber8',
        accountType: 'accountType4',
        bankAccountName: 'bankAccountName4',
        bankAccountReference: 'bankAccountReference4',
        bankAccountUUID: 'bankAccountUUID0',
      },
      captureMerchantReference: 'captureMerchantReference8',
      capturePspReference: 'capturePspReference6',
      creationDate: '2016-03-13T12:52:32.123Z',
    }
  ],
};
```

