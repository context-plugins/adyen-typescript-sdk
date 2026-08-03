
# Risk Scores Restriction 1

Risk scores provided by specific sources. The same operation applies to all scores.

Current sources available: **visa**, **mastercard**

Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.

*This model accepts additional fields of type unknown.*

## Structure

`RiskScoresRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`RiskScores \| undefined`](../../doc/models/risk-scores.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RiskScoresRestriction1 } from 'adyenlib';

const riskScoresRestriction1: RiskScoresRestriction1 = {
  operation: 'operation0',
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

