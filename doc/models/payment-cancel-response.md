
# Payment Cancel Response

## Structure

`PaymentCancelResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `paymentPspReference` | `string` | Required | The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment to cancel. |
| `pspReference` | `string` | Required | Adyen's 16-character reference associated with the cancel request. |
| `reference` | `string \| undefined` | Optional | Your reference for the cancel request. |
| `status` | `string` | Required, Constant | The status of your request. This will always have the value **received**.<br><br>**Value**: `'received'` |

## Example

```ts
import { PaymentCancelResponse } from 'adyen';

const paymentCancelResponse: PaymentCancelResponse = {
  merchantAccount: 'merchantAccount4',
  paymentPspReference: 'paymentPspReference8',
  pspReference: 'pspReference4',
  status: 'received',
  reference: 'reference0',
};
```

