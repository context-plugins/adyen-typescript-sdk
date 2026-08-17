
# Stored Value Balance Check Response

## Structure

`StoredValueBalanceCheckResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currentBalance` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | The balance currently on the payment method. |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `refusalReason` | `string \| undefined` | Optional | If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.<br><br>When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values. |
| `resultCode` | [`ResultCode3Enum \| undefined`](../../doc/models/result-code-3-enum.md) | Optional | The result of the payment. Possible values:<br><br>* **Success** – The operation has been completed successfully.<br>* **Refused** – The operation was refused. The reason is given in the `refusalReason` field.<br>* **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field.<br>* **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks. |
| `thirdPartyRefusalReason` | `string \| undefined` | Optional | Raw refusal reason received from the third party, where available |

## Example

```ts
import { ResultCode3Enum, StoredValueBalanceCheckResponse } from 'adyen';

const storedValueBalanceCheckResponse: StoredValueBalanceCheckResponse = {
  currentBalance: {
    currency: 'currency2',
    value: BigInt(232),
  },
  pspReference: 'pspReference6',
  refusalReason: 'refusalReason4',
  resultCode: ResultCode3Enum.Success,
  thirdPartyRefusalReason: 'thirdPartyRefusalReason6',
};
```

