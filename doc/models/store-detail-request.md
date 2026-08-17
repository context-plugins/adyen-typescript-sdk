
# Store Detail Request

## Structure

`StoreDetailRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular request. |
| `bank` | [`BankAccount \| undefined`](../../doc/models/bank-account.md) | Optional | A container for bank account data.<br><br>> This field is mandatory if `card` is not provided. |
| `billingAddress` | [`Address \| undefined`](../../doc/models/address.md) | Optional | The billing address.<br><br>> The `billingAddress` object is required for cross-border payouts to and from Canada. Include all of the fields within this object. |
| `card` | [`Card \| undefined`](../../doc/models/card.md) | Optional | A container for card data.<br><br>> This field is mandatory if `bank` is not provided. |
| `dateOfBirth` | `string` | Required | The date of birth.<br>Format: [ISO-8601](https://www.w3.org/TR/NOTE-datetime); example: YYYY-MM-DD<br>For Paysafecard it must be the same as used when registering the Paysafecard account.<br><br>> This field is mandatory for natural persons. |
| `entityType` | [`EntityType1Enum`](../../doc/models/entity-type-1-enum.md) | Required | The type of the entity the payout is processed for. |
| `fraudOffset` | `number \| undefined` | Optional | An integer value that is added to the normal fraud score. The value can be either positive or negative. |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `nationality` | `string` | Required | The shopper's nationality.<br><br>A valid value is an ISO 2-character country code (e.g. 'NL').<br><br>**Constraints**: *Maximum Length*: `2` |
| `recurring` | [`Recurring`](../../doc/models/recurring.md) | Required | A container for the type of recurring contract to be retrieved.<br><br>The recurring.contract must be set to `PAYOUT` |
| `selectedBrand` | `string \| undefined` | Optional | The name of the brand to make a payout to.<br><br>For Paysafecard it must be set to `paysafecard`. |
| `shopperEmail` | `string` | Required | The shopper's email address. |
| `shopperName` | [`Name \| undefined`](../../doc/models/name.md) | Optional | The shopper's name.<br><br>When the `entityType` is `Company`, the `shopperName.lastName` must contain the company name. |
| `shopperReference` | `string` | Required | The shopper's reference for the payment transaction. |
| `socialSecurityNumber` | `string \| undefined` | Optional | The shopper's social security number. |
| `telephoneNumber` | `string \| undefined` | Optional | The shopper's phone number. |

## Example

```ts
import {
  ContractEnum,
  EntityType1Enum,
  StoreDetailRequest,
  TokenServiceEnum,
} from 'adyen';

const storeDetailRequest: StoreDetailRequest = {
  dateOfBirth: '2016-03-13T12:52:32.123Z',
  entityType: EntityType1Enum.NaturalPerson,
  merchantAccount: 'merchantAccount2',
  nationality: 'nationality8',
  recurring: {
    contract: ContractEnum.EnumONECLICKRECURRING,
    recurringDetailName: 'recurringDetailName2',
    recurringExpiry: '2016-03-13T12:52:32.123Z',
    recurringFrequency: 'recurringFrequency0',
    tokenService: TokenServiceEnum.VISATOKENSERVICE,
  },
  shopperEmail: 'shopperEmail4',
  shopperReference: 'shopperReference8',
  additionalData: {
    'key0': 'additionalData0'
  },
  bank: {
    bankAccountNumber: 'bankAccountNumber8',
    bankCity: 'bankCity0',
    bankLocationId: 'bankLocationId2',
    bankName: 'bankName4',
    bic: 'bic0',
  },
  billingAddress: {
    city: 'city8',
    country: 'country6',
    houseNumberOrName: 'houseNumberOrName0',
    postalCode: 'postalCode6',
    street: 'street2',
    stateOrProvince: 'stateOrProvince0',
  },
  card: {
    cvc: 'cvc0',
    expiryMonth: 'expiryMonth0',
    expiryYear: 'expiryYear0',
    holderName: 'holderName2',
    issueNumber: 'issueNumber8',
  },
  fraudOffset: 28,
};
```

