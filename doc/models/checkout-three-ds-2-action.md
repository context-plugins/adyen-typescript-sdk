
# Checkout Three Ds 2 Action

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutThreeDs2Action`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationToken` | `string \| undefined` | Optional | A token needed to authorise a payment. |
| `paymentData` | `string \| undefined` | Optional | Encoded payment data. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `subtype` | `string \| undefined` | Optional | A subtype of the token. |
| `token` | `string \| undefined` | Optional | A token to pass to the 3DS2 Component to get the fingerprint. |
| `type` | [`Type583`](../../doc/models/type-583.md) | Required | **threeDS2** |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutThreeDs2Action, Type583 } from 'adyen';

const checkoutThreeDs2Action: CheckoutThreeDs2Action = {
  type: Type583.ThreeDs2,
  authorisationToken: 'authorisationToken6',
  paymentData: 'paymentData4',
  paymentMethodType: 'paymentMethodType4',
  subtype: 'subtype4',
  token: 'token4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

