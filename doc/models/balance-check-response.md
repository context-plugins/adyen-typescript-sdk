
# Balance Check Response

*This model accepts additional fields of type unknown.*

## Structure

`BalanceCheckResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**. |
| `balance` | [`Balance1`](../../doc/models/balance-1.md) | Required | - |
| `fraudResult` | [`FraudResult \| undefined`](../../doc/models/fraud-result.md) | Optional | - |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `refusalReason` | `string \| undefined` | Optional | If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons). |
| `resultCode` | [`ResultCode`](../../doc/models/result-code.md) | Required | - |
| `transactionLimit` | [`TransactionLimit \| undefined`](../../doc/models/transaction-limit.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BalanceCheckResponse, ResultCode } from 'adyen';

const balanceCheckResponse: BalanceCheckResponse = {
  balance: {
    currency: 'currency4',
    value: BigInt(128),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  resultCode: ResultCode.Success,
  additionalData: {
    'key0': 'additionalData6'
  },
  fraudResult: {
    accountScore: 232,
    results: [
      {
        accountScore: 102,
        checkId: 246,
        name: 'name6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        accountScore: 102,
        checkId: 246,
        name: 'name6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  pspReference: 'pspReference8',
  refusalReason: 'refusalReason6',
  transactionLimit: {
    currency: 'currency4',
    value: BigInt(238),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

