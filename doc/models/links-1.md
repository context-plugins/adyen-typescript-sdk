
# Links 1

Contains redirection URLs to guide the user to the appropriate page, after a successful payment or a cancellation.

*This model accepts additional fields of type unknown.*

## Structure

`Links1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cancel` | [`Href \| undefined`](../../doc/models/href.md) | Optional | - |
| `success` | [`Href \| undefined`](../../doc/models/href.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Links1 } from 'adyenlib';

const links1: Links1 = {
  cancel: {
    href: 'href4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  success: {
    href: 'href2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

