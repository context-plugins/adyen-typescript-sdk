
# Href 41

The link to the previous page of the list.

*This model accepts additional fields of type unknown.*

## Structure

`Href41`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Href41 } from 'adyen';

const href41: Href41 = {
  href: 'href8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

