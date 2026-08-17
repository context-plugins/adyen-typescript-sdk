
# Donation Campaign

## Structure

`DonationCampaign`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amounts` | [`Amounts1 \| undefined`](../../doc/models/amounts-1.md) | Optional | The object that contains the fixed donation amounts that the shopper can select from. |
| `bannerUrl` | `string \| undefined` | Optional | The URL for the banner of the nonprofit or campaign. |
| `campaignName` | `string \| undefined` | Optional | The name of the donation campaign.. |
| `causeName` | `string \| undefined` | Optional | The cause of the nonprofit. |
| `donation` | [`Donation1 \| undefined`](../../doc/models/donation-1.md) | Optional | The object that contains the details of the donation. |
| `id` | `string \| undefined` | Optional | The unique campaign ID of the donation campaign. |
| `logoUrl` | `string \| undefined` | Optional | The URL for the logo of the nonprofit. |
| `nonprofitDescription` | `string \| undefined` | Optional | The description of the nonprofit. |
| `nonprofitName` | `string \| undefined` | Optional | The name of the nonprofit organization that receives the donation. |
| `nonprofitUrl` | `string \| undefined` | Optional | The website URL of the nonprofit. |
| `termsAndConditionsUrl` | `string \| undefined` | Optional | The URL of the terms and conditions page of the nonprofit and the campaign. |

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
  },
};
```

