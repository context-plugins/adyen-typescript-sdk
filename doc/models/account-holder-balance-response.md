
# Account Holder Balance Response

## Structure

`AccountHolderBalanceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePerAccount` | [`AccountDetailBalance[] \| undefined`](../../doc/models/account-detail-balance.md) | Optional | A list of each account and their balances. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |
| `totalBalance` | [`DetailBalance1 \| undefined`](../../doc/models/detail-balance-1.md) | Optional | The total balance of the account holder. |

## Example

```ts
import { AccountHolderBalanceResponse, FieldNameEnum } from 'adyen';

const accountHolderBalanceResponse: AccountHolderBalanceResponse = {
  balancePerAccount: [
    {
      accountCode: 'accountCode8',
      detailBalance: {
        balance: [
          {
            currency: 'currency4',
            value: BigInt(128),
          },
          {
            currency: 'currency4',
            value: BigInt(128),
          }
        ],
        onHoldBalance: [
          {
            currency: 'currency8',
            value: BigInt(72),
          },
          {
            currency: 'currency8',
            value: BigInt(72),
          },
          {
            currency: 'currency8',
            value: BigInt(72),
          }
        ],
        pendingBalance: [
          {
            currency: 'currency2',
            value: BigInt(254),
          }
        ],
      },
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
    }
  ],
  pspReference: 'pspReference4',
  resultCode: 'resultCode2',
  totalBalance: {
    balance: [
      {
        currency: 'currency4',
        value: BigInt(128),
      }
    ],
    onHoldBalance: [
      {
        currency: 'currency8',
        value: BigInt(72),
      },
      {
        currency: 'currency8',
        value: BigInt(72),
      },
      {
        currency: 'currency8',
        value: BigInt(72),
      }
    ],
    pendingBalance: [
      {
        currency: 'currency2',
        value: BigInt(254),
      },
      {
        currency: 'currency2',
        value: BigInt(254),
      }
    ],
  },
};
```

