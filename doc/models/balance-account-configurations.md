
# Balance Account Configurations

*This model accepts additional fields of type unknown.*

## Structure

`BalanceAccountConfigurations`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountPayoutSchedules` | [`BalanceAccountConfiguration[]`](../../doc/models/balance-account-configuration.md) | Required | Contains a list of the Balance Account payout schedules. |
| `link` | [`Link`](../../doc/models/link.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

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
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  link: {
    first: {
      href: 'href2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    last: {
      href: 'href2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    next: {
      href: 'href4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    previous: {
      href: 'href0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    self: {
      href: 'href0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

