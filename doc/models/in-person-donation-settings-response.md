
# In Person Donation Settings Response

*This model accepts additional fields of type unknown.*

## Structure

`InPersonDonationSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amounts` | [`DonationAmount[] \| undefined`](../../doc/models/donation-amount.md) | Optional | The currency and fixed amounts for donations. We automatically add calculated amounts in other currencies for participating stores that use a different currency than the default. |
| `defaultCurrency` | `string \| undefined` | Optional | The currency that was used in the request to set fixed donation amounts. Format: three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes). |
| `displayTextField` | [`DisplayTextField1 \| undefined`](../../doc/models/display-text-field-1.md) | Optional | - |
| `donationFlow` | [`DonationFlow4 \| undefined`](../../doc/models/donation-flow-4.md) | Optional | - |
| `donationType` | [`DonationType1 \| undefined`](../../doc/models/donation-type-1.md) | Optional | - |
| `merchantAccounts` | `string[] \| undefined` | Optional | The merchant accounts for this sales channel that are associated with the donation campaign. |
| `presentCardTimeoutMs` | `bigint \| undefined` | Optional | The time, in milliseconds, that the terminal waits for the shopper to present their card. |
| `promptTimeoutMs` | `bigint \| undefined` | Optional | The time, in milliseconds, that the terminal waits for the shopper to respond to the text asking for a donation. |
| `storeIds` | `string[] \| undefined` | Optional | The Adyen-generated unique identifiers of stores for this sales channel that are associated with the donation campaign. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DisplayTextField1,
  DonationFlow4,
  DonationType1,
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
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  defaultCurrency: 'defaultCurrency0',
  displayTextField: DisplayTextField1.CauseName,
  donationFlow: DonationFlow4.OneStep,
  donationType: DonationType1.FixedAmountsRoundup,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

