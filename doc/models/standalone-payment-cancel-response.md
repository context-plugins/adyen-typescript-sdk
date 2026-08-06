
# Standalone Payment Cancel Response

*This model accepts additional fields of type unknown.*

## Structure

`StandalonePaymentCancelResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `paymentReference` | `string` | Required | The [`reference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_reference) of the payment to cancel. |
| `pspReference` | `string` | Required | Adyen's 16-character reference associated with the cancel request. |
| `reference` | `string \| undefined` | Optional | Your reference for the cancel request. |
| `status` | [`Status20`](../../doc/models/status-20.md) | Required | The status of your request. This will always have the value **received**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StandalonePaymentCancelResponse, Status20 } from 'adyen';

const standalonePaymentCancelResponse: StandalonePaymentCancelResponse = {
  merchantAccount: 'merchantAccount2',
  paymentReference: 'paymentReference0',
  pspReference: 'pspReference2',
  status: Status20.Received,
  reference: 'reference6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

