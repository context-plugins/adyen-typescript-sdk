
# Stored Value Balance Merge Request

*This model accepts additional fields of type unknown.*

## Structure

`StoredValueBalanceMergeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | - |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `paymentMethod` | `Record<string, string>` | Required | The collection that contains the type of the payment method and its specific information if available |
| `recurringDetailReference` | `string \| undefined` | Optional | - |
| `reference` | `string` | Required | The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters. |
| `shopperInteraction` | [`ShopperInteraction1 \| undefined`](../../doc/models/shopper-interaction-1.md) | Optional | - |
| `shopperReference` | `string \| undefined` | Optional | - |
| `sourcePaymentMethod` | `Record<string, string>` | Required | The collection that contains the source payment method and its specific information if available. Note that type should not be included since it is inferred from the (target) payment method |
| `store` | `string \| undefined` | Optional | The physical store, for which this payment is processed.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ShopperInteraction1, StoredValueBalanceMergeRequest } from 'adyen';

const storedValueBalanceMergeRequest: StoredValueBalanceMergeRequest = {
  merchantAccount: 'merchantAccount0',
  paymentMethod: {
    'key0': 'paymentMethod0',
    'key1': 'paymentMethod9',
    'key2': 'paymentMethod8'
  },
  reference: 'reference6',
  sourcePaymentMethod: {
    'key0': 'sourcePaymentMethod6'
  },
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  recurringDetailReference: 'recurringDetailReference8',
  shopperInteraction: ShopperInteraction1.Moto,
  shopperReference: 'shopperReference6',
  store: 'store2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

