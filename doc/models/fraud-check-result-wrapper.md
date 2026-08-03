
# Fraud Check Result Wrapper

*This model accepts additional fields of type unknown.*

## Structure

`FraudCheckResultWrapper`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fraudCheckResult` | [`FraudCheckResult \| undefined`](../../doc/models/fraud-check-result.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FraudCheckResultWrapper } from 'adyenlib';

const fraudCheckResultWrapper: FraudCheckResultWrapper = {
  fraudCheckResult: {
    accountScore: 114,
    checkId: 2,
    name: 'name0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

