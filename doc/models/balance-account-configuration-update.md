
# Balance Account Configuration Update

*This model accepts additional fields of type unknown.*

## Structure

`BalanceAccountConfigurationUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| null \| undefined` | Optional | The description used for all payouts initiated by this payout schedule.<br><br>Maximum length: 140 characters. If your description is longer, it may be truncated.<br><br>Default value: The `defaultDescription` from the balance platform schedule that you are applying. |
| `enabled` | `boolean \| null \| undefined` | Optional | Specifies whether the payout schedule is enabled immediately after it is created. |
| `frequency` | [`Frequency \| undefined`](../../doc/models/frequency.md) | Optional | - |
| `frequencyValue` | `number \| null \| undefined` | Optional | The date of the month or day of the week when payouts are initiated. Allowed only if `frequency` is **monthly** or **weekly**.<br><br>Possible values if `frequency` is **monthly**: **[1 - 31]**.<br><br>* If your specified date happens on a weekend, the payout is initiated on the next business day.<br>* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated on the last day of that month.<br><br>Possible values if `frequency` is **weekly**: **[1 - 5]**.<br><br>Default value: The `defaultFrequencyValue` from the balance platform schedule that you are applying. |
| `maxPayoutAmount` | `bigint \| null \| undefined` | Optional | The maximum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0** |
| `minPayoutAmount` | `bigint \| null \| undefined` | Optional | The minimum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0** |
| `reference` | `string \| null \| undefined` | Optional | The merchant reference that will be shown only in the schedule. |
| `referenceForBeneficiary` | `string \| null \| undefined` | Optional | The reference for beneficiary used for all payouts initiated by this payout schedule. This reference is sent to the recipient of the transfer and is included in all webhooks related to the payout.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**, **-** and space. Spaces might be replaced with **-** if the recipient bank or payment infrastructure does not allow spaces.<br><br>Default value: The `defaultReferenceForBeneficiary` from the balance platform schedule that you are applying. |
| `retainedAmount` | `bigint \| null \| undefined` | Optional | The amount of funds that must remain available in the balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.<br><br>Default value: **0** |
| `salesDayClosingTime` | `string \| undefined` | Optional | The time of day when the sales day is closed in balance account time zone. The sales day closing time can be between 00:00 to 07:00.<br><br>Format: **HH:mm:ss** |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of the transfer instrument to which the funds are paid out. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BalanceAccountConfigurationUpdate, Frequency } from 'adyenlib';

const balanceAccountConfigurationUpdate: BalanceAccountConfigurationUpdate = {
  description: 'description2',
  enabled: false,
  frequency: Frequency.Weekdays,
  frequencyValue: 170,
  maxPayoutAmount: BigInt(114),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

