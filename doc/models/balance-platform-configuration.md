
# Balance Platform Configuration

*This model accepts additional fields of type unknown.*

## Structure

`BalancePlatformConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `automaticApplication` | `boolean \| undefined` | Optional | Specifies whether this payout schedule is automatically applied to new balance accounts. |
| `balancePlatformId` | `string` | Required | The balance platform to which the payout schedule applies. |
| `countryCode` | `string \| undefined` | Optional | The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country to which the payout schedule applies. |
| `createdAt` | `string` | Required | The date when the payout schedule was created. |
| `currency` | `string \| undefined` | Optional | The three-character [ISO code](https://docs.adyen.com/development-resources/currency-codes) of the currency used for the payout schedule. |
| `defaultDescription` | `string \| undefined` | Optional | The default description for payouts initiated by this payout schedule. |
| `defaultFrequency` | `string \| undefined` | Optional | The default frequency of payouts initiated by this payout schedule. |
| `defaultFrequencyValue` | `number \| undefined` | Optional | The default value for date of the month or day of the week when payouts are initiated. Allowed only if `defaultFrequency` is **monthly** or **weekly**.<br><br>Possible values if `defaultFrequency` is **monthly**: **[1 - 31]**.<br><br>* If your specified date happens on a weekend, the payout is initiated on the next business day.<br>* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated  on the last day of that month.<br><br>Possible values if `defaultFrequency` is **weekly**: **[1 - 5]**. |
| `defaultReference` | `string \| undefined` | Optional | Your internal default reference for the payout schedule.When the payout schedule is applied to a balance account, this reference is also used for that payout schedule. |
| `defaultReferenceForBeneficiary` | `string \| undefined` | Optional | The default reference for beneficiary for payouts initiated by this payout schedule. |
| `enabled` | `boolean \| undefined` | Optional | Specifies whether the payout schedule is enabled immediately after it is created. |
| `id` | `string \| undefined` | Optional | The unique identifier of the payout schedule for your balance platform. |
| `maxPayoutAmount` | `bigint \| undefined` | Optional | The maximum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0**, which means that there is no maximum limit. |
| `minPayoutAmount` | `bigint \| undefined` | Optional | The minimum amount that can be paid out from balance accounts that use this payout schedule.<br><br>Default value: **0**. |
| `payoutScheduleDescription` | `string` | Required | The type of payout schedule. This type indicates how fast funds are paid out to your user.<br><br>Possible values:<br><br>- **Standard**: The funds arrive in your user's transfer instrument two days after the funds are settled.<br>- **Accelerated**: The funds arrive to your user's transfer instrument the day after the funds are settled. |
| `retainedAmount` | `bigint \| undefined` | Optional | The amount of funds that must remain available in a balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.<br><br>Default value: **0** |
| `updatedAt` | `string \| undefined` | Optional | The date when the payout schedule was updated. |
| `userSettlementDelay` | `number` | Required | The default [settlement delay](https://docs.adyen.com/platforms/settle-funds/#settlement-delay) for this payout schedule. |
| `userSettlementTime` | [`LocalTime`](../../doc/models/local-time.md) | Required | - |
| `userSettlementTimeZone` | `string` | Required | The timezone of the `userSettlementTime`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BalancePlatformConfiguration } from 'adyen';

const balancePlatformConfiguration: BalancePlatformConfiguration = {
  balancePlatformId: 'balancePlatformId2',
  createdAt: '2016-03-13T12:52:32.123Z',
  payoutScheduleDescription: 'payoutScheduleDescription6',
  userSettlementDelay: 104,
  userSettlementTime: {
    hour: 136,
    minute: 138,
    nano: 162,
    second: 200,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  userSettlementTimeZone: 'userSettlementTimeZone6',
  automaticApplication: false,
  countryCode: 'countryCode0',
  currency: 'currency4',
  defaultDescription: 'defaultDescription8',
  defaultFrequency: 'defaultFrequency8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

