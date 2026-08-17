
# Checkout SDK Action

## Structure

`CheckoutSDKAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentData` | `string \| undefined` | Optional | Encoded payment data. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `sdkData` | `Record<string, string> \| undefined` | Optional | The data to pass to the SDK. |
| `type` | [`Type19Enum`](../../doc/models/type-19-enum.md) | Required | The type of the action. |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |

## Example

```ts
import { CheckoutSDKAction, Type19Enum } from 'adyen';

const checkoutSDKAction: CheckoutSDKAction = {
  type: Type19Enum.Sdk,
  paymentData: 'paymentData4',
  paymentMethodType: 'paymentMethodType4',
  sdkData: {
    'key0': 'sdkData7'
  },
  url: 'url6',
};
```

