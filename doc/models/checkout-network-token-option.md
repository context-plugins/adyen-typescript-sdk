
# Checkout Network Token Option

## Structure

`CheckoutNetworkTokenOption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `includeCryptogram` | `boolean \| undefined` | Optional | Set to **true** to enable forwarding network token cryptograms. |
| `useNetworkToken` | `boolean \| undefined` | Optional | Set to **true** to forward the network token for a card. |

## Example

```ts
import { CheckoutNetworkTokenOption } from 'adyen';

const checkoutNetworkTokenOption: CheckoutNetworkTokenOption = {
  includeCryptogram: false,
  useNetworkToken: false,
};
```

