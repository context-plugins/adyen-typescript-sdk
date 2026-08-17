
# Checkout Native Redirect Action

## Structure

`CheckoutNativeRedirectAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, string> \| undefined` | Optional | When the redirect URL must be accessed via POST, use this data to post to the redirect URL. |
| `method` | `string \| undefined` | Optional | Specifies the HTTP method, for example GET or POST. |
| `nativeRedirectData` | `string \| undefined` | Optional | Native SDK's redirect data containing the direct issuer link and state data that must be submitted to the /v1/nativeRedirect/redirectResult. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `type` | `string` | Required, Constant | **nativeRedirect**<br><br>**Value**: `'nativeRedirect'` |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |

## Example

```ts
import { CheckoutNativeRedirectAction } from 'adyen';

const checkoutNativeRedirectAction: CheckoutNativeRedirectAction = {
  type: 'nativeRedirect',
  data: {
    'key0': 'data1',
    'key1': 'data2',
    'key2': 'data3'
  },
  method: 'method0',
  nativeRedirectData: 'nativeRedirectData2',
  paymentMethodType: 'paymentMethodType8',
  url: 'url0',
};
```

