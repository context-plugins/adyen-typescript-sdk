
# Notify Shopper Request

*This model accepts additional fields of type unknown.*

## Structure

`NotifyShopperRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16`](../../doc/models/amount-16.md) | Required | - |
| `billingDate` | `string \| undefined` | Optional | Date on which the subscription amount will be debited from the shopper. In YYYY-MM-DD format |
| `billingSequenceNumber` | `string \| undefined` | Optional | Sequence of the debit. Depends on Frequency and Billing Attempts Rule. |
| `displayedReference` | `string \| undefined` | Optional | Reference of Pre-debit notification that is displayed to the shopper. Optional field. Maps to reference if missing |
| `merchantAccount` | `string` | Required | The merchant account identifier with which you want to process the transaction. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `reference` | `string` | Required | Pre-debit notification reference sent by the merchant. This is a mandatory field |
| `shopperReference` | `string` | Required | The ID that uniquely identifies the shopper.<br><br>This `shopperReference` must be the same as the `shopperReference` used in the initial payment. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NotifyShopperRequest } from 'adyen';

const notifyShopperRequest: NotifyShopperRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchantAccount: 'merchantAccount6',
  reference: 'reference0',
  shopperReference: 'shopperReference2',
  billingDate: 'billingDate6',
  billingSequenceNumber: 'billingSequenceNumber4',
  displayedReference: 'displayedReference2',
  recurringDetailReference: 'recurringDetailReference4',
  storedPaymentMethodId: 'storedPaymentMethodId8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

