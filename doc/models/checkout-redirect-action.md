
# Checkout Redirect Action

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutRedirectAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, string> \| undefined` | Optional | When the redirect URL must be accessed via POST, use this data to post to the redirect URL. |
| `method` | `string \| undefined` | Optional | Specifies the HTTP method, for example GET or POST. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `type` | [`Type573`](../../doc/models/type-573.md) | Required | **redirect** |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutRedirectAction, Type573 } from 'adyen';

const checkoutRedirectAction: CheckoutRedirectAction = {
  type: Type573.Redirect,
  data: {
    'key0': 'data3',
    'key1': 'data4'
  },
  method: 'method2',
  paymentMethodType: 'paymentMethodType0',
  url: 'url2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

