
# In Person Donation Settings Update

*This model accepts additional fields of type unknown.*

## Structure

`InPersonDonationSettingsUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultAmount` | [`InPersonDonationSettingsUpdateDefaultAmount \| undefined`](../../doc/models/containers/in-person-donation-settings-update-default-amount.md) | Optional | This is a container for one-of cases. |
| `displayTextField` | [`DisplayTextField2 \| undefined`](../../doc/models/display-text-field-2.md) | Optional | - |
| `donationFlow` | [`DonationFlow1 \| undefined`](../../doc/models/donation-flow-1.md) | Optional | - |
| `donationType` | [`InPersonDonationSettingsUpdateDonationType \| undefined`](../../doc/models/containers/in-person-donation-settings-update-donation-type.md) | Optional | This is a container for one-of cases. |
| `merchantAccounts` | `string[] \| null \| undefined` | Optional | The merchant accounts for this sales channel that are associated with the donation campaign. |
| `presentCardTimeoutMs` | `bigint \| null \| undefined` | Optional | Required if `donationFlow` is set to **twoStep**. The time, in milliseconds, that the terminal waits for the shopper to present their card. Defaults to **10000** (10 seconds). Range: 5000 to 15000. |
| `promptTimeoutMs` | `bigint \| null \| undefined` | Optional | The time, in milliseconds, that the terminal waits for the shopper to make a selection on the donation screen. Defaults to **10000** (10 seconds). Range: 5000 to 15000. |
| `storeIds` | `string[] \| null \| undefined` | Optional | The Adyen-generated unique identifiers of stores for this sales channel that are associated with the donation campaign. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DisplayTextField2,
  DonationFlow1,
  DonationType,
  InPersonDonationSettingsUpdate,
} from 'adyenlib';

const inPersonDonationSettingsUpdate: InPersonDonationSettingsUpdate = {
  defaultAmount: {
    amounts: [
      BigInt(40)
    ],
    currencyCode: 'currencyCode2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  displayTextField: DisplayTextField2.CauseName,
  donationFlow: DonationFlow1.OneStep,
  donationType: DonationType.FixedAmountsRoundup,
  merchantAccounts: [
    'merchantAccounts2'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

