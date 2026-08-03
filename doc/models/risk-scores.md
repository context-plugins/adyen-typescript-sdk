
# Risk Scores

*This model accepts additional fields of type unknown.*

## Structure

`RiskScores`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mastercard` | `number \| undefined` | Optional | Transaction risk score provided by Mastercard. Values provided by Mastercard range between 0 (lowest risk) to 998 (highest risk). |
| `visa` | `number \| undefined` | Optional | Transaction risk score provided by Visa. Values provided by Visa range between 01 (lowest risk) to 99 (highest risk). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RiskScores } from 'adyenlib';

const riskScores: RiskScores = {
  mastercard: 2,
  visa: 180,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

