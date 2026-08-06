
# Donation Amount Update

*This model accepts additional fields of type unknown.*

## Structure

`DonationAmountUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amounts` | `bigint[] \| undefined` | Optional | The donation amounts in minor units. The list must contain at least one amount and no more than three amounts.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `3` |
| `currencyCode` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).<br><br>**Constraints**: *Pattern*: `^[A-Z]{3}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DonationAmountUpdate } from 'adyen';

const donationAmountUpdate: DonationAmountUpdate = {
  amounts: [
    BigInt(96),
    BigInt(97)
  ],
  currencyCode: 'currencyCode8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

