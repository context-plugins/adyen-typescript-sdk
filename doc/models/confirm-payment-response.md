
# Confirm Payment Response

## Structure

`ConfirmPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links11`](../../doc/models/links-11.md) | Required | Contains redirection URLs to guide the user to the appropriate page, after a successful payment or a cancellation. |

## Example

```ts
import { ConfirmPaymentResponse } from 'adyen';

const confirmPaymentResponse: ConfirmPaymentResponse = {
  links: {
    cancel: {
      href: 'href4',
    },
    success: {
      href: 'href2',
    },
  },
};
```

