
# M Configuration

*This model accepts additional fields of type unknown.*

## Structure

`MConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | `string` | Required | Payment method, like **eftpos_australia** or **mc**. See the [possible values](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api). |
| `commercial` | `boolean \| undefined` | Optional | Set to **true** to apply surcharges only to commercial/business cards. |
| `country` | `string[] \| undefined` | Optional | The country/region of the card issuer. If used, the surcharge settings only apply to the card issued in that country/region. |
| `currencies` | [`Currency[]`](../../doc/models/currency.md) | Required | Currency and percentage or amount of the surcharge. |
| `sources` | `string[] \| undefined` | Optional | Funding source. Possible values:<br><br>* **Credit**<br>* **Debit** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MConfiguration } from 'adyenlib';

const configuration: MConfiguration = {
  brand: 'brand0',
  currencies: [
    {
      currencyCode: 'currencyCode6',
      amount: 208,
      maxAmount: 98,
      percentage: 191.04,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  commercial: false,
  country: [
    'country7',
    'country8',
    'country9'
  ],
  sources: [
    'sources8'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

