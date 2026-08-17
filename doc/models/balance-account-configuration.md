
# Balance Account Configuration

## Structure

`BalanceAccountConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Required | The unique identifier of the balance account to which you apply the payout schedule. |
| `balancePlatformPayoutScheduleId` | `string` | Required | The unique identifier of the balance platform payout schedule that is applied to the balance account. |
| `createdAt` | `string` | Required | The date and time when the payout schedule was created. |
| `currency` | `string \| undefined` | Optional | The three-character [ISO code](https://docs.adyen.com/development-resources/currency-codes) of the currency used for this schedule. |
| `description` | `string \| undefined` | Optional | The description used for all payouts initiated by this payout schedule.<br><br>Maximum length: 140 characters. If your description is longer, it may be truncated.<br><br>Default value: The `defaultDescription` from the balance platform schedule that you are applying. |
| `enabled` | `boolean \| undefined` | Optional | Specifies whether the payout schedule is active. |
| `frequency` | `string \| undefined` | Optional | The frequency of payouts initiated by this payout schedule.<br><br>Possible values:<br><br>* daily<br>* weekdays<br>* weekly<br>* monthly<br><br>Default value: The `defaultFrequency` from the balance platform schedule that you are applying. |
| `frequencyValue` | `number \| undefined` | Optional | The date of the month or day of the week when payouts are initiated. Allowed only if `frequency` is **monthly** or **weekly**.<br><br>Possible values if `frequency` is **monthly**: **[1 - 31]**.<br><br>* If your specified date happens on a weekend, the payout is initiated on the next business day.<br>* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated  on the last day of that month.<br><br>Possible values if `frequency` is **weekly**: **[1 - 5]**.<br><br>Default value: The `defaultFrequencyValue` from the balance platform schedule that you are applying. |
| `id` | `string \| undefined` | Optional | The unique identifier of the payout schedule for the balance account. |
| `maxPayoutAmount` | `bigint \| undefined` | Optional | The maximum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0** |
| `minPayoutAmount` | `bigint \| undefined` | Optional | The minimum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0** |
| `reference` | `string \| undefined` | Optional | Your reference for the payout schedule. This reference does not appear on statements of payouts initiated by the payout schedule. |
| `referenceForBeneficiary` | `string \| undefined` | Optional | The reference for beneficiary used for all payouts initiated by this payout schedule. This reference is sent to the recipient of the payout and is included in all webhooks related to the payout.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**.<br><br>Default value: The `defaultReferenceForBeneficiary` from the balance platform schedule that you are applying. |
| `retainedAmount` | `bigint \| undefined` | Optional | The amount of funds that must remain available in the balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.<br><br>Default value: **0** |
| `salesDayClosingTime` | `string \| undefined` | Optional | The time of day when the sales day is closed in balance account time zone. The sales day closing time can be between 00:00 to 07:00.<br><br>Format: **HH:mm:ss** |
| `transferInstrumentId` | `string` | Required | The unique identifier of the transfer instrument to which the funds are paid out. |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the payout schedule was updated. |

## Example

```ts
import { BalanceAccountConfiguration } from 'adyen';

const balanceAccountConfiguration: BalanceAccountConfiguration = {
  balanceAccountId: 'balanceAccountId0',
  balancePlatformPayoutScheduleId: 'balancePlatformPayoutScheduleId8',
  createdAt: '2016-03-13T12:52:32.123Z',
  transferInstrumentId: 'transferInstrumentId6',
  currency: 'currency8',
  description: 'description8',
  enabled: false,
  frequency: 'frequency4',
  frequencyValue: 220,
};
```

