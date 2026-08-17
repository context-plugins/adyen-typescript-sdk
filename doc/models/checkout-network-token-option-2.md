
# Checkout Network Token Option 2

The object that contains the details for forwarding a network token.

## Structure

`CheckoutNetworkTokenOption2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `includeCryptogram` | `boolean \| undefined` | Optional | Set to **true** to enable forwarding network token cryptograms. |
| `useNetworkToken` | `boolean \| undefined` | Optional | Set to **true** to forward the network token for a card. |

## Example

```ts
import { CheckoutNetworkTokenOption2 } from 'adyen';

const checkoutNetworkTokenOption2: CheckoutNetworkTokenOption2 = {
  includeCryptogram: false,
  useNetworkToken: false,
};
```

