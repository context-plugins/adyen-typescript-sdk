
# Grant Offer Fee

## Structure

`GrantOfferFee`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | Contains the amount of the offer fee. |
| `aprBasisPoints` | `number \| undefined` | Optional | Annual Percentage Rate (APR) of the offer. The percentage is expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp). |

## Example

```ts
import { GrantOfferFee } from 'adyen';

const grantOfferFee: GrantOfferFee = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  aprBasisPoints: 244,
};
```

