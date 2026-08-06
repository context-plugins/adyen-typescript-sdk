
# Donation Campaign

*This model accepts additional fields of type unknown.*

## Structure

`DonationCampaign`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amounts` | [`Amounts \| undefined`](../../doc/models/amounts.md) | Optional | - |
| `bannerUrl` | `string \| undefined` | Optional | The URL for the banner of the nonprofit or campaign. |
| `campaignName` | `string \| undefined` | Optional | The name of the donation campaign.. |
| `causeName` | `string \| undefined` | Optional | The cause of the nonprofit. |
| `donation` | [`Donation \| undefined`](../../doc/models/donation.md) | Optional | - |
| `id` | `string \| undefined` | Optional | The unique campaign ID of the donation campaign. |
| `logoUrl` | `string \| undefined` | Optional | The URL for the logo of the nonprofit. |
| `nonprofitDescription` | `string \| undefined` | Optional | The description of the nonprofit. |
| `nonprofitName` | `string \| undefined` | Optional | The name of the nonprofit organization that receives the donation. |
| `nonprofitUrl` | `string \| undefined` | Optional | The website URL of the nonprofit. |
| `termsAndConditionsUrl` | `string \| undefined` | Optional | The URL of the terms and conditions page of the nonprofit and the campaign. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DonationCampaign } from 'adyen';

const donationCampaign: DonationCampaign = {
  amounts: {
    currency: 'currency6',
    values: [
      BigInt(48),
      BigInt(49)
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  bannerUrl: 'bannerUrl8',
  campaignName: 'campaignName0',
  causeName: 'causeName4',
  donation: {
    currency: 'currency0',
    type: 'type0',
    donationType: 'donationType2',
    maxRoundupAmount: BigInt(114),
    values: [
      BigInt(106),
      BigInt(105),
      BigInt(104)
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

