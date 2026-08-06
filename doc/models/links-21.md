
# Links 21

References to resources linked to the allowed origin.

*This model accepts additional fields of type unknown.*

## Structure

`Links21`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `self` | [`Self`](../../doc/models/self.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Links21 } from 'adyen';

const links21: Links21 = {
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

