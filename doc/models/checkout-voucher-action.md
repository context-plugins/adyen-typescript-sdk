
# Checkout Voucher Action

## Structure

`CheckoutVoucherAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `alternativeReference` | `string \| undefined` | Optional | The voucher alternative reference code. |
| `collectionInstitutionNumber` | `string \| undefined` | Optional | A collection institution number (store number) for Econtext Pay-Easy ATM. |
| `downloadUrl` | `string \| undefined` | Optional | The URL to download the voucher. |
| `entity` | `string \| undefined` | Optional | An entity number of Multibanco. |
| `expiresAt` | `string \| undefined` | Optional | The date time of the voucher expiry. |
| `initialAmount` | [`Amount14 \| undefined`](../../doc/models/amount-14.md) | Optional | The initial amount. |
| `instructionsUrl` | `string \| undefined` | Optional | The URL to the detailed instructions to make payment using the voucher. |
| `issuer` | `string \| undefined` | Optional | The issuer of the voucher. |
| `maskedTelephoneNumber` | `string \| undefined` | Optional | The shopper telephone number (partially masked). |
| `merchantName` | `string \| undefined` | Optional | The merchant name. |
| `merchantReference` | `string \| undefined` | Optional | The merchant reference. |
| `passCreationToken` | `string \| undefined` | Optional | A Base64-encoded token containing all properties of the voucher. For iOS, you can use this to pass a voucher to Apple Wallet. |
| `paymentData` | `string \| undefined` | Optional | Encoded payment data. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `reference` | `string \| undefined` | Optional | The voucher reference code. |
| `shopperEmail` | `string \| undefined` | Optional | The shopper email. |
| `shopperName` | `string \| undefined` | Optional | The shopper name. |
| `surcharge` | [`Amount15 \| undefined`](../../doc/models/amount-15.md) | Optional | The surcharge amount. |
| `totalAmount` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | The total amount (initial plus surcharge amount). |
| `type` | `string` | Required, Constant | **voucher**<br><br>**Value**: `'voucher'` |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |

## Example

```ts
import { CheckoutVoucherAction } from 'adyen';

const checkoutVoucherAction: CheckoutVoucherAction = {
  type: 'voucher',
  alternativeReference: 'alternativeReference4',
  collectionInstitutionNumber: 'collectionInstitutionNumber2',
  downloadUrl: 'downloadUrl4',
  entity: 'entity6',
  expiresAt: 'expiresAt2',
};
```

