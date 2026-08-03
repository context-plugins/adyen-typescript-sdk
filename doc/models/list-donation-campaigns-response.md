
# List Donation Campaigns Response

*This model accepts additional fields of type unknown.*

## Structure

`ListDonationCampaignsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks \| undefined`](../../doc/models/pagination-links.md) | Optional | - |
| `campaigns` | [`DonationCampaign1[] \| undefined`](../../doc/models/donation-campaign-1.md) | Optional | The list of donation campaigns. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DisplayTextField1,
  DonationCampaignStatus2,
  DonationFlow4,
  DonationType1,
  ListDonationCampaignsResponse,
} from 'adyenlib';

const listDonationCampaignsResponse: ListDonationCampaignsResponse = {
  itemsTotal: 66,
  pagesTotal: 28,
  links: {
    first: {
      href: 'href2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    last: {
      href: 'href2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    self: {
      href: 'href0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    next: {
      href: 'href4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    prev: {
      href: 'href8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  campaigns: [
    {
      id: 'id6',
      name: 'name6',
      nonprofitCause: {
        bannerUrl: 'bannerUrl4',
        causeId: 'causeId0',
        description: 'description4',
        globalWebsiteUrl: 'globalWebsiteUrl6',
        goals: [
          'goals9'
        ],
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      status: DonationCampaignStatus2.Active,
      accountHolderIds: [
        'accountHolderIds1',
        'accountHolderIds2',
        'accountHolderIds3'
      ],
      activatedAt: '2016-03-13T12:52:32.123Z',
      endedAt: '2016-03-13T12:52:32.123Z',
      inPerson: {
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
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
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
          },
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
        donationType: DonationType1.FixedAmounts,
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
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 'id6',
      name: 'name6',
      nonprofitCause: {
        bannerUrl: 'bannerUrl4',
        causeId: 'causeId0',
        description: 'description4',
        globalWebsiteUrl: 'globalWebsiteUrl6',
        goals: [
          'goals9'
        ],
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      status: DonationCampaignStatus2.Active,
      accountHolderIds: [
        'accountHolderIds1',
        'accountHolderIds2',
        'accountHolderIds3'
      ],
      activatedAt: '2016-03-13T12:52:32.123Z',
      endedAt: '2016-03-13T12:52:32.123Z',
      inPerson: {
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
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
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
          },
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
        donationType: DonationType1.FixedAmounts,
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
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 'id6',
      name: 'name6',
      nonprofitCause: {
        bannerUrl: 'bannerUrl4',
        causeId: 'causeId0',
        description: 'description4',
        globalWebsiteUrl: 'globalWebsiteUrl6',
        goals: [
          'goals9'
        ],
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      status: DonationCampaignStatus2.Active,
      accountHolderIds: [
        'accountHolderIds1',
        'accountHolderIds2',
        'accountHolderIds3'
      ],
      activatedAt: '2016-03-13T12:52:32.123Z',
      endedAt: '2016-03-13T12:52:32.123Z',
      inPerson: {
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
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
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
          },
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
        donationType: DonationType1.FixedAmounts,
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
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

