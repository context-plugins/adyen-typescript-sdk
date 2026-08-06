
# Pagination Links 1

Pagination references.

*This model accepts additional fields of type unknown.*

## Structure

`PaginationLinks1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `first` | [`First`](../../doc/models/first.md) | Required | - |
| `last` | [`Last`](../../doc/models/last.md) | Required | - |
| `next` | [`Next \| undefined`](../../doc/models/next.md) | Optional | - |
| `prev` | [`Prev \| undefined`](../../doc/models/prev.md) | Optional | - |
| `self` | [`Self`](../../doc/models/self.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaginationLinks1 } from 'adyen';

const paginationLinks1: PaginationLinks1 = {
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
};
```

