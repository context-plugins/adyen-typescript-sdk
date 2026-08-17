
# Afterpay

## Structure

`Afterpay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingAddress` | `string \| undefined` | Optional | The address where to send the invoice. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `deliveryAddress` | `string \| undefined` | Optional | The address where the goods should be delivered. |
| `personalDetails` | `string \| undefined` | Optional | Shopper name, date of birth, phone number, and email address. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type2Enum`](../../doc/models/type-2-enum.md) | Required | **afterpay_default**<br><br>**Default**: `Type2Enum.AfterpayDefault` |

## Example

```ts
import { Afterpay, Type2Enum } from 'adyen';

const afterpay: Afterpay = {
  type: Type2Enum.AfterpayDefault,
  billingAddress: 'billingAddress8',
  checkoutAttemptId: 'checkoutAttemptId6',
  deliveryAddress: 'deliveryAddress6',
  personalDetails: 'personalDetails8',
  recurringDetailReference: 'recurringDetailReference0',
};
```

