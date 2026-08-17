
# Checkout Await Action

## Structure

`CheckoutAwaitAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentData` | `string \| undefined` | Optional | Encoded payment data. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `type` | `string` | Required, Constant | **await**<br><br>**Value**: `'await'` |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |

## Example

```ts
import { CheckoutAwaitAction } from 'adyen';

const checkoutAwaitAction: CheckoutAwaitAction = {
  type: 'await',
  paymentData: 'paymentData2',
  paymentMethodType: 'paymentMethodType2',
  url: 'url4',
};
```

