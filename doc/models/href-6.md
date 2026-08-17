
# Href 6

The URL to where the user must be redirected after a payment has been canceled.

## Structure

`Href6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | The full URL for the redirection. |

## Example

```ts
import { Href6 } from 'adyen';

const href6: Href6 = {
  href: 'https://someUrl',
};
```

