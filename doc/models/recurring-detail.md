
# Recurring Detail

*This model accepts additional fields of type unknown.*

## Structure

`RecurringDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be returned in a particular response.<br><br>The additionalData object consists of entries, each of which includes the key and value. |
| `alias` | `string \| undefined` | Optional | The alias of the credit card number.<br><br>Applies only to recurring contracts storing credit card details |
| `aliasType` | `string \| undefined` | Optional | The alias type of the credit card number.<br><br>Applies only to recurring contracts storing credit card details. |
| `bank` | [`Bank \| undefined`](../../doc/models/bank.md) | Optional | - |
| `billingAddress` | [`BillingAddress7 \| undefined`](../../doc/models/billing-address-7.md) | Optional | - |
| `card` | [`Card6 \| undefined`](../../doc/models/card-6.md) | Optional | - |
| `contractTypes` | `string[] \| undefined` | Optional | Types of recurring contracts. |
| `creationDate` | `string \| undefined` | Optional | The date when the recurring details were created. |
| `firstPspReference` | `string \| undefined` | Optional | The `pspReference` of the first recurring payment that created the recurring detail. |
| `name` | `string \| undefined` | Optional | An optional descriptive name for this recurring detail. |
| `networkTxReference` | `string \| undefined` | Optional | Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.<br><br>This contains either the Mastercard Trace ID or the Visa Transaction ID. |
| `paymentMethodVariant` | `string \| undefined` | Optional | The  type or sub-brand of a payment method used, e.g. Visa Debit, Visa Corporate, etc. For more information, refer to [PaymentMethodVariant](https://docs.adyen.com/development-resources/paymentmethodvariant). |
| `recurringDetailReference` | `string` | Required | The reference that uniquely identifies the recurring detail. |
| `shopperName` | [`ShopperName \| undefined`](../../doc/models/shopper-name.md) | Optional | - |
| `socialSecurityNumber` | `string \| undefined` | Optional | A shopper's social security number (only in countries where it is legal to collect). |
| `tokenDetails` | [`TokenDetails \| undefined`](../../doc/models/token-details.md) | Optional | - |
| `transactionLinkId` | `string \| undefined` | Optional | The unique identifier for the transaction link, used for Mastercard recurring transactions. |
| `variant` | `string` | Required | The payment method, such as “mc", "visa", "ideal", "paypal". |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RecurringDetail } from 'adyenlib';

const recurringDetail: RecurringDetail = {
  recurringDetailReference: 'recurringDetailReference4',
  variant: 'variant8',
  additionalData: {
    'key0': 'additionalData4',
    'key1': 'additionalData5'
  },
  alias: 'alias6',
  aliasType: 'aliasType4',
  bank: {
    bankAccountNumber: 'bankAccountNumber8',
    bankCity: 'bankCity0',
    bankLocationId: 'bankLocationId2',
    bankName: 'bankName4',
    bic: 'bic0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  billingAddress: {
    city: 'city8',
    country: 'country6',
    houseNumberOrName: 'houseNumberOrName0',
    postalCode: 'postalCode6',
    street: 'street2',
    stateOrProvince: 'stateOrProvince0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

