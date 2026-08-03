
# Store Detail and Submit Request

*This model accepts additional fields of type unknown.*

## Structure

`StoreDetailAndSubmitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular request. |
| `amount` | [`Amount16`](../../doc/models/amount-16.md) | Required | - |
| `bank` | [`Bank \| undefined`](../../doc/models/bank.md) | Optional | - |
| `billingAddress` | [`BillingAddress7 \| undefined`](../../doc/models/billing-address-7.md) | Optional | - |
| `card` | [`Card6 \| undefined`](../../doc/models/card-6.md) | Optional | - |
| `dateOfBirth` | `string` | Required | The date of birth.<br>Format: [ISO-8601](https://www.w3.org/TR/NOTE-datetime); example: YYYY-MM-DD<br>For Paysafecard it must be the same as used when registering the Paysafecard account.<br><br>> This field is mandatory for natural persons. |
| `entityType` | [`EntityType1`](../../doc/models/entity-type-1.md) | Required | - |
| `fraudOffset` | `number \| undefined` | Optional | An integer value that is added to the normal fraud score. The value can be either positive or negative. |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `nationality` | `string` | Required | The shopper's nationality.<br><br>A valid value is an ISO 2-character country code (e.g. 'NL').<br><br>**Constraints**: *Maximum Length*: `2` |
| `recurring` | [`Recurring3`](../../doc/models/recurring-3.md) | Required | - |
| `reference` | `string` | Required | The merchant reference for this payment. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement. |
| `selectedBrand` | `string \| undefined` | Optional | The name of the brand to make a payout to.<br><br>For Paysafecard it must be set to `paysafecard`. |
| `shopperEmail` | `string` | Required | The shopper's email address. |
| `shopperName` | [`ShopperName \| undefined`](../../doc/models/shopper-name.md) | Optional | - |
| `shopperReference` | `string` | Required | The shopper's reference for the payment transaction. |
| `shopperStatement` | `string \| undefined` | Optional | The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method). |
| `socialSecurityNumber` | `string \| undefined` | Optional | The shopper's social security number. |
| `telephoneNumber` | `string \| undefined` | Optional | The shopper's phone number. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  Contract,
  EntityType1,
  StoreDetailAndSubmitRequest,
  TokenService,
} from 'adyenlib';

const storeDetailAndSubmitRequest: StoreDetailAndSubmitRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  dateOfBirth: '2016-03-13T12:52:32.123Z',
  entityType: EntityType1.NaturalPerson,
  merchantAccount: 'merchantAccount6',
  nationality: 'nationality2',
  recurring: {
    contract: Contract.EnumOneclickrecurring,
    recurringDetailName: 'recurringDetailName2',
    recurringExpiry: '2016-03-13T12:52:32.123Z',
    recurringFrequency: 'recurringFrequency0',
    tokenService: TokenService.Visatokenservice,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  reference: 'reference0',
  shopperEmail: 'shopperEmail2',
  shopperReference: 'shopperReference2',
  additionalData: {
    'key0': 'additionalData4',
    'key1': 'additionalData5'
  },
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
  card: {
    cvc: 'cvc0',
    expiryMonth: 'expiryMonth0',
    expiryYear: 'expiryYear0',
    holderName: 'holderName2',
    issueNumber: 'issueNumber8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  fraudOffset: 0,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

