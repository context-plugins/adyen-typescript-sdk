
# Pay Pal

## Structure

`PayPal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `orderID` | `string \| undefined` | Optional | The unique ID associated with the order. |
| `payeePreferred` | `string \| undefined` | Optional | IMMEDIATE_PAYMENT_REQUIRED or UNRESTRICTED |
| `payerID` | `string \| undefined` | Optional | The unique ID associated with the payer. |
| `payerSelected` | `string \| undefined` | Optional | PAYPAL or PAYPAL_CREDIT |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `subtype` | [`SubtypeEnum \| undefined`](../../doc/models/subtype-enum.md) | Optional | The type of flow to initiate. |
| `type` | `string` | Required, Constant | **paypal**<br><br>**Value**: `'paypal'` |

## Example

```ts
import { PayPal } from 'adyen';

const payPal: PayPal = {
  type: 'paypal',
  checkoutAttemptId: 'checkoutAttemptId4',
  orderID: 'orderID2',
  payeePreferred: 'payeePreferred8',
  payerID: 'payerID4',
  payerSelected: 'payerSelected4',
};
```

