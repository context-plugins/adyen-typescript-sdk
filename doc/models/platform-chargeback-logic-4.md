
# Platform Chargeback Logic 4

Dictates the behavior of how a potential chargeback should be booked when using Adyen Platforms.

*This model accepts additional fields of type unknown.*

## Structure

`PlatformChargebackLogic4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `behavior` | [`Behavior \| undefined`](../../doc/models/behavior.md) | Optional | - |
| `costAllocationAccount` | `string \| undefined` | Optional | The unique identifier of the balance account to which the chargeback fees are booked. By default, the chargeback fees are booked to your liable balance account. |
| `targetAccount` | `string \| undefined` | Optional | The unique identifier of the balance account against which the disputed amount is booked.<br><br>Required if `behavior` is **deductFromOneBalanceAccount**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Behavior, PlatformChargebackLogic4 } from 'adyenlib';

const platformChargebackLogic4: PlatformChargebackLogic4 = {
  behavior: Behavior.DeductFromOneBalanceAccount,
  costAllocationAccount: 'costAllocationAccount0',
  targetAccount: 'targetAccount8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

