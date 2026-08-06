
# Checkout Network Token Option

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutNetworkTokenOption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `includeCryptogram` | `boolean \| undefined` | Optional | Set to **true** to enable forwarding network token cryptograms. |
| `useNetworkToken` | `boolean \| undefined` | Optional | Set to **true** to forward the network token for a card. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutNetworkTokenOption } from 'adyen';

const checkoutNetworkTokenOption: CheckoutNetworkTokenOption = {
  includeCryptogram: false,
  useNetworkToken: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

