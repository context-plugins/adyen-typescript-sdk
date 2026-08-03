
# Grant Offer Fee 1

Contains information about the fee that your user would pay for the grant.

*This model accepts additional fields of type unknown.*

## Structure

`GrantOfferFee1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount5`](../../doc/models/amount-5.md) | Required | - |
| `aprBasisPoints` | `number \| undefined` | Optional | Annual Percentage Rate (APR) of the offer. The percentage is expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GrantOfferFee1 } from 'adyenlib';

const grantOfferFee1: GrantOfferFee1 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  aprBasisPoints: 216,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

