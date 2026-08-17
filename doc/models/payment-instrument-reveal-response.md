
# Payment Instrument Reveal Response

## Structure

`PaymentInstrumentRevealResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `encryptedData` | `string` | Required | The data encrypted using the `encryptedKey`. |

## Example

```ts
import { PaymentInstrumentRevealResponse } from 'adyen';

const paymentInstrumentRevealResponse: PaymentInstrumentRevealResponse = {
  encryptedData: 'encryptedData0',
};
```

