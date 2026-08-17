
# Cost Estimate Response

## Structure

`CostEstimateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardBin` | [`CardBin1 \| undefined`](../../doc/models/card-bin-1.md) | Optional | Card BIN details. |
| `costEstimateAmount` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | The estimated cost (scheme fee + interchange) in the settlement currency. If the settlement currency cannot be determined, the fee in EUR is returned. |
| `costEstimateReference` | `string \| undefined` | Optional | Adyen's 16-character reference associated with the request. |
| `resultCode` | `string \| undefined` | Optional | The result of the cost estimation. |

## Example

```ts
import { CostEstimateResponse } from 'adyen';

const costEstimateResponse: CostEstimateResponse = {
  cardBin: {
    bin: 'bin6',
    commercial: false,
    fundingSource: 'fundingSource0',
    fundsAvailability: 'fundsAvailability0',
    issuerBin: 'issuerBin8',
  },
  costEstimateAmount: {
    currency: 'currency8',
    value: BigInt(90),
  },
  costEstimateReference: 'costEstimateReference8',
  resultCode: 'resultCode4',
};
```

