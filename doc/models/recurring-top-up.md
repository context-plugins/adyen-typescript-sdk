
# Recurring Top Up

*This model accepts additional fields of type unknown.*

## Structure

`RecurringTopUp`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `counterparty` | [`TopUpCounterparty`](../../doc/models/top-up-counterparty.md) | Required | - |
| `description` | `string` | Required | Your description for the recurring top-up.<br><br>Maximum length is 140 characters. If you set a longer description, it will be cut off at 140 characters.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `140` |
| `id` | `string` | Required, Read-only | The unique identifier of the top up. |
| `referenceForBeneficiary` | `string \| undefined` | Optional | A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `80` |
| `status` | [`Status211 \| undefined`](../../doc/models/status-211.md) | Optional | - |
| `topUpAmount` | [`TopUpAmount`](../../doc/models/top-up-amount.md) | Required | - |
| `trigger` | [`Trigger`](../../doc/models/trigger.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RecurringTopUp, ScheduleType1, Status211 } from 'adyen';

const recurringTopUp: RecurringTopUp = {
  counterparty: {
    transferInstrumentId: 'transferInstrumentId4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  description: 'description6',
  id: 'id6',
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
  referenceForBeneficiary: 'referenceForBeneficiary4',
  status: Status211.Active,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

