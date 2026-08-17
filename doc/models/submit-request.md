
# Submit Request

## Structure

`SubmitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular request. |
| `amount` | [`Amount`](../../doc/models/amount.md) | Required | A container object for the payable amount information of the transaction. |
| `dateOfBirth` | `string \| undefined` | Optional | The date of birth.<br>Format: ISO-8601; example: YYYY-MM-DD<br><br>For Paysafecard it must be the same as used when registering the Paysafecard account.<br><br>> This field is mandatory for natural persons.<br>> This field is required to update the existing `dateOfBirth` that is associated with this recurring contract. |
| `entityType` | [`EntityType2Enum \| undefined`](../../doc/models/entity-type-2-enum.md) | Optional | The type of the entity the payout is processed for.<br><br>Allowed values:<br><br>* NaturalPerson<br>* Company<br><br>> This field is required to update the existing `entityType` that is associated with this recurring contract. |
| `fraudOffset` | `number \| undefined` | Optional | An integer value that is added to the normal fraud score. The value can be either positive or negative. |
| `merchantAccount` | `string` | Required | The merchant account identifier you want to process the transaction request with. |
| `nationality` | `string \| undefined` | Optional | The shopper's nationality.<br><br>A valid value is an ISO 2-character country code (e.g. 'NL').<br><br>> This field is required to update the existing nationality that is associated with this recurring contract. |
| `recurring` | [`Recurring`](../../doc/models/recurring.md) | Required | A container for the type of recurring contract to be retrieved.<br><br>The `recurring.contract` must be set to "PAYOUT". |
| `reference` | `string` | Required | The merchant reference for this payout. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement. |
| `selectedRecurringDetailReference` | `string` | Required | This is the `recurringDetailReference` you want to use for this payout.<br><br>You can use the value LATEST to select the most recently used recurring detail. |
| `shopperEmail` | `string` | Required | The shopper's email address. |
| `shopperName` | [`Name \| undefined`](../../doc/models/name.md) | Optional | The shopper's name.<br><br>In case the `entityType` is `Company`, the `shopperName.lastName` must contain the company name.<br><br>> This field is required to update the existing `shopperName` associated with a recurring contract. |
| `shopperReference` | `string` | Required | The shopper's reference for the payout transaction. |
| `shopperStatement` | `string \| undefined` | Optional | The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method). |
| `socialSecurityNumber` | `string \| undefined` | Optional | The shopper's social security number. |

## Example

```ts
import {
  ContractEnum,
  EntityType2Enum,
  SubmitRequest,
  TokenServiceEnum,
} from 'adyen';

const submitRequest: SubmitRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  merchantAccount: 'merchantAccount8',
  recurring: {
    contract: ContractEnum.EnumONECLICKRECURRING,
    recurringDetailName: 'recurringDetailName2',
    recurringExpiry: '2016-03-13T12:52:32.123Z',
    recurringFrequency: 'recurringFrequency0',
    tokenService: TokenServiceEnum.VISATOKENSERVICE,
  },
  reference: 'reference8',
  selectedRecurringDetailReference: 'selectedRecurringDetailReference4',
  shopperEmail: 'shopperEmail0',
  shopperReference: 'shopperReference4',
  additionalData: {
    'key0': 'additionalData6'
  },
  dateOfBirth: '2016-03-13T12:52:32.123Z',
  entityType: EntityType2Enum.NaturalPerson,
  fraudOffset: 166,
  nationality: 'nationality4',
};
```

