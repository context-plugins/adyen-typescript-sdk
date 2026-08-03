
# Href 11

The link to the first page of the list.

*This model accepts additional fields of type unknown.*

## Structure

`Href11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Href11 } from 'adyenlib';

const href11: Href11 = {
  href: 'href2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

