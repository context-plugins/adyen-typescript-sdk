
# Href 4

A short-lived URL that redirects the user to the iDEAL page that is required for authentication.

## Structure

`Href4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | The full URL for the redirection. |

## Example

```ts
import { Href4 } from 'adyen';

const href4: Href4 = {
  href: 'https://someUrl',
};
```

