
# Account Holder Transaction List Response

## Structure

`AccountHolderTransactionListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountTransactionLists` | [`AccountTransactionList[] \| undefined`](../../doc/models/account-transaction-list.md) | Optional | A list of the transactions. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |

## Example

```ts
import { AccountHolderTransactionListResponse, FieldNameEnum } from 'adyen';

const accountHolderTransactionListResponse: AccountHolderTransactionListResponse = {
  accountTransactionLists: [
    {
      accountCode: 'accountCode8',
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
    },
    {
      accountCode: 'accountCode8',
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
    },
    {
      accountCode: 'accountCode8',
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
    }
  ],
  invalidFields: [
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldNameEnum.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
      },
    },
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldNameEnum.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
      },
    },
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldNameEnum.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
      },
    }
  ],
  pspReference: 'pspReference8',
  resultCode: 'resultCode2',
};
```

