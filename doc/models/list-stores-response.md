
# List Stores Response

*This model accepts additional fields of type unknown.*

## Structure

`ListStoresResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks \| undefined`](../../doc/models/pagination-links.md) | Optional | - |
| `data` | [`Store[] \| undefined`](../../doc/models/store.md) | Optional | List of stores |
| `itemsTotal` | `number` | Required | Total number of items. |
| `pagesTotal` | `number` | Required | Total number of pages. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListStoresResponse } from 'adyen';

const listStoresResponse: ListStoresResponse = {
  itemsTotal: 92,
  pagesTotal: 202,
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
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      address: {
        country: 'country0',
        city: 'city6',
        line1: 'line18',
        line2: 'line20',
        line3: 'line38',
        postalCode: 'postalCode8',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      businessLineIds: [
        'businessLineIds4'
      ],
      description: 'description0',
      externalReferenceId: 'externalReferenceId8',
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
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      address: {
        country: 'country0',
        city: 'city6',
        line1: 'line18',
        line2: 'line20',
        line3: 'line38',
        postalCode: 'postalCode8',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      businessLineIds: [
        'businessLineIds4'
      ],
      description: 'description0',
      externalReferenceId: 'externalReferenceId8',
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

