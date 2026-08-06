
# In Person Donation Settings 2

The settings for in-person donations collected as part of the campaign.

*This model accepts additional fields of type unknown.*

## Structure

`InPersonDonationSettings2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultAmount` | [`DonationAmount \| undefined`](../../doc/models/donation-amount.md) | Optional | - |
| `displayTextField` | [`DisplayTextField2`](../../doc/models/display-text-field-2.md) | Required | - |
| `donationFlow` | [`DonationFlow1`](../../doc/models/donation-flow-1.md) | Required | - |
| `donationType` | [`DonationType1 \| undefined`](../../doc/models/donation-type-1.md) | Optional | - |
| `merchantAccounts` | `string[] \| undefined` | Optional | The merchant accounts for this sales channel that are associated with the donation campaign. |
| `presentCardTimeoutMs` | `bigint \| undefined` | Optional | Required if `donationFlow` is set to **twoStep**. The time, in milliseconds, that the terminal waits for the shopper to present their card. Defaults to **10000** (10 seconds). Range: 5000 to 15000. |
| `promptTimeoutMs` | `bigint \| undefined` | Optional | The time, in milliseconds, that the terminal waits for the shopper to make a selection on the donation screen. Defaults to **10000** (10 seconds). Range: 5000 to 15000. |
| `storeIds` | `string[] \| undefined` | Optional | The Adyen-generated unique identifiers of stores for this sales channel that are associated with the donation campaign. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DisplayTextField2,
  DonationFlow1,
  DonationType1,
  InPersonDonationSettings2,
} from 'adyen';

const inPersonDonationSettings2: InPersonDonationSettings2 = {
  displayTextField: DisplayTextField2.CauseName,
  donationFlow: DonationFlow1.OneStep,
  defaultAmount: {
    amounts: [
      BigInt(78),
      BigInt(79),
      BigInt(80)
    ],
    currencyCode: 'currencyCode6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  donationType: DonationType1.Roundup,
  merchantAccounts: [
    'merchantAccounts2'
  ],
  presentCardTimeoutMs: BigInt(68),
  promptTimeoutMs: BigInt(32),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

