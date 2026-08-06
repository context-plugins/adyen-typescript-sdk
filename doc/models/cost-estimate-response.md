
# Cost Estimate Response

*This model accepts additional fields of type unknown.*

## Structure

`CostEstimateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardBin` | [`CardBin \| undefined`](../../doc/models/card-bin.md) | Optional | - |
| `costEstimateAmount` | [`CostEstimateAmount \| undefined`](../../doc/models/cost-estimate-amount.md) | Optional | - |
| `costEstimateReference` | `string \| undefined` | Optional | Adyen's 16-character reference associated with the request. |
| `resultCode` | `string \| undefined` | Optional | The result of the cost estimation. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

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
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  costEstimateAmount: {
    currency: 'currency8',
    value: BigInt(90),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  costEstimateReference: 'costEstimateReference8',
  resultCode: 'resultCode4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

