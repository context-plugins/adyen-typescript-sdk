
# Href 4

A short-lived URL that redirects the user to the iDEAL page that is required for authentication.

*This model accepts additional fields of type unknown.*

## Structure

`Href4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | The full URL for the redirection. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Href4 } from 'adyenlib';

const href4: Href4 = {
  href: 'https://someUrl',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

