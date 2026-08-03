
# Sweep Configuration V2

*This model accepts additional fields of type unknown.*

## Structure

`SweepConfigurationV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `category` | [`Category \| undefined`](../../doc/models/category.md) | Optional | - |
| `counterparty` | [`SweepCounterparty`](../../doc/models/sweep-counterparty.md) | Required | - |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.<br><br>The sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances). |
| `description` | `string \| undefined` | Optional | The message that will be used in the sweep transfer's description body with a maximum length of 140 characters.<br><br>If the message is longer after replacing placeholders, the message will be cut off at 140 characters. |
| `id` | `string` | Required, Read-only | The unique identifier of the sweep. |
| `priorities` | [`Priority[] \| undefined`](../../doc/models/priority.md) | Optional | The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities, ordered by your preference. Adyen will try to pay out using the priorities in the given order. If the first priority is not currently supported or enabled for your platform, the system will try the next one, and so on.<br><br>The request will be accepted as long as **at least one** of the provided priorities is valid (i.e., supported by Adyen and activated for your platform). For example, if you provide `["wire","regular"]`, and `wire` is not supported but `regular` is, the request will still be accepted and processed.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).<br><br>Set `category` to **bank**. For more details, see optional priorities setup for [marketplaces](https://docs.adyen.com/marketplaces/payout-to-users/scheduled-payouts#optional-priorities-setup) or [platforms](https://docs.adyen.com/platforms/payout-to-users/scheduled-payouts#optional-priorities-setup). |
| `reason` | [`Reason \| undefined`](../../doc/models/reason.md) | Optional, Read-only | - |
| `reasonDetail` | `string \| undefined` | Optional, Read-only | The human readable reason for disabling the sweep. |
| `reference` | `string \| undefined` | Optional | Your reference for the sweep configuration.<br><br>**Constraints**: *Maximum Length*: `80` |
| `referenceForBeneficiary` | `string \| undefined` | Optional | The reference sent to or received from the counterparty. Only alphanumeric characters are allowed.<br><br>**Constraints**: *Maximum Length*: `80` |
| `schedule` | [`SweepSchedule`](../../doc/models/sweep-schedule.md) | Required | - |
| `status` | [`Status51 \| undefined`](../../doc/models/status-51.md) | Optional | - |
| `sweepAmount` | [`SweepAmount \| undefined`](../../doc/models/sweep-amount.md) | Optional | - |
| `targetAmount` | [`TargetAmount \| undefined`](../../doc/models/target-amount.md) | Optional | - |
| `triggerAmount` | [`TriggerAmount \| undefined`](../../doc/models/trigger-amount.md) | Optional | - |
| `type` | [`Type7 \| undefined`](../../doc/models/type-7.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  Category,
  Priority,
  Reason,
  SweepConfigurationV2,
  Type6,
} from 'adyenlib';

const sweepConfigurationV2: SweepConfigurationV2 = {
  counterparty: {
    balanceAccountId: 'balanceAccountId0',
    merchantAccount: 'merchantAccount0',
    transferInstrumentId: 'transferInstrumentId4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  currency: 'currency2',
  id: 'id8',
  schedule: {
    type: Type6.Weekly,
    cronExpression: 'cronExpression4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  category: Category.Internal,
  description: 'description2',
  priorities: [
    Priority.Regular,
    Priority.Wire,
    Priority.CrossBorder
  ],
  reason: Reason.Approved,
  reasonDetail: 'reasonDetail4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

