
# List Merchant Users Response

*This model accepts additional fields of type unknown.*

## Structure

`ListMerchantUsersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks \| undefined`](../../doc/models/pagination-links.md) | Optional | - |
| `data` | [`User[] \| undefined`](../../doc/models/user.md) | Optional | The list of users. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListMerchantUsersResponse } from 'adyenlib';

const listMerchantUsersResponse: ListMerchantUsersResponse = {
  itemsTotal: 96,
  pagesTotal: 58,
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
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
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
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
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
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
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

