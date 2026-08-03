
# Stored Value Load Request

*This model accepts additional fields of type unknown.*

## Structure

`StoredValueLoadRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16`](../../doc/models/amount-16.md) | Required | - |
| `loadType` | [`LoadType \| undefined`](../../doc/models/load-type.md) | Optional | - |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `paymentMethod` | `Record<string, string>` | Required | The collection that contains the type of the payment method and its specific information if available |
| `recurringDetailReference` | `string \| undefined` | Optional | - |
| `reference` | `string` | Required | The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters. |
| `shopperInteraction` | [`ShopperInteraction1 \| undefined`](../../doc/models/shopper-interaction-1.md) | Optional | - |
| `shopperReference` | `string \| undefined` | Optional | - |
| `store` | `string \| undefined` | Optional | The physical store, for which this payment is processed.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  LoadType,
  ShopperInteraction1,
  StoredValueLoadRequest,
} from 'adyenlib';

const storedValueLoadRequest: StoredValueLoadRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchantAccount: 'merchantAccount8',
  paymentMethod: {
    'key0': 'paymentMethod8',
    'key1': 'paymentMethod9'
  },
  reference: 'reference2',
  loadType: LoadType.MerchandiseReturn,
  recurringDetailReference: 'recurringDetailReference6',
  shopperInteraction: ShopperInteraction1.Moto,
  shopperReference: 'shopperReference4',
  store: 'store6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

