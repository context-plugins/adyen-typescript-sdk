
# Risk Scores Restriction

## Structure

`RiskScoresRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`RiskScores \| undefined`](../../doc/models/risk-scores.md) | Optional | - |

## Example

```ts
import { RiskScoresRestriction } from 'adyen';

const riskScoresRestriction: RiskScoresRestriction = {
  operation: 'operation8',
  value: {
    mastercard: 84,
    visa: 6,
  },
};
```

