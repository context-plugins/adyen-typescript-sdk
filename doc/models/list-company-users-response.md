
# List Company Users Response

## Structure

`ListCompanyUsersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks1 \| undefined`](../../doc/models/pagination-links-1.md) | Optional | Pagination references. |
| `data` | [`CompanyUser[] \| undefined`](../../doc/models/company-user.md) | Optional | The list of users. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |

## Example

```ts
import { ListCompanyUsersResponse } from 'adyen';

const listCompanyUsersResponse: ListCompanyUsersResponse = {
  itemsTotal: 44,
  pagesTotal: 6,
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
      associatedMerchantAccounts: [
        'associatedMerchantAccounts0',
        'associatedMerchantAccounts1',
        'associatedMerchantAccounts2'
      ],
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
      associatedMerchantAccounts: [
        'associatedMerchantAccounts0',
        'associatedMerchantAccounts1',
        'associatedMerchantAccounts2'
      ],
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
      associatedMerchantAccounts: [
        'associatedMerchantAccounts0',
        'associatedMerchantAccounts1',
        'associatedMerchantAccounts2'
      ],
    }
  ],
};
```

