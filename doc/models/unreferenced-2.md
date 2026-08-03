
# Unreferenced 2

Settings for unreferenced refunds.

*This model accepts additional fields of type unknown.*

## Structure

`Unreferenced2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enableUnreferencedRefunds` | `boolean \| undefined` | Optional | Indicates whether unreferenced refunds are enabled on the terminal.<br><br>> You're fully liable for losses resulting from fraudulent or duplicate unreferenced refunds. We recommend that you [set an unreferenced refund limit and a refund delay](https://docs.adyen.com/point-of-sale/basic-tapi-integration/refund-payment/unreferenced/#risk-with-unreferenced-refunds) to reduce this risk. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Unreferenced2 } from 'adyenlib';

const unreferenced2: Unreferenced2 = {
  enableUnreferencedRefunds: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

