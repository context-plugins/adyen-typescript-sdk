
# Href 51

The link to the list page you are currently viewing.

*This model accepts additional fields of type unknown.*

## Structure

`Href51`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Href51 } from 'adyenlib';

const href51: Href51 = {
  href: 'href6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

