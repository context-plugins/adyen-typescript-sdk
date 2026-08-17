
# Balance Account Configurations

## Structure

`BalanceAccountConfigurations`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountPayoutSchedules` | [`BalanceAccountConfiguration[]`](../../doc/models/balance-account-configuration.md) | Required | Contains a list of the Balance Account payout schedules. |
| `link` | [`Link2`](../../doc/models/link-2.md) | Required | Contains links to the next and previous page whenever applicable. |

## Example

```ts
import { BalanceAccountConfigurations } from 'adyen';

const balanceAccountConfigurations: BalanceAccountConfigurations = {
  balanceAccountPayoutSchedules: [
    {
      balanceAccountId: 'balanceAccountId0',
      balancePlatformPayoutScheduleId: 'balancePlatformPayoutScheduleId8',
      createdAt: '2016-03-13T12:52:32.123Z',
      transferInstrumentId: 'transferInstrumentId4',
      currency: 'currency8',
      description: 'description2',
      enabled: false,
      frequency: 'frequency6',
      frequencyValue: 138,
    }
  ],
  link: {
    first: {
      href: 'href2',
    },
    last: {
      href: 'href2',
    },
    next: {
      href: 'href4',
    },
    previous: {
      href: 'href0',
    },
    self: {
      href: 'href0',
    },
  },
};
```

