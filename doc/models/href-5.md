
# Href 5

A short-lived URL that redirects the user to the iDEAL profile registration page.

*This model accepts additional fields of type unknown.*

## Structure

`Href5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | The full URL for the redirection. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Href5 } from 'adyenlib';

const href5: Href5 = {
  href: 'https://someUrl',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

