
# Href 1

The URL to where the user must be redirected after a successful payment.

*This model accepts additional fields of type unknown.*

## Structure

`Href1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | The full URL for the redirection. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Href1 } from 'adyenlib';

const href1: Href1 = {
  href: 'https://someUrl',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

