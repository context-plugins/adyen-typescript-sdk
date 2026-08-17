
# Pay Pay

## Structure

`PayPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type40Enum \| undefined`](../../doc/models/type-40-enum.md) | Optional | **paypay**<br><br>**Default**: `Type40Enum.Paypay` |

## Example

```ts
import { PayPay, Type40Enum } from 'adyen';

const payPay: PayPay = {
  checkoutAttemptId: 'checkoutAttemptId4',
  recurringDetailReference: 'recurringDetailReference8',
  sdkData: 'sdkData8',
  storedPaymentMethodId: 'storedPaymentMethodId2',
  type: Type40Enum.Paypay,
};
```

