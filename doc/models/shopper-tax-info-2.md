
# Shopper Tax Info 2

The tax info of the shopper

## Structure

`ShopperTaxInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `taxCountryCode` | `string` | Required | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code associated with the provided tax identification number.<br>Currently used only for Indian PA-CB tax verification, when applicable.<br><br>**Constraints**: *Maximum Length*: `2` |
| `taxIdentificationNumber` | `string` | Required | The shopper’s tax identification number.<br><br>**Constraints**: *Maximum Length*: `20` |

## Example

```ts
import { ShopperTaxInfo2 } from 'adyen';

const shopperTaxInfo2: ShopperTaxInfo2 = {
  taxCountryCode: 'taxCountryCode4',
  taxIdentificationNumber: 'taxIdentificationNumber4',
};
```

