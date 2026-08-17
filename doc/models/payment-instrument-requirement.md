
# Payment Instrument Requirement

## Structure

`PaymentInstrumentRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies the requirements for the payment instrument that need to be included in the request for a particular route. |
| `issuingCountryCode` | `string \| undefined` | Optional | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**. |
| `issuingCountryCodes` | `string[] \| undefined` | Optional | The two-character ISO-3166-1 alpha-2 country code list for payment instruments. |
| `onlyForCrossBalancePlatform` | `boolean \| undefined` | Optional | Specifies if the requirement only applies to transfers to another balance platform. |
| `paymentInstrumentType` | [`PaymentInstrumentTypeEnum \| undefined`](../../doc/models/payment-instrument-type-enum.md) | Optional | The type of the payment instrument. For example, "BankAccount" or "Card". |
| `type` | `string` | Required, Constant | **paymentInstrumentRequirement**<br><br>**Value**: `'paymentInstrumentRequirement'` |

## Example

```ts
import {
  PaymentInstrumentRequirement,
  PaymentInstrumentTypeEnum,
} from 'adyen';

const paymentInstrumentRequirement: PaymentInstrumentRequirement = {
  type: 'paymentInstrumentRequirement',
  description: 'description2',
  issuingCountryCode: 'issuingCountryCode0',
  issuingCountryCodes: [
    'issuingCountryCodes1',
    'issuingCountryCodes2'
  ],
  onlyForCrossBalancePlatform: false,
  paymentInstrumentType: PaymentInstrumentTypeEnum.BankAccount,
};
```

