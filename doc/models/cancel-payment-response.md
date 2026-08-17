
# Cancel Payment Response

## Structure

`CancelPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links11`](../../doc/models/links-11.md) | Required | Contains redirection URLs to guide the user to the appropriate page, after a successful payment or a cancellation. |

## Example

```ts
import { CancelPaymentResponse } from 'adyen';

const cancelPaymentResponse: CancelPaymentResponse = {
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

