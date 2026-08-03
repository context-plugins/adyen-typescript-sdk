
# Href 3

A short-lived URL that redirects the user to the iDEAL profile management page.

*This model accepts additional fields of type unknown.*

## Structure

`Href3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | The full URL for the redirection. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Href3 } from 'adyenlib';

const href3: Href3 = {
  href: 'https://someUrl',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

