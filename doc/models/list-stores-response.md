
# List Stores Response

## Structure

`ListStoresResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks1 \| undefined`](../../doc/models/pagination-links-1.md) | Optional | Pagination references. |
| `data` | [`Store[] \| undefined`](../../doc/models/store.md) | Optional | List of stores |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |

## Example

```ts
import { ListStoresResponse } from 'adyen';

const listStoresResponse: ListStoresResponse = {
  itemsTotal: 92,
  pagesTotal: 202,
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
      },
      address: {
        country: 'country0',
        city: 'city6',
        line1: 'line18',
        line2: 'line20',
        line3: 'line38',
        postalCode: 'postalCode8',
      },
      businessLineIds: [
        'businessLineIds4'
      ],
      description: 'description0',
      externalReferenceId: 'externalReferenceId8',
    },
    {
      links: {
        self: {
          href: 'href0',
        },
      },
      address: {
        country: 'country0',
        city: 'city6',
        line1: 'line18',
        line2: 'line20',
        line3: 'line38',
        postalCode: 'postalCode8',
      },
      businessLineIds: [
        'businessLineIds4'
      ],
      description: 'description0',
      externalReferenceId: 'externalReferenceId8',
    }
  ],
};
```

