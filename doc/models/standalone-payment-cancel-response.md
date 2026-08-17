
# Standalone Payment Cancel Response

## Structure

`StandalonePaymentCancelResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `paymentReference` | `string` | Required | The [`reference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_reference) of the payment to cancel. |
| `pspReference` | `string` | Required | Adyen's 16-character reference associated with the cancel request. |
| `reference` | `string \| undefined` | Optional | Your reference for the cancel request. |
| `status` | `string` | Required, Constant | The status of your request. This will always have the value **received**.<br><br>**Value**: `'received'` |

## Example

```ts
import { StandalonePaymentCancelResponse } from 'adyen';

const standalonePaymentCancelResponse: StandalonePaymentCancelResponse = {
  merchantAccount: 'merchantAccount2',
  paymentReference: 'paymentReference0',
  pspReference: 'pspReference2',
  status: 'received',
  reference: 'reference6',
};
```

