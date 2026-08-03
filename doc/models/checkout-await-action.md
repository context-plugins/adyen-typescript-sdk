
# Checkout Await Action

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutAwaitAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentData` | `string \| undefined` | Optional | Encoded payment data. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `type` | [`Type493`](../../doc/models/type-493.md) | Required | **await** |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutAwaitAction, Type493 } from 'adyenlib';

const checkoutAwaitAction: CheckoutAwaitAction = {
  type: Type493.Await,
  paymentData: 'paymentData2',
  paymentMethodType: 'paymentMethodType2',
  url: 'url4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

