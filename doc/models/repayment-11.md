
# Repayment 11

Contains information about the repayment configuration of the grant.

*This model accepts additional fields of type unknown.*

## Structure

`Repayment11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `basisPoints` | `number` | Required | The percentage of your user's incoming net volume that is deducted for repaying the grant. The percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp). |
| `term` | [`Term \| undefined`](../../doc/models/term.md) | Optional | - |
| `threshold` | [`ThresholdRepayment \| undefined`](../../doc/models/threshold-repayment.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Repayment11 } from 'adyenlib';

const repayment11: Repayment11 = {
  basisPoints: 238,
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

