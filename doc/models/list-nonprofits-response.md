
# List Nonprofits Response

## Structure

`ListNonprofitsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks1 \| undefined`](../../doc/models/pagination-links-1.md) | Optional | Pagination references. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `nonprofits` | [`Nonprofit[] \| undefined`](../../doc/models/nonprofit.md) | Optional | The supported nonprofit organizations. |
| `pagesTotal` | `number` | Required | Total number of pages. |

## Example

```ts
import { ListNonprofitsResponse } from 'adyen';

const listNonprofitsResponse: ListNonprofitsResponse = {
  itemsTotal: 180,
  pagesTotal: 142,
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
  nonprofits: [
    {
      causes: [
        {
          bannerUrl: 'bannerUrl6',
          description: 'description6',
          locales: [
            'locales6',
            'locales7'
          ],
          name: 'name6',
          id: 'id6',
        }
      ],
      description: 'description8',
      goals: [
        'goals3',
        'goals4',
        'goals5'
      ],
      locales: [
        'locales8',
        'locales9'
      ],
      logoUrl: 'logoUrl8',
      name: 'name8',
      regions: [
        'regions3',
        'regions4'
      ],
      termsAndConditionsUrl: 'termsAndConditionsUrl6',
      website: 'website4',
      id: 'id8',
    }
  ],
};
```

