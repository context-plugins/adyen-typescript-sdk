
# Checkout Network Token Option 2

The object that contains the details for forwarding a network token.

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutNetworkTokenOption2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `includeCryptogram` | `boolean \| undefined` | Optional | Set to **true** to enable forwarding network token cryptograms. |
| `useNetworkToken` | `boolean \| undefined` | Optional | Set to **true** to forward the network token for a card. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutNetworkTokenOption2 } from 'adyen';

const checkoutNetworkTokenOption2: CheckoutNetworkTokenOption2 = {
  includeCryptogram: false,
  useNetworkToken: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

