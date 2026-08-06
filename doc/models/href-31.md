
# Href 31

The link to the next page of the list.

*This model accepts additional fields of type unknown.*

## Structure

`Href31`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Href31 } from 'adyen';

const href31: Href31 = {
  href: 'href8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

