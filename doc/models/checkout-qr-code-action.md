
# Checkout Qr Code Action

## Structure

`CheckoutQrCodeAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `expiresAt` | `string \| undefined` | Optional | Expiry time of the QR code. |
| `paymentData` | `string \| undefined` | Optional | Encoded payment data. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `qrCodeData` | `string \| undefined` | Optional | The contents of the QR code as a UTF8 string. |
| `type` | `string` | Required, Constant | **qrCode**<br><br>**Value**: `'qrCode'` |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |

## Example

```ts
import { CheckoutQrCodeAction } from 'adyen';

const checkoutQrCodeAction: CheckoutQrCodeAction = {
  type: 'qrCode',
  expiresAt: 'expiresAt0',
  paymentData: 'paymentData6',
  paymentMethodType: 'paymentMethodType6',
  qrCodeData: 'qrCodeData6',
  url: 'url8',
};
```

