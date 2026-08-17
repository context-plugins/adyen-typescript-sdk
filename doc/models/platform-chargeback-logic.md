
# Platform Chargeback Logic

Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).

## Structure

`PlatformChargebackLogic`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `behavior` | [`BehaviorEnum \| undefined`](../../doc/models/behavior-enum.md) | Optional | The method of handling the chargeback.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**, **deductAccordingToSplitRatio**. |
| `costAllocationAccount` | `string \| undefined` | Optional | The unique identifier of the balance account to which the chargeback fees are booked. By default, the chargeback fees are booked to your liable balance account. |
| `targetAccount` | `string \| undefined` | Optional | The unique identifier of the balance account against which the disputed amount is booked.<br><br>Required if `behavior` is **deductFromOneBalanceAccount**. |

## Example

```ts
import { BehaviorEnum, PlatformChargebackLogic } from 'adyen';

const platformChargebackLogic: PlatformChargebackLogic = {
  behavior: BehaviorEnum.DeductFromOneBalanceAccount,
  costAllocationAccount: 'costAllocationAccount8',
  targetAccount: 'targetAccount6',
};
```

