
# Risk Scores Restriction

*This model accepts additional fields of type unknown.*

## Structure

`RiskScoresRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`RiskScores \| undefined`](../../doc/models/risk-scores.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RiskScoresRestriction } from 'adyenlib';

const riskScoresRestriction: RiskScoresRestriction = {
  operation: 'operation8',
  value: {
    mastercard: 84,
    visa: 6,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

