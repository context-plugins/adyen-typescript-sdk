
# In Person Donation Settings 2

The settings for in-person donations collected as part of the campaign.

## Structure

`InPersonDonationSettings2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultAmount` | [`DonationAmount1 \| undefined`](../../doc/models/donation-amount-1.md) | Optional | The default amount for donations. |
| `displayTextField` | [`DisplayTextField2Enum`](../../doc/models/display-text-field-2-enum.md) | Required | The text shown on the payment terminal, either the name or the cause of the nonprofit organization. |
| `donationFlow` | [`DonationFlow1Enum`](../../doc/models/donation-flow-1-enum.md) | Required | The interaction flow for in-person donations. Possible values:<br><br>- **oneStep**: The shopper presents their payment method for the payment and the donation in one go, after the donation.<br><br>- **twoStep**: The shopper presents their payment method twice: after the payment and after the donation. |
| `donationType` | [`DonationType1Enum \| undefined`](../../doc/models/donation-type-1-enum.md) | Optional | The type of donation to collect from the shopper. Possible values:<br><br>- **roundup**: Round up the transaction amount.<br><br>- **fixedAmounts**: Choose a fixed amount.<br><br>- **fixedAmountsRoundup**: Round up, or choose a fixed amount. |
| `merchantAccounts` | `string[] \| undefined` | Optional | The merchant accounts for this sales channel that are associated with the donation campaign. |
| `presentCardTimeoutMs` | `bigint \| undefined` | Optional | Required if `donationFlow` is set to **twoStep**. The time, in milliseconds, that the terminal waits for the shopper to present their card. Defaults to **10000** (10 seconds). Range: 5000 to 15000. |
| `promptTimeoutMs` | `bigint \| undefined` | Optional | The time, in milliseconds, that the terminal waits for the shopper to make a selection on the donation screen. Defaults to **10000** (10 seconds). Range: 5000 to 15000. |
| `storeIds` | `string[] \| undefined` | Optional | The Adyen-generated unique identifiers of stores for this sales channel that are associated with the donation campaign. |

## Example

```ts
import {
  DisplayTextField2Enum,
  DonationFlow1Enum,
  DonationType1Enum,
  InPersonDonationSettings2,
} from 'adyen';

const inPersonDonationSettings2: InPersonDonationSettings2 = {
  displayTextField: DisplayTextField2Enum.CauseName,
  donationFlow: DonationFlow1Enum.OneStep,
  defaultAmount: {
    amounts: [
      BigInt(78),
      BigInt(79),
      BigInt(80)
    ],
    currencyCode: 'currencyCode6',
  },
  donationType: DonationType1Enum.Roundup,
  merchantAccounts: [
    'merchantAccounts2'
  ],
  presentCardTimeoutMs: BigInt(68),
  promptTimeoutMs: BigInt(32),
};
```

