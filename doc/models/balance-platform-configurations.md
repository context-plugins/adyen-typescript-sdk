
# Balance Platform Configurations

*This model accepts additional fields of type unknown.*

## Structure

`BalancePlatformConfigurations`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatformPayoutSchedules` | [`BalancePlatformConfiguration[]`](../../doc/models/balance-platform-configuration.md) | Required | Contains a list of the payout schedules configured in your balance platform. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BalancePlatformConfigurations } from 'adyenlib';

const balancePlatformConfigurations: BalancePlatformConfigurations = {
  balancePlatformPayoutSchedules: [
    {
      balancePlatformId: 'balancePlatformId0',
      createdAt: '2016-03-13T12:52:32.123Z',
      payoutScheduleDescription: 'payoutScheduleDescription6',
      userSettlementDelay: 126,
      userSettlementTime: {
        hour: 136,
        minute: 138,
        nano: 162,
        second: 200,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      userSettlementTimeZone: 'userSettlementTimeZone4',
      automaticApplication: false,
      countryCode: 'countryCode2',
      currency: 'currency2',
      defaultDescription: 'defaultDescription6',
      defaultFrequency: 'defaultFrequency6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

