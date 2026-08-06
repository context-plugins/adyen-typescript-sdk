
# Checkout Forward Response

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutForwardResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantReference` | `string \| undefined` | Optional | Merchant defined payment reference. |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character reference associated with the transaction/request. This value is globally unique. Use this reference when you communicate with us about this request. |
| `response` | [`CheckoutForwardResponseFromUrl`](../../doc/models/checkout-forward-response-from-url.md) | Required | - |
| `storedPaymentMethodId` | `string \| undefined` | Optional | The unique identifier of the token. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutForwardResponse } from 'adyen';

const checkoutForwardResponse: CheckoutForwardResponse = {
  response: {
    body: 'body6',
    headers: {
      'key0': 'headers3',
      'key1': 'headers4',
      'key2': 'headers5'
    },
    status: 110,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchantReference: 'merchantReference4',
  pspReference: 'pspReference2',
  storedPaymentMethodId: 'storedPaymentMethodId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

