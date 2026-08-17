
# Links 11

Contains redirection URLs to guide the user to the appropriate page, after a successful payment or a cancellation.

## Structure

`Links11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cancel` | [`Href6 \| undefined`](../../doc/models/href-6.md) | Optional | The URL to where the user must be redirected after a payment has been canceled. |
| `success` | [`Href1 \| undefined`](../../doc/models/href-1.md) | Optional | The URL to where the user must be redirected after a successful payment. |

## Example

```ts
import { Links11 } from 'adyen';

const links11: Links11 = {
  cancel: {
    href: 'href4',
  },
  success: {
    href: 'href2',
  },
};
```

