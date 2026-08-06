
# Href 21

The link to the last page of the list.

*This model accepts additional fields of type unknown.*

## Structure

`Href21`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Href21 } from 'adyen';

const href21: Href21 = {
  href: 'href2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

