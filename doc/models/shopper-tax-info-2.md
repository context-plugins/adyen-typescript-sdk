
# Shopper Tax Info 2

The tax info of the shopper

*This model accepts additional fields of type unknown.*

## Structure

`ShopperTaxInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `taxCountryCode` | `string` | Required | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code associated with the provided tax identification number.<br>Currently used only for Indian PA-CB tax verification, when applicable.<br><br>**Constraints**: *Maximum Length*: `2` |
| `taxIdentificationNumber` | `string` | Required | The shopper’s tax identification number.<br><br>**Constraints**: *Maximum Length*: `20` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ShopperTaxInfo2 } from 'adyenlib';

const shopperTaxInfo2: ShopperTaxInfo2 = {
  taxCountryCode: 'taxCountryCode4',
  taxIdentificationNumber: 'taxIdentificationNumber4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

