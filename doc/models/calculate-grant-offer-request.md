
# Calculate Grant Offer Request

## Structure

`CalculateGrantOfferRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The financing amount that the user selected from a dynamic offer. Adyen uses this amount to calculate a preliminary offer. |

## Example

```ts
import { CalculateGrantOfferRequest } from 'adyen';

const calculateGrantOfferRequest: CalculateGrantOfferRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

