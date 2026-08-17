
# Recurring Top Ups Result

## Structure

`RecurringTopUpsResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `link` | [`Link`](../../doc/models/link.md) | Required | - |
| `recurringTopUps` | [`RecurringTopUp[]`](../../doc/models/recurring-top-up.md) | Required | - |

## Example

```ts
import { RecurringTopUpsResult, ScheduleType1Enum, Status6Enum } from 'adyen';

const recurringTopUpsResult: RecurringTopUpsResult = {
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
  recurringTopUps: [
    {
      counterparty: {
        transferInstrumentId: 'transferInstrumentId4',
      },
      description: 'description0',
      id: '',
      topUpAmount: {
        fixed: {
          currency: 'currency0',
          value: BigInt(164),
        },
        target: {
          currency: 'currency2',
          value: BigInt(188),
        },
      },
      trigger: {
        threshold: {
          currency: 'currency8',
          value: BigInt(32),
        },
        schedule: {
          type: ScheduleType1Enum.Weekdays,
        },
      },
      referenceForBeneficiary: 'referenceForBeneficiary0',
      status: Status6Enum.Active,
    }
  ],
};
```

