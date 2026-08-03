
# Link 1

Contains links to the list pages.

*This model accepts additional fields of type unknown.*

## Structure

`Link1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `first` | [`First \| undefined`](../../doc/models/first.md) | Optional | - |
| `last` | [`Last \| undefined`](../../doc/models/last.md) | Optional | - |
| `next` | [`Next \| undefined`](../../doc/models/next.md) | Optional | - |
| `previous` | [`Previous \| undefined`](../../doc/models/previous.md) | Optional | - |
| `self` | [`Self \| undefined`](../../doc/models/self.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Link1 } from 'adyenlib';

const link1: Link1 = {
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
  next: {
    href: 'href4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  previous: {
    href: 'href0',
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
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

