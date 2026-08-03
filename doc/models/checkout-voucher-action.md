
# Checkout Voucher Action

*This model accepts additional fields of type unknown.*

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
| `initialAmount` | [`InitialAmount \| undefined`](../../doc/models/initial-amount.md) | Optional | - |
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
| `surcharge` | [`Surcharge5 \| undefined`](../../doc/models/surcharge-5.md) | Optional | - |
| `totalAmount` | [`TotalAmount2 \| undefined`](../../doc/models/total-amount-2.md) | Optional | - |
| `type` | [`Type594`](../../doc/models/type-594.md) | Required | **voucher** |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutVoucherAction, Type594 } from 'adyenlib';

const checkoutVoucherAction: CheckoutVoucherAction = {
  type: Type594.Voucher,
  alternativeReference: 'alternativeReference4',
  collectionInstitutionNumber: 'collectionInstitutionNumber2',
  downloadUrl: 'downloadUrl4',
  entity: 'entity6',
  expiresAt: 'expiresAt2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

