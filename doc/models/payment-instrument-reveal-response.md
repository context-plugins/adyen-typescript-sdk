
# Payment Instrument Reveal Response

*This model accepts additional fields of type unknown.*

## Structure

`PaymentInstrumentRevealResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `encryptedData` | `string` | Required | The data encrypted using the `encryptedKey`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentInstrumentRevealResponse } from 'adyenlib';

const paymentInstrumentRevealResponse: PaymentInstrumentRevealResponse = {
  encryptedData: 'encryptedData0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

