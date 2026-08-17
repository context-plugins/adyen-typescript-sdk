
# List Company Response

## Structure

`ListCompanyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks1 \| undefined`](../../doc/models/pagination-links-1.md) | Optional | Pagination references. |
| `data` | [`Company2[] \| undefined`](../../doc/models/company-2.md) | Optional | The list of companies. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |

## Example

```ts
import { ListCompanyResponse } from 'adyen';

const listCompanyResponse: ListCompanyResponse = {
  itemsTotal: 244,
  pagesTotal: 50,
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
      description: 'description0',
      id: 'id0',
      name: 'name0',
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
      description: 'description0',
      id: 'id0',
      name: 'name0',
    }
  ],
};
```

