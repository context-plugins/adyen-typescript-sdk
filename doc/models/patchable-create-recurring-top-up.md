
# Patchable Create Recurring Top Up

*This model accepts additional fields of type unknown.*

## Structure

`PatchableCreateRecurringTopUp`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Your description for the recurring top-up.<br><br>Maximum length is 140 characters. If you set a longer description, it will be cut off at 140 characters.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `140` |
| `referenceForBeneficiary` | `string \| null \| undefined` | Optional | A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `80` |
| `status` | `unknown \| undefined` | Optional | - |
| `topUpAmount` | [`PatchableTopUpAmount \| undefined`](../../doc/models/patchable-top-up-amount.md) | Optional | - |
| `trigger` | [`PatchableTrigger \| undefined`](../../doc/models/patchable-trigger.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PatchableCreateRecurringTopUp, ScheduleType1 } from 'adyenlib';

const patchableCreateRecurringTopUp: PatchableCreateRecurringTopUp = {
  description: 'description0',
  referenceForBeneficiary: 'referenceForBeneficiary0',
  status: { 'key1': 'val1', 'key2': 'val2' },
  topUpAmount: {
    fixed: {
      currency: 'currency2',
      value: BigInt(164),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    target: {
      currency: 'currency2',
      value: BigInt(164),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  trigger: {
    schedule: {
      type: ScheduleType1.Monthly,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    threshold: {
      currency: 'currency8',
      value: BigInt(32),
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

