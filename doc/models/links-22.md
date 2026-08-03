
# Links 22

Contains links to the next and previous page whenever applicable.

*This model accepts additional fields of type unknown.*

## Structure

`Links22`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `next` | [`Next \| undefined`](../../doc/models/next.md) | Optional | - |
| `prev` | [`Prev \| undefined`](../../doc/models/prev.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Links22 } from 'adyenlib';

const links22: Links22 = {
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

