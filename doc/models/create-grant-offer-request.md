
# Create Grant Offer Request

## Structure

`CreateGrantOfferRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The financing amount that the user selected from the dynamic offer. Adyen uses this amount to create a static offer. |

## Example

```ts
import { CreateGrantOfferRequest } from 'adyen';

const createGrantOfferRequest: CreateGrantOfferRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

