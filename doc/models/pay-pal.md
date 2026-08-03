
# Pay Pal

*This model accepts additional fields of type unknown.*

## Structure

`PayPal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `orderId` | `string \| undefined` | Optional | The unique ID associated with the order. |
| `payeePreferred` | `string \| undefined` | Optional | IMMEDIATE_PAYMENT_REQUIRED or UNRESTRICTED |
| `payerId` | `string \| undefined` | Optional | The unique ID associated with the payer. |
| `payerSelected` | `string \| undefined` | Optional | PAYPAL or PAYPAL_CREDIT |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `subtype` | [`Subtype \| undefined`](../../doc/models/subtype.md) | Optional | - |
| `type` | [`Type76`](../../doc/models/type-76.md) | Required | **paypal** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayPal, Type76 } from 'adyenlib';

const payPal: PayPal = {
  type: Type76.Paypal,
  checkoutAttemptId: 'checkoutAttemptId4',
  orderId: 'orderID2',
  payeePreferred: 'payeePreferred8',
  payerId: 'payerID4',
  payerSelected: 'payerSelected4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

