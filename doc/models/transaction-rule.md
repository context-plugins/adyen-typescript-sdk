
# Transaction Rule

## Structure

`TransactionRule`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aggregationLevel` | `string \| undefined` | Optional | The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.<br><br>If not provided, by default, the rule will accumulate data at the **paymentInstrument** level.<br><br>Possible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**. |
| `description` | `string` | Required | Your description for the transaction rule.<br><br>**Constraints**: *Maximum Length*: `300` |
| `endDate` | `string \| undefined` | Optional | The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.<br><br>If not provided, the rule will be evaluated until the rule status is set to **inactive**. |
| `entityKey` | [`TransactionRuleEntityKey2`](../../doc/models/transaction-rule-entity-key-2.md) | Required | The type and unique identifier of the resource to which the rule applies. |
| `id` | `string \| undefined` | Optional | The unique identifier of the transaction rule. |
| `interval` | [`TransactionRuleInterval1`](../../doc/models/transaction-rule-interval-1.md) | Required | The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the rule conditions apply. |
| `outcomeType` | [`OutcomeTypeEnum \| undefined`](../../doc/models/outcome-type-enum.md) | Optional | The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied when a transaction meets the conditions of the rule.<br><br>Possible values:<br><br>* **hardBlock** (default): the transaction is declined.<br><br>* **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the total score and if it exceeds 100, the transaction is declined. This value is not allowed when `requestType` is **bankTransfer**.<br><br>* **enforceSCA**: your user is prompted to verify their identity using [3D Secure authentication](https://docs.adyen.com/issuing/3d-secure/). If the authentication fails or times out, the transaction is declined. This value is only allowed when `requestType` is **authentication**. |
| `overridesRule` | `string \| undefined` | Optional | The `id` of the transaction rule you want to override or skip for the specified `entityKey`. |
| `purpose` | [`PurposeEnum \| undefined`](../../doc/models/purpose-enum.md) | Optional | Specifies the reason for creating the rule.<br><br>Possible values:<br><br>* **fraud**: the rule is created to regulate fraudulent activity.<br>* **policy**: the rule is created to ensure that the transaction adheres to your business' policies. For example, if your business has policies about the Merchant Category Codes (MCCs) allowed on a transaction, you can create a rule to block transactions that have specific MCCs. |
| `reference` | `string` | Required | Your reference for the transaction rule.<br><br>**Constraints**: *Maximum Length*: `150` |
| `requestType` | [`RequestTypeEnum \| undefined`](../../doc/models/request-type-enum.md) | Optional | Indicates the type of request to which the rule applies. If not provided, by default, this is set to **authorization**.<br><br>Possible values: **authorization**, **authentication**, **tokenization**, **bankTransfer**. |
| `ruleRestrictions` | [`TransactionRuleRestrictions1`](../../doc/models/transaction-rule-restrictions-1.md) | Required | Contains one or more objects that define the [rule conditions](https://docs.adyen.com/issuing/transaction-rules#conditions). Each object must have a value and an operation which determines how the values must be evaluated.<br><br>For example, a `countries` object can have a list of country codes **["US", "CA"]** in the `value` field and **anyMatch** in the `operation` field. |
| `score` | `number \| undefined` | Optional | A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**. |
| `startDate` | `string \| undefined` | Optional | The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.<br><br>If not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**. |
| `status` | [`Status6Enum \| undefined`](../../doc/models/status-6-enum.md) | Optional | The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created<br>with an **active** status.<br><br>Possible values: **active**, **inactive**. |
| `type` | [`Type141Enum`](../../doc/models/type-141-enum.md) | Required | The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines if a rule blocks transactions based on individual characteristics or accumulates data.<br><br>Possible values:<br><br>* **blockList**: decline a transaction when the conditions are met.<br>* **maxUsage**: add the amount or number of transactions for the lifetime of a payment instrument, and then decline a transaction when the specified limits are met.<br>* **velocity**: add the amount or number of transactions based on a specified time interval, and then decline a transaction when the specified limits are met.<br>* **bypass**: bypass or skip a rule for the specified `entityKey`. Transactions processed to that entity are no longer evaluated by the bypassed rule.  You must provide the `id` of the rule to bypass in `overridesRule` and leave the `ruleRestrictions` object empty. |

## Example

```ts
import {
  DayOfWeekEnum,
  IdentificationTypeEnum,
  OutcomeTypeEnum,
  TransactionRule,
  Type131Enum,
  Type141Enum,
  UnitEnum,
  ValueEnum,
} from 'adyen';

const transactionRule: TransactionRule = {
  description: 'description2',
  entityKey: {
    entityReference: 'entityReference2',
    entityType: 'entityType0',
  },
  interval: {
    type: Type131Enum.Monthly,
    dayOfMonth: 178,
    dayOfWeek: DayOfWeekEnum.Saturday,
    duration: {
      unit: UnitEnum.Weeks,
      value: 176,
    },
    timeOfDay: 'timeOfDay2',
    timeZone: 'timeZone4',
  },
  reference: 'reference2',
  ruleRestrictions: {
    activeNetworkTokens: {
      operation: 'operation0',
      value: 202,
    },
    brandVariants: {
      operation: 'operation4',
      value: [
        'value8',
        'value9'
      ],
    },
    counterpartyBank: {
      operation: 'operation2',
      value: [
        {
          country: 'country6',
          identification: 'identification0',
          identificationType: IdentificationTypeEnum.Bic,
        },
        {
          country: 'country6',
          identification: 'identification0',
          identificationType: IdentificationTypeEnum.Bic,
        }
      ],
    },
    counterpartyTypes: {
      operation: 'operation8',
      value: [
        ValueEnum.BalanceAccount
      ],
    },
    countries: {
      operation: 'operation0',
      value: [
        'value4'
      ],
    },
  },
  type: Type141Enum.MaxUsage,
  aggregationLevel: 'aggregationLevel4',
  endDate: 'endDate4',
  id: 'id2',
  outcomeType: OutcomeTypeEnum.EnforceSCA,
  overridesRule: 'overridesRule8',
};
```

