
# Stored Payment Method Request

*This model accepts additional fields of type unknown.*

## Structure

`StoredPaymentMethodRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `paymentMethod` | [`PaymentMethodToStore`](../../doc/models/payment-method-to-store.md) | Required | - |
| `recurringProcessingModel` | [`RecurringProcessingModel1`](../../doc/models/recurring-processing-model-1.md) | Required | - |
| `shopperEmail` | `string \| undefined` | Optional | The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. |
| `shopperIp` | `string \| undefined` | Optional | The IP address of a shopper. |
| `shopperReference` | `string` | Required | A unique identifier for the shopper (for example, user ID or account ID). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  RecurringProcessingModel1,
  StoredPaymentMethodRequest,
} from 'adyenlib';

const storedPaymentMethodRequest: StoredPaymentMethodRequest = {
  merchantAccount: 'merchantAccount4',
  paymentMethod: {
    brand: 'brand6',
    cvc: 'cvc6',
    encryptedCard: 'encryptedCard4',
    encryptedCardNumber: 'encryptedCardNumber0',
    encryptedExpiryMonth: 'encryptedExpiryMonth2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  recurringProcessingModel: RecurringProcessingModel1.CardOnFile,
  shopperReference: 'shopperReference0',
  shopperEmail: 'shopperEmail6',
  shopperIp: 'shopperIP0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

