
# Ratepay

## Structure

`Ratepay`

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
| `type` | [`Type48Enum`](../../doc/models/type-48-enum.md) | Required | **ratepay**<br><br>**Default**: `Type48Enum.Ratepay` |

## Example

```ts
import { Ratepay, Type48Enum } from 'adyen';

const ratepay: Ratepay = {
  type: Type48Enum.Ratepay,
  billingAddress: 'billingAddress0',
  checkoutAttemptId: 'checkoutAttemptId8',
  deliveryAddress: 'deliveryAddress8',
  personalDetails: 'personalDetails0',
  recurringDetailReference: 'recurringDetailReference2',
};
```

