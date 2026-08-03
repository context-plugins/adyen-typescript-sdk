
# Payment Instrument Requirement

*This model accepts additional fields of type unknown.*

## Structure

`PaymentInstrumentRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies the requirements for the payment instrument that need to be included in the request for a particular route. |
| `issuingCountryCode` | `string \| undefined` | Optional | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**. |
| `issuingCountryCodes` | `string[] \| undefined` | Optional | The two-character ISO-3166-1 alpha-2 country code list for payment instruments. |
| `onlyForCrossBalancePlatform` | `boolean \| undefined` | Optional | Specifies if the requirement only applies to transfers to another balance platform. |
| `paymentInstrumentType` | [`PaymentInstrumentType \| undefined`](../../doc/models/payment-instrument-type.md) | Optional | - |
| `type` | [`Type363`](../../doc/models/type-363.md) | Required | **paymentInstrumentRequirement** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  PaymentInstrumentRequirement,
  PaymentInstrumentType,
  Type363,
} from 'adyenlib';

const paymentInstrumentRequirement: PaymentInstrumentRequirement = {
  type: Type363.PaymentInstrumentRequirement,
  description: 'description2',
  issuingCountryCode: 'issuingCountryCode0',
  issuingCountryCodes: [
    'issuingCountryCodes1',
    'issuingCountryCodes2'
  ],
  onlyForCrossBalancePlatform: false,
  paymentInstrumentType: PaymentInstrumentType.BankAccount,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

