
# Href 5

A short-lived URL that redirects the user to the iDEAL profile registration page.

## Structure

`Href5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | The full URL for the redirection. |

## Example

```ts
import { Href5 } from 'adyen';

const href5: Href5 = {
  href: 'https://someUrl',
};
```

