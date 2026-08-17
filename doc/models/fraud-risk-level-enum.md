
# Fraud Risk Level Enum

The risk level of the transaction as classified by the [machine learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/) fraud risk rule. The risk level indicates the likelihood that a transaction will result in a fraudulent dispute. Possible values:

* veryLow
* low
* medium
* high
* veryHigh

## Enumeration

`FraudRiskLevelEnum`

## Fields

| Name |
|  --- |
| `VeryLow` |
| `Low` |
| `Medium` |
| `High` |
| `VeryHigh` |

## Example

```ts
import { FraudRiskLevelEnum } from 'adyen';

const fraudRiskLevel = FraudRiskLevelEnum.Low;
```

