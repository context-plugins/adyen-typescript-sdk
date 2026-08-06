
# Href 6

The URL to where the user must be redirected after a payment has been canceled.

*This model accepts additional fields of type unknown.*

## Structure

`Href6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | The full URL for the redirection. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Href6 } from 'adyen';

const href6: Href6 = {
  href: 'https://someUrl',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

