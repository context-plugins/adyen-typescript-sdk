
# Checkout Three DS 2 Action

## Structure

`CheckoutThreeDS2Action`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationToken` | `string \| undefined` | Optional | A token needed to authorise a payment. |
| `paymentData` | `string \| undefined` | Optional | Encoded payment data. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `subtype` | `string \| undefined` | Optional | A subtype of the token. |
| `token` | `string \| undefined` | Optional | A token to pass to the 3DS2 Component to get the fingerprint. |
| `type` | `string` | Required, Constant | **threeDS2**<br><br>**Value**: `'threeDS2'` |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |

## Example

```ts
import { CheckoutThreeDS2Action } from 'adyen';

const checkoutThreeDS2Action: CheckoutThreeDS2Action = {
  type: 'threeDS2',
  authorisationToken: 'authorisationToken0',
  paymentData: 'paymentData8',
  paymentMethodType: 'paymentMethodType8',
  subtype: 'subtype8',
  token: 'token0',
};
```

