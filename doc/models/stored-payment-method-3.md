
# Stored Payment Method 3

*This model accepts additional fields of type unknown.*

## Structure

`StoredPaymentMethod3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountNumber` | `string \| undefined` | Optional | The bank account number (without separators). |
| `bankLocationId` | `string \| undefined` | Optional | The location id of the bank. The field value is `nil` in most cases. |
| `brand` | `string \| undefined` | Optional | The brand of the card. |
| `cashtag` | `string \| undefined` | Optional | The shopper’s Cash App Pay Cashtag. |
| `expiryMonth` | `string \| undefined` | Optional | The two-digit month when the card expires |
| `expiryYear` | `string \| undefined` | Optional | The last two digits of the year the card expires. For example, **22** for the year 2022. |
| `externalToken` | `string \| undefined` | Optional | The token issued by an external tokenization service representing the shopper's payment method |
| `holderName` | `string \| undefined` | Optional | The name of the payment method holder. |
| `iban` | `string \| undefined` | Optional | The IBAN of the bank account. |
| `id` | `string \| undefined` | Optional | A unique identifier of this stored payment method. |
| `label` | `string \| undefined` | Optional | The shopper’s issuer account label |
| `lastFour` | `string \| undefined` | Optional | The last four digits of the PAN. |
| `name` | `string \| undefined` | Optional | The display name of the stored payment method. |
| `networkTxReference` | `string \| undefined` | Optional | Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.<br><br>This contains either the Mastercard Trace ID or the Visa Transaction ID. |
| `ownerName` | `string \| undefined` | Optional | The name of the bank account holder. |
| `shopperEmail` | `string \| undefined` | Optional | The shopper’s email address. |
| `supportedRecurringProcessingModels` | `string[] \| undefined` | Optional | The supported recurring processing models for this stored payment method. |
| `supportedShopperInteractions` | `string[] \| undefined` | Optional | The supported shopper interactions for this stored payment method. |
| `type` | `string \| undefined` | Optional | The type of payment method. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StoredPaymentMethod3 } from 'adyen';

const storedPaymentMethod3: StoredPaymentMethod3 = {
  bankAccountNumber: 'bankAccountNumber8',
  bankLocationId: 'bankLocationId2',
  brand: 'brand2',
  cashtag: 'cashtag6',
  expiryMonth: 'expiryMonth2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

