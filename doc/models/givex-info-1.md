
# Givex Info 1

Details to provide if `type` is **givex**.

## Structure

`GivexInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string` | Required | The three-character ISO currency code, such as **EUR**. |
| `password` | `string` | Required | The password provided by the acquirer. |
| `paymentFlow` | [`PaymentFlowEnum`](../../doc/models/payment-flow-enum.md) | Required | The sales channel used for the payment. |
| `username` | `string` | Required | The username provided by the acquirer. |

## Example

```ts
import { GivexInfo1, PaymentFlowEnum } from 'adyen';

const givexInfo1: GivexInfo1 = {
  currencyCode: 'currencyCode0',
  password: 'password4',
  paymentFlow: PaymentFlowEnum.Ecommerce,
  username: 'username0',
};
```

