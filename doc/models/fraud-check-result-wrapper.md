
# Fraud Check Result Wrapper

## Structure

`FraudCheckResultWrapper`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fraudCheckResult` | [`FraudCheckResult \| undefined`](../../doc/models/fraud-check-result.md) | Optional | - |

## Example

```ts
import { FraudCheckResultWrapper } from 'adyen';

const fraudCheckResultWrapper: FraudCheckResultWrapper = {
  fraudCheckResult: {
    accountScore: 114,
    checkId: 2,
    name: 'name0',
  },
};
```

