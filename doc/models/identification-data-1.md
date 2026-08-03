
# Identification Data 1

Information about the individual's identification document.

*This model accepts additional fields of type unknown.*

## Structure

`IdentificationData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardNumber` | `string \| undefined` | Optional | The card number of the document that was issued (AU only). |
| `expiryDate` | `string \| undefined` | Optional | The expiry date of the document, in YYYY-MM-DD format. |
| `issuerCountry` | `string \| undefined` | Optional | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**. |
| `issuerState` | `string \| undefined` | Optional | The state or province where the document was issued (AU only). |
| `nationalIdExempt` | `boolean \| undefined` | Optional | Applies only to individuals in the US. Set to **true** if the individual does not have an SSN. To verify their identity, Adyen will require them to upload an ID document. |
| `number` | `string \| undefined` | Optional | The number in the document. |
| `type` | [`Type132`](../../doc/models/type-132.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IdentificationData1, Type132 } from 'adyenlib';

const identificationData1: IdentificationData1 = {
  type: Type132.NationalIdNumber,
  cardNumber: 'cardNumber6',
  expiryDate: 'expiryDate8',
  issuerCountry: 'issuerCountry6',
  issuerState: 'issuerState6',
  nationalIdExempt: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

