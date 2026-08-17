
# Donation Campaigns Response

## Structure

`DonationCampaignsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `donationCampaigns` | [`DonationCampaign[] \| undefined`](../../doc/models/donation-campaign.md) | Optional | List of active donation campaigns for your merchant account. |

## Example

```ts
import { DonationCampaignsResponse } from 'adyen';

const donationCampaignsResponse: DonationCampaignsResponse = {
  donationCampaigns: [
    {
      amounts: {
        currency: 'currency6',
        values: [
          BigInt(48),
          BigInt(49)
        ],
      },
      bannerUrl: 'bannerUrl0',
      campaignName: 'campaignName2',
      causeName: 'causeName6',
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
    },
    {
      amounts: {
        currency: 'currency6',
        values: [
          BigInt(48),
          BigInt(49)
        ],
      },
      bannerUrl: 'bannerUrl0',
      campaignName: 'campaignName2',
      causeName: 'causeName6',
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
    }
  ],
};
```

