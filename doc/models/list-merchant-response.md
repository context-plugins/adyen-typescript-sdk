
# List Merchant Response

## Structure

`ListMerchantResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks1 \| undefined`](../../doc/models/pagination-links-1.md) | Optional | Pagination references. |
| `data` | [`Merchant[] \| undefined`](../../doc/models/merchant.md) | Optional | The list of merchant accounts. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |

## Example

```ts
import { ListMerchantResponse } from 'adyen';

const listMerchantResponse: ListMerchantResponse = {
  itemsTotal: 18,
  pagesTotal: 236,
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
  data: [
    {
      links: {
        self: {
          href: 'href0',
        },
        apiCredentials: {
          href: 'href8',
        },
        users: {
          href: 'href8',
        },
        webhooks: {
          href: 'href8',
        },
      },
      captureDelay: 'captureDelay6',
      companyId: 'companyId0',
      dataCenters: [
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
        },
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
        },
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
        }
      ],
      defaultShopperInteraction: 'defaultShopperInteraction8',
    },
    {
      links: {
        self: {
          href: 'href0',
        },
        apiCredentials: {
          href: 'href8',
        },
        users: {
          href: 'href8',
        },
        webhooks: {
          href: 'href8',
        },
      },
      captureDelay: 'captureDelay6',
      companyId: 'companyId0',
      dataCenters: [
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
        },
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
        },
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
        }
      ],
      defaultShopperInteraction: 'defaultShopperInteraction8',
    },
    {
      links: {
        self: {
          href: 'href0',
        },
        apiCredentials: {
          href: 'href8',
        },
        users: {
          href: 'href8',
        },
        webhooks: {
          href: 'href8',
        },
      },
      captureDelay: 'captureDelay6',
      companyId: 'companyId0',
      dataCenters: [
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
        },
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
        },
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
        }
      ],
      defaultShopperInteraction: 'defaultShopperInteraction8',
    }
  ],
};
```

