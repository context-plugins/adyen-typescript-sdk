
# Balance Check Response

## Structure

`BalanceCheckResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**. |
| `balance` | [`Amount8`](../../doc/models/amount-8.md) | Required | The balance for the payment method. |
| `fraudResult` | [`FraudResult1 \| undefined`](../../doc/models/fraud-result-1.md) | Optional | The fraud result properties of the payment. |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `refusalReason` | `string \| undefined` | Optional | If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons). |
| `resultCode` | [`ResultCodeEnum`](../../doc/models/result-code-enum.md) | Required | The result of the cancellation request.<br><br>Possible values:<br><br>* **Success** – Indicates that the balance check was successful.<br>* **NotEnoughBalance** – Commonly indicates that the card did not have enough balance to pay the amount in the request, or that the currency of the balance on the card did not match the currency of the requested amount.<br>* **Failed** – Indicates that the balance check failed. |
| `transactionLimit` | [`Amount9 \| undefined`](../../doc/models/amount-9.md) | Optional | The maximum spendable balance for a single transaction. Applicable to some gift cards. |

## Example

```ts
import { BalanceCheckResponse, ResultCodeEnum } from 'adyen';

const balanceCheckResponse: BalanceCheckResponse = {
  balance: {
    currency: 'currency4',
    value: BigInt(128),
  },
  resultCode: ResultCodeEnum.Success,
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
      },
      {
        accountScore: 102,
        checkId: 246,
        name: 'name6',
      }
    ],
  },
  pspReference: 'pspReference8',
  refusalReason: 'refusalReason6',
  transactionLimit: {
    currency: 'currency4',
    value: BigInt(238),
  },
};
```

