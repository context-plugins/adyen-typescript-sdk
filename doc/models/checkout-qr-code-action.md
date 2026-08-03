
# Checkout Qr Code Action

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutQrCodeAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `expiresAt` | `string \| undefined` | Optional | Expiry time of the QR code. |
| `paymentData` | `string \| undefined` | Optional | Encoded payment data. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `qrCodeData` | `string \| undefined` | Optional | The contents of the QR code as a UTF8 string. |
| `type` | [`Type563`](../../doc/models/type-563.md) | Required | **qrCode** |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutQrCodeAction, Type563 } from 'adyenlib';

const checkoutQrCodeAction: CheckoutQrCodeAction = {
  type: Type563.QrCode,
  expiresAt: 'expiresAt0',
  paymentData: 'paymentData6',
  paymentMethodType: 'paymentMethodType6',
  qrCodeData: 'qrCodeData6',
  url: 'url8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

