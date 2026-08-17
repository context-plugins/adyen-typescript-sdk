
# Payment Reversal Response

## Structure

`PaymentReversalResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `paymentPspReference` | `string` | Required | The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment to reverse. |
| `pspReference` | `string` | Required | Adyen's 16-character reference associated with the reversal request. |
| `reference` | `string \| undefined` | Optional | Your reference for the reversal request. |
| `status` | `string` | Required, Constant | The status of your request. This will always have the value **received**.<br><br>**Value**: `'received'` |

## Example

```ts
import { PaymentReversalResponse } from 'adyen';

const paymentReversalResponse: PaymentReversalResponse = {
  merchantAccount: 'merchantAccount4',
  paymentPspReference: 'paymentPspReference0',
  pspReference: 'pspReference4',
  status: 'received',
  reference: 'reference2',
};
```

