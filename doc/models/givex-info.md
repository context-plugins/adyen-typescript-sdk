
# Givex Info

## Structure

`GivexInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string` | Required | The three-character ISO currency code, such as **EUR**. |
| `password` | `string` | Required | The password provided by the acquirer. |
| `paymentFlow` | [`PaymentFlowEnum`](../../doc/models/payment-flow-enum.md) | Required | The sales channel used for the payment. |
| `username` | `string` | Required | The username provided by the acquirer. |

## Example

```ts
import { GivexInfo, PaymentFlowEnum } from 'adyen';

const givexInfo: GivexInfo = {
  currencyCode: 'currencyCode6',
  password: 'password0',
  paymentFlow: PaymentFlowEnum.Ecommerce,
  username: 'username6',
};
```

