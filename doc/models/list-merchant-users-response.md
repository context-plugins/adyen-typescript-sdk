
# List Merchant Users Response

## Structure

`ListMerchantUsersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks1 \| undefined`](../../doc/models/pagination-links-1.md) | Optional | Pagination references. |
| `data` | [`User[] \| undefined`](../../doc/models/user.md) | Optional | The list of users. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |

## Example

```ts
import { ListMerchantUsersResponse } from 'adyen';

const listMerchantUsersResponse: ListMerchantUsersResponse = {
  itemsTotal: 96,
  pagesTotal: 58,
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
      email: 'email6',
      id: 'id0',
      roles: [
        'roles8'
      ],
      timeZoneCode: 'timeZoneCode2',
      username: 'username0',
      links: {
        self: {
          href: 'href0',
        },
      },
      accountGroups: [
        'accountGroups7'
      ],
      active: false,
      apps: [
        'apps4',
        'apps5',
        'apps6'
      ],
      name: {
        firstName: 'firstName4',
        lastName: 'lastName4',
      },
    },
    {
      email: 'email6',
      id: 'id0',
      roles: [
        'roles8'
      ],
      timeZoneCode: 'timeZoneCode2',
      username: 'username0',
      links: {
        self: {
          href: 'href0',
        },
      },
      accountGroups: [
        'accountGroups7'
      ],
      active: false,
      apps: [
        'apps4',
        'apps5',
        'apps6'
      ],
      name: {
        firstName: 'firstName4',
        lastName: 'lastName4',
      },
    }
  ],
};
```

