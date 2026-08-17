
# Patchable Create Recurring Top Up

## Structure

`PatchableCreateRecurringTopUp`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Your description for the recurring top-up.<br><br>Maximum length is 140 characters. If you set a longer description, it will be cut off at 140 characters.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `140` |
| `referenceForBeneficiary` | `string \| null \| undefined` | Optional | A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `80` |
| `status` | [`Status6Enum \| null \| undefined`](../../doc/models/status-6-enum.md) | Optional | The status of the recurring top-up. If not provided, by default, this is set to **active**.<br><br>Possible values:<br><br>* **active**:  the top up is enabled and funds will be pulled in.<br><br>* **inactive**: the top up is disabled and cannot be triggered. |
| `topUpAmount` | [`PatchableTopUpAmount2 \| undefined`](../../doc/models/patchable-top-up-amount-2.md) | Optional | The currency and value to be added to the balance account, specified in minor units. This can be a fixed amount or a target amount. |
| `trigger` | [`PatchableTrigger2 \| undefined`](../../doc/models/patchable-trigger-2.md) | Optional | The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold. |

## Example

```ts
import {
  PatchableCreateRecurringTopUp,
  ScheduleType1Enum,
  Status6Enum,
} from 'adyen';

const patchableCreateRecurringTopUp: PatchableCreateRecurringTopUp = {
  description: 'description0',
  referenceForBeneficiary: 'referenceForBeneficiary0',
  status: Status6Enum.Active,
  topUpAmount: {
    fixed: {
      currency: 'currency2',
      value: BigInt(164),
    },
    target: {
      currency: 'currency2',
      value: BigInt(164),
    },
  },
  trigger: {
    schedule: {
      type: ScheduleType1Enum.Monthly,
    },
    threshold: {
      currency: 'currency8',
      value: BigInt(32),
    },
  },
};
```

