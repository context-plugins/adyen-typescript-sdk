
# Checkout Sdk Action

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutSdkAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentData` | `string \| undefined` | Optional | Encoded payment data. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `sdkData` | `Record<string, string> \| undefined` | Optional | The data to pass to the SDK. |
| `type` | [`Type19`](../../doc/models/type-19.md) | Required | - |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutSdkAction, Type19 } from 'adyenlib';

const checkoutSdkAction: CheckoutSdkAction = {
  type: Type19.Sdk,
  paymentData: 'paymentData0',
  paymentMethodType: 'paymentMethodType0',
  sdkData: {
    'key0': 'sdkData7',
    'key1': 'sdkData6',
    'key2': 'sdkData5'
  },
  url: 'url2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

