
# Submit Request

*This model accepts additional fields of type unknown.*

## Structure

`SubmitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular request. |
| `amount` | [`Amount16`](../../doc/models/amount-16.md) | Required | - |
| `dateOfBirth` | `string \| undefined` | Optional | The date of birth.<br>Format: ISO-8601; example: YYYY-MM-DD<br><br>For Paysafecard it must be the same as used when registering the Paysafecard account.<br><br>> This field is mandatory for natural persons.<br>> This field is required to update the existing `dateOfBirth` that is associated with this recurring contract. |
| `entityType` | [`EntityType2 \| undefined`](../../doc/models/entity-type-2.md) | Optional | - |
| `fraudOffset` | `number \| undefined` | Optional | An integer value that is added to the normal fraud score. The value can be either positive or negative. |
| `merchantAccount` | `string` | Required | The merchant account identifier you want to process the transaction request with. |
| `nationality` | `string \| undefined` | Optional | The shopper's nationality.<br><br>A valid value is an ISO 2-character country code (e.g. 'NL').<br><br>> This field is required to update the existing nationality that is associated with this recurring contract. |
| `recurring` | [`Recurring3`](../../doc/models/recurring-3.md) | Required | - |
| `reference` | `string` | Required | The merchant reference for this payout. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement. |
| `selectedRecurringDetailReference` | `string` | Required | This is the `recurringDetailReference` you want to use for this payout.<br><br>You can use the value LATEST to select the most recently used recurring detail. |
| `shopperEmail` | `string` | Required | The shopper's email address. |
| `shopperName` | [`ShopperName \| undefined`](../../doc/models/shopper-name.md) | Optional | - |
| `shopperReference` | `string` | Required | The shopper's reference for the payout transaction. |
| `shopperStatement` | `string \| undefined` | Optional | The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method). |
| `socialSecurityNumber` | `string \| undefined` | Optional | The shopper's social security number. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Contract, EntityType2, SubmitRequest, TokenService } from 'adyenlib';

const submitRequest: SubmitRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchantAccount: 'merchantAccount8',
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
  reference: 'reference8',
  selectedRecurringDetailReference: 'selectedRecurringDetailReference4',
  shopperEmail: 'shopperEmail0',
  shopperReference: 'shopperReference4',
  additionalData: {
    'key0': 'additionalData6'
  },
  dateOfBirth: '2016-03-13T12:52:32.123Z',
  entityType: EntityType2.NaturalPerson,
  fraudOffset: 166,
  nationality: 'nationality4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

