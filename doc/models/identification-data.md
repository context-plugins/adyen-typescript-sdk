
# Identification Data

## Structure

`IdentificationData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardNumber` | `string \| undefined` | Optional | The card number of the document that was issued (AU only). |
| `expiryDate` | `string \| undefined` | Optional | The expiry date of the document, in YYYY-MM-DD format. |
| `issuerCountry` | `string \| undefined` | Optional | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**. |
| `issuerState` | `string \| undefined` | Optional | The state or province where the document was issued (AU only). |
| `nationalIdExempt` | `boolean \| undefined` | Optional | Applies only to individuals in the US. Set to **true** if the individual does not have an SSN. To verify their identity, Adyen will require them to upload an ID document. |
| `number` | `string \| undefined` | Optional | The number in the document. |
| `type` | [`Type132Enum`](../../doc/models/type-132-enum.md) | Required | Type of identity data. For individuals, the following types are supported. See our [onboarding guide](https://docs.adyen.com/platforms/onboard-users/onboarding-steps/?onboarding_type=custom) for other supported countries.<br><br>- Australia: **driversLicense**, **passport**<br><br>- Hong Kong: **driversLicense**, **nationalIdNumber**, **passport**<br><br>- New Zealand: **driversLicense**, **passport**<br><br>- Singapore: **driversLicense**, **nationalIdNumber**, **passport**<br><br>- All other supported countries: **nationalIdNumber** |

## Example

```ts
import { IdentificationData, Type132Enum } from 'adyen';

const identificationData: IdentificationData = {
  type: Type132Enum.NationalIdNumber,
  cardNumber: 'cardNumber6',
  expiryDate: 'expiryDate8',
  issuerCountry: 'issuerCountry6',
  issuerState: 'issuerState6',
  nationalIdExempt: false,
};
```

