
# Platform Chargeback Logic

Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).

*This model accepts additional fields of type unknown.*

## Structure

`PlatformChargebackLogic`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `behavior` | [`Behavior \| undefined`](../../doc/models/behavior.md) | Optional | - |
| `costAllocationAccount` | `string \| undefined` | Optional | The unique identifier of the balance account to which the chargeback fees are booked. By default, the chargeback fees are booked to your liable balance account. |
| `targetAccount` | `string \| undefined` | Optional | The unique identifier of the balance account against which the disputed amount is booked.<br><br>Required if `behavior` is **deductFromOneBalanceAccount**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Behavior, PlatformChargebackLogic } from 'adyen';

const platformChargebackLogic: PlatformChargebackLogic = {
  behavior: Behavior.DeductFromOneBalanceAccount,
  costAllocationAccount: 'costAllocationAccount8',
  targetAccount: 'targetAccount6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

