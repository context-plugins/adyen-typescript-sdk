
# Account Holder Transaction List Response

*This model accepts additional fields of type unknown.*

## Structure

`AccountHolderTransactionListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountTransactionLists` | [`AccountTransactionList[] \| undefined`](../../doc/models/account-transaction-list.md) | Optional | A list of the transactions. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountHolderTransactionListResponse, FieldName } from 'adyenlib';

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
    },
    {
      accountCode: 'accountCode8',
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
    },
    {
      accountCode: 'accountCode8',
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
    }
  ],
  invalidFields: [
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldName.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldName.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldName.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  pspReference: 'pspReference8',
  resultCode: 'resultCode2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

