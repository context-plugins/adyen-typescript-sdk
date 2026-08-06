
# List Company Response

*This model accepts additional fields of type unknown.*

## Structure

`ListCompanyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks \| undefined`](../../doc/models/pagination-links.md) | Optional | - |
| `data` | [`Company2[] \| undefined`](../../doc/models/company-2.md) | Optional | The list of companies. |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListCompanyResponse } from 'adyen';

const listCompanyResponse: ListCompanyResponse = {
  itemsTotal: 244,
  pagesTotal: 50,
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
      links: {
        self: {
          href: 'href0',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        apiCredentials: {
          href: 'href8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        users: {
          href: 'href8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        webhooks: {
          href: 'href8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      dataCenters: [
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      description: 'description0',
      id: 'id0',
      name: 'name0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      links: {
        self: {
          href: 'href0',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        apiCredentials: {
          href: 'href8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        users: {
          href: 'href8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        webhooks: {
          href: 'href8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      dataCenters: [
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          livePrefix: 'livePrefix4',
          name: 'name6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      description: 'description0',
      id: 'id0',
      name: 'name0',
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

