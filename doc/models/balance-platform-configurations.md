
# Balance Platform Configurations

## Structure

`BalancePlatformConfigurations`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatformPayoutSchedules` | [`BalancePlatformConfiguration[]`](../../doc/models/balance-platform-configuration.md) | Required | Contains a list of the payout schedules configured in your balance platform. |

## Example

```ts
import { BalancePlatformConfigurations } from 'adyen';

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
      },
      userSettlementTimeZone: 'userSettlementTimeZone4',
      automaticApplication: false,
      countryCode: 'countryCode2',
      currency: 'currency2',
      defaultDescription: 'defaultDescription6',
      defaultFrequency: 'defaultFrequency6',
    }
  ],
};
```

