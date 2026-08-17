
# Create Order Request

## Structure

`CreateOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount21`](../../doc/models/amount-21.md) | Required | The total amount of the order. |
| `expiresAt` | `string \| undefined` | Optional | The date when the order should expire. If not provided, the default expiry duration is 1 day.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**. |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the order. |
| `reference` | `string` | Required | A custom reference identifying the order. |

## Example

```ts
import { CreateOrderRequest } from 'adyen';

const createOrderRequest: CreateOrderRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  merchantAccount: 'merchantAccount6',
  reference: 'reference2',
  expiresAt: 'expiresAt8',
};
```

