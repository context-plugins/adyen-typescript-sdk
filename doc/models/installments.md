
# Installments

Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).

*This model accepts additional fields of type unknown.*

## Structure

`Installments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `extra` | `number \| undefined` | Optional | Defines the bonus percentage, refund percentage or if the transaction is Buy now Pay later.<br>Used for [card installments in Mexico](https://docs.adyen.com/payment-methods/cards/credit-card-installments/#getting-paid-mexico) |
| `plan` | [`Plan \| undefined`](../../doc/models/plan.md) | Optional | - |
| `value` | `number` | Required | Defines the number of installments.<br>Usually, the maximum allowed number of installments is capped. For example, it may not be possible to split a payment in more than 24 installments. The acquirer sets this upper limit, so its value may vary.<br>This value can be zero for Installments processed in Mexico. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Installments, Plan } from 'adyen';

const installments: Installments = {
  value: 58,
  extra: 50,
  plan: Plan.RefundPrctg,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

