
# Platform Chargeback Logic 4

Dictates the behavior of how a potential chargeback should be booked when using Adyen Platforms.

## Structure

`PlatformChargebackLogic4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `behavior` | [`BehaviorEnum \| undefined`](../../doc/models/behavior-enum.md) | Optional | The method of handling the chargeback.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**, **deductAccordingToSplitRatio**. |
| `costAllocationAccount` | `string \| undefined` | Optional | The unique identifier of the balance account to which the chargeback fees are booked. By default, the chargeback fees are booked to your liable balance account. |
| `targetAccount` | `string \| undefined` | Optional | The unique identifier of the balance account against which the disputed amount is booked.<br><br>Required if `behavior` is **deductFromOneBalanceAccount**. |

## Example

```ts
import { BehaviorEnum, PlatformChargebackLogic4 } from 'adyen';

const platformChargebackLogic4: PlatformChargebackLogic4 = {
  behavior: BehaviorEnum.DeductFromOneBalanceAccount,
  costAllocationAccount: 'costAllocationAccount0',
  targetAccount: 'targetAccount8',
};
```

