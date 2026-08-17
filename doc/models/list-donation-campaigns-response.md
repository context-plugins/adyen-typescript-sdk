
# List Donation Campaigns Response

## Structure

`ListDonationCampaignsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks1 \| undefined`](../../doc/models/pagination-links-1.md) | Optional | Pagination references. |
| `campaigns` | [`DonationCampaign1[] \| undefined`](../../doc/models/donation-campaign-1.md) | Optional | The list of donation campaigns. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |

## Example

```ts
import {
  DisplayTextField1Enum,
  DonationCampaignStatus2Enum,
  DonationFlow4Enum,
  DonationType1Enum,
  ListDonationCampaignsResponse,
} from 'adyen';

const listDonationCampaignsResponse: ListDonationCampaignsResponse = {
  itemsTotal: 66,
  pagesTotal: 28,
  links: {
    first: {
      href: 'href2',
    },
    last: {
      href: 'href2',
    },
    self: {
      href: 'href0',
    },
    next: {
      href: 'href4',
    },
    prev: {
      href: 'href8',
    },
  },
  campaigns: [
    {
      id: '',
      name: 'name6',
      nonprofitCause: {
        bannerUrl: 'bannerUrl4',
        causeId: 'causeId0',
        description: 'description4',
        globalWebsiteUrl: 'globalWebsiteUrl6',
        goals: [
          'goals9'
        ],
      },
      status: DonationCampaignStatus2Enum.Active,
      accountHolderIds: [
        'accountHolderIds1',
        'accountHolderIds2',
        'accountHolderIds3'
      ],
      inPerson: {
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
      },
      online: {
        amounts: [
          {
            amounts: [
              BigInt(48),
              BigInt(49),
              BigInt(50)
            ],
            currencyCode: 'currencyCode6',
          },
          {
            amounts: [
              BigInt(48),
              BigInt(49),
              BigInt(50)
            ],
            currencyCode: 'currencyCode6',
          },
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
        donationType: DonationType1Enum.FixedAmounts,
        merchantAccounts: [
          'merchantAccounts4',
          'merchantAccounts3',
          'merchantAccounts2'
        ],
        storeIds: [
          'storeIds9',
          'storeIds0',
          'storeIds1'
        ],
      },
    },
    {
      id: '',
      name: 'name6',
      nonprofitCause: {
        bannerUrl: 'bannerUrl4',
        causeId: 'causeId0',
        description: 'description4',
        globalWebsiteUrl: 'globalWebsiteUrl6',
        goals: [
          'goals9'
        ],
      },
      status: DonationCampaignStatus2Enum.Active,
      accountHolderIds: [
        'accountHolderIds1',
        'accountHolderIds2',
        'accountHolderIds3'
      ],
      inPerson: {
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
      },
      online: {
        amounts: [
          {
            amounts: [
              BigInt(48),
              BigInt(49),
              BigInt(50)
            ],
            currencyCode: 'currencyCode6',
          },
          {
            amounts: [
              BigInt(48),
              BigInt(49),
              BigInt(50)
            ],
            currencyCode: 'currencyCode6',
          },
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
        donationType: DonationType1Enum.FixedAmounts,
        merchantAccounts: [
          'merchantAccounts4',
          'merchantAccounts3',
          'merchantAccounts2'
        ],
        storeIds: [
          'storeIds9',
          'storeIds0',
          'storeIds1'
        ],
      },
    },
    {
      id: '',
      name: 'name6',
      nonprofitCause: {
        bannerUrl: 'bannerUrl4',
        causeId: 'causeId0',
        description: 'description4',
        globalWebsiteUrl: 'globalWebsiteUrl6',
        goals: [
          'goals9'
        ],
      },
      status: DonationCampaignStatus2Enum.Active,
      accountHolderIds: [
        'accountHolderIds1',
        'accountHolderIds2',
        'accountHolderIds3'
      ],
      inPerson: {
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
      },
      online: {
        amounts: [
          {
            amounts: [
              BigInt(48),
              BigInt(49),
              BigInt(50)
            ],
            currencyCode: 'currencyCode6',
          },
          {
            amounts: [
              BigInt(48),
              BigInt(49),
              BigInt(50)
            ],
            currencyCode: 'currencyCode6',
          },
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
        donationType: DonationType1Enum.FixedAmounts,
        merchantAccounts: [
          'merchantAccounts4',
          'merchantAccounts3',
          'merchantAccounts2'
        ],
        storeIds: [
          'storeIds9',
          'storeIds0',
          'storeIds1'
        ],
      },
    }
  ],
};
```

