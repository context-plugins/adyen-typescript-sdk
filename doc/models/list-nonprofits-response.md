
# List Nonprofits Response

*This model accepts additional fields of type unknown.*

## Structure

`ListNonprofitsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`PaginationLinks \| undefined`](../../doc/models/pagination-links.md) | Optional | - |
| `itemsTotal` | `number` | Required | Total number of items. |
| `nonprofits` | [`Nonprofit[] \| undefined`](../../doc/models/nonprofit.md) | Optional | The supported nonprofit organizations. |
| `pagesTotal` | `number` | Required | Total number of pages. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListNonprofitsResponse } from 'adyenlib';

const listNonprofitsResponse: ListNonprofitsResponse = {
  itemsTotal: 180,
  pagesTotal: 142,
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
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
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

