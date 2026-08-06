
# Href

*This model accepts additional fields of type unknown.*

## Structure

`Href`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | The full URL for the redirection. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Href } from 'adyen';

const href: Href = {
  href: 'https://someUrl',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

