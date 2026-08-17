
# In Person Donation Settings Update

## Structure

`InPersonDonationSettingsUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultAmount` | [`InPersonDonationSettingsUpdateDefaultAmount \| null \| undefined`](../../doc/models/containers/in-person-donation-settings-update-default-amount.md) | Optional | This is a container for one-of cases. |
| `displayTextField` | [`DisplayTextField2Enum \| undefined`](../../doc/models/display-text-field-2-enum.md) | Optional | The text shown on the payment terminal, either the name or the cause of the nonprofit organization. |
| `donationFlow` | [`DonationFlow1Enum \| undefined`](../../doc/models/donation-flow-1-enum.md) | Optional | The interaction flow for in-person donations. Possible values:<br><br>- **oneStep**: The shopper presents their payment method for the payment and the donation in one go, after the donation.<br><br>- **twoStep**: The shopper presents their payment method twice: after the payment and after the donation. |
| `donationType` | [`InPersonDonationSettingsUpdateDonationType \| null \| undefined`](../../doc/models/containers/in-person-donation-settings-update-donation-type.md) | Optional | This is a container for one-of cases. |
| `merchantAccounts` | `string[] \| null \| undefined` | Optional | The merchant accounts for this sales channel that are associated with the donation campaign. |
| `presentCardTimeoutMs` | `bigint \| null \| undefined` | Optional | Required if `donationFlow` is set to **twoStep**. The time, in milliseconds, that the terminal waits for the shopper to present their card. Defaults to **10000** (10 seconds). Range: 5000 to 15000. |
| `promptTimeoutMs` | `bigint \| null \| undefined` | Optional | The time, in milliseconds, that the terminal waits for the shopper to make a selection on the donation screen. Defaults to **10000** (10 seconds). Range: 5000 to 15000. |
| `storeIds` | `string[] \| null \| undefined` | Optional | The Adyen-generated unique identifiers of stores for this sales channel that are associated with the donation campaign. |

## Example

```ts
import {
  DisplayTextField2Enum,
  DonationFlow1Enum,
  DonationTypeEnum,
  InPersonDonationSettingsUpdate,
} from 'adyen';

const inPersonDonationSettingsUpdate: InPersonDonationSettingsUpdate = {
  defaultAmount: {
    amounts: [
      BigInt(40)
    ],
    currencyCode: 'currencyCode2',
  },
  displayTextField: DisplayTextField2Enum.CauseName,
  donationFlow: DonationFlow1Enum.OneStep,
  donationType: DonationTypeEnum.FixedAmountsRoundup,
  merchantAccounts: [
    'merchantAccounts2'
  ],
};
```

