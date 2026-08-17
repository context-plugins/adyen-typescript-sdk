
# Grant Offer Fee 1

Contains information about the fee that your user would pay for the grant.

## Structure

`GrantOfferFee1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | Contains the amount of the offer fee. |
| `aprBasisPoints` | `number \| undefined` | Optional | Annual Percentage Rate (APR) of the offer. The percentage is expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp). |

## Example

```ts
import { GrantOfferFee1 } from 'adyen';

const grantOfferFee1: GrantOfferFee1 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  aprBasisPoints: 216,
};
```

