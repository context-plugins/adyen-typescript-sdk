
# Links 4

## Structure

`Links4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cancel` | [`Href6 \| undefined`](../../doc/models/href-6.md) | Optional | The URL to where the user must be redirected after a payment has been canceled. |
| `success` | [`Href1 \| undefined`](../../doc/models/href-1.md) | Optional | The URL to where the user must be redirected after a successful payment. |

## Example

```ts
import { Links4 } from 'adyen';

const links4: Links4 = {
  cancel: {
    href: 'href4',
  },
  success: {
    href: 'href2',
  },
};
```

