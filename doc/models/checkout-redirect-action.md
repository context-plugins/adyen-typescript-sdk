
# Checkout Redirect Action

## Structure

`CheckoutRedirectAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, string> \| undefined` | Optional | When the redirect URL must be accessed via POST, use this data to post to the redirect URL. |
| `method` | `string \| undefined` | Optional | Specifies the HTTP method, for example GET or POST. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `type` | `string` | Required, Constant | **redirect**<br><br>**Value**: `'redirect'` |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |

## Example

```ts
import { CheckoutRedirectAction } from 'adyen';

const checkoutRedirectAction: CheckoutRedirectAction = {
  type: 'redirect',
  data: {
    'key0': 'data3',
    'key1': 'data4'
  },
  method: 'method2',
  paymentMethodType: 'paymentMethodType0',
  url: 'url2',
};
```

