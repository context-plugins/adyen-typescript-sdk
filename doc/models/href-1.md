
# Href 1

The URL to where the user must be redirected after a successful payment.

## Structure

`Href1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | The full URL for the redirection. |

## Example

```ts
import { Href1 } from 'adyen';

const href1: Href1 = {
  href: 'https://someUrl',
};
```

