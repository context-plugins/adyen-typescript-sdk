
# Create Recurring Top Up

## Structure

`CreateRecurringTopUp`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `counterparty` | [`TopUpCounterparty1`](../../doc/models/top-up-counterparty-1.md) | Required | The details about the counterparty that is funding the top-up. |
| `description` | `string` | Required | Your description for the recurring top-up.<br><br>Maximum length is 140 characters. If you set a longer description, it will be cut off at 140 characters.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `140` |
| `referenceForBeneficiary` | `string \| undefined` | Optional | A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `80` |
| `status` | [`Status6Enum \| undefined`](../../doc/models/status-6-enum.md) | Optional | The status of the recurring top-up. If not provided, by default, this is set to **active**.<br><br>Possible values:<br><br>* **active**:  the top up is enabled and funds will be pulled in.<br><br>* **inactive**: the top up is disabled and cannot be triggered. |
| `topUpAmount` | [`TopUpAmount1`](../../doc/models/top-up-amount-1.md) | Required | The currency and value to be added to the balance account, specified in minor units. This can be a fixed amount or a target amount. |
| `trigger` | [`Trigger1`](../../doc/models/trigger-1.md) | Required | The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold. |

## Example

```ts
import { CreateRecurringTopUp, ScheduleType1Enum, Status6Enum } from 'adyen';

const createRecurringTopUp: CreateRecurringTopUp = {
  counterparty: {
    transferInstrumentId: 'transferInstrumentId4',
  },
  description: 'description2',
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
  referenceForBeneficiary: 'referenceForBeneficiary8',
  status: Status6Enum.Active,
};
```

