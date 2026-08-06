
# Behavior

The method of handling the chargeback.

Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**, **deductAccordingToSplitRatio**.

## Enumeration

`Behavior`

## Fields

| Name |
|  --- |
| `DeductFromOneBalanceAccount` |
| `DeductAccordingToSplitRatio` |
| `DeductFromLiableAccount` |

## Example

```ts
import { Behavior } from 'adyen';

const behavior = Behavior.DeductFromLiableAccount;
```

