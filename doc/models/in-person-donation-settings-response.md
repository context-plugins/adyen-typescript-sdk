
# In Person Donation Settings Response

## Structure

`InPersonDonationSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amounts` | [`DonationAmount[] \| undefined`](../../doc/models/donation-amount.md) | Optional | The currency and fixed amounts for donations. We automatically add calculated amounts in other currencies for participating stores that use a different currency than the default. |
| `defaultCurrency` | `string \| undefined` | Optional | The currency that was used in the request to set fixed donation amounts. Format: three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes). |
| `displayTextField` | [`DisplayTextField1Enum \| undefined`](../../doc/models/display-text-field-1-enum.md) | Optional | The text shown on the payment terminal, asking the shopper for a donation. |
| `donationFlow` | [`DonationFlow4Enum \| undefined`](../../doc/models/donation-flow-4-enum.md) | Optional | The interaction flow for in-person donations: complete payment for the purchase and the donation in one go, or separately. |
| `donationType` | [`DonationType1Enum \| undefined`](../../doc/models/donation-type-1-enum.md) | Optional | The type of donation to collect from the shopper. Possible values:<br><br>- **roundup**: Round up the transaction amount.<br><br>- **fixedAmounts**: Choose a fixed amount.<br><br>- **fixedAmountsRoundup**: Round up, or choose a fixed amount. |
| `merchantAccounts` | `string[] \| undefined` | Optional | The merchant accounts for this sales channel that are associated with the donation campaign. |
| `presentCardTimeoutMs` | `bigint \| undefined` | Optional | The time, in milliseconds, that the terminal waits for the shopper to present their card. |
| `promptTimeoutMs` | `bigint \| undefined` | Optional | The time, in milliseconds, that the terminal waits for the shopper to respond to the text asking for a donation. |
| `storeIds` | `string[] \| undefined` | Optional | The Adyen-generated unique identifiers of stores for this sales channel that are associated with the donation campaign. |

## Example

```ts
import {
  DisplayTextField1Enum,
  DonationFlow4Enum,
  DonationType1Enum,
  InPersonDonationSettingsResponse,
} from 'adyen';

const inPersonDonationSettingsResponse: InPersonDonationSettingsResponse = {
  amounts: [
    {
      amounts: [
        BigInt(48),
        BigInt(49),
        BigInt(50)
      ],
      currencyCode: 'currencyCode6',
    }
  ],
  defaultCurrency: 'defaultCurrency0',
  displayTextField: DisplayTextField1Enum.CauseName,
  donationFlow: DonationFlow4Enum.OneStep,
  donationType: DonationType1Enum.FixedAmountsRoundup,
};
```

