
# Links 7

Reference to resources connected with the store.

*This model accepts additional fields of type unknown.*

## Structure

`Links7`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `self` | [`Self`](../../doc/models/self.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Links7 } from 'adyen';

const links7: Links7 = {
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

