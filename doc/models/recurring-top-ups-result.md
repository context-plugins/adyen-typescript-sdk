
# Recurring Top Ups Result

*This model accepts additional fields of type unknown.*

## Structure

`RecurringTopUpsResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `link` | [`Link`](../../doc/models/link.md) | Required | - |
| `recurringTopUps` | [`RecurringTopUp[]`](../../doc/models/recurring-top-up.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RecurringTopUpsResult, ScheduleType1, Status211 } from 'adyen';

const recurringTopUpsResult: RecurringTopUpsResult = {
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
  recurringTopUps: [
    {
      counterparty: {
        transferInstrumentId: 'transferInstrumentId4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      description: 'description0',
      id: 'id0',
      topUpAmount: {
        fixed: {
          currency: 'currency0',
          value: BigInt(164),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        target: {
          currency: 'currency2',
          value: BigInt(188),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      trigger: {
        threshold: {
          currency: 'currency8',
          value: BigInt(32),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        schedule: {
          type: ScheduleType1.Weekdays,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      referenceForBeneficiary: 'referenceForBeneficiary0',
      status: Status211.Active,
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

