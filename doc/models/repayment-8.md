
# Repayment 8

*This model accepts additional fields of type unknown.*

## Structure

`Repayment8`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `basisPoints` | `number` | Required | The repayment that is deducted daily from incoming net volume, in [basis points](https://www.investopedia.com/terms/b/basispoint.asp). |
| `term` | [`Term \| undefined`](../../doc/models/term.md) | Optional | - |
| `threshold` | [`ThresholdRepayment \| undefined`](../../doc/models/threshold-repayment.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Repayment8 } from 'adyen';

const repayment8: Repayment8 = {
  basisPoints: 64,
  term: {
    estimatedDays: 248,
    maximumDays: 24,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  threshold: {
    amount: {
      currency: 'currency2',
      value: BigInt(110),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

