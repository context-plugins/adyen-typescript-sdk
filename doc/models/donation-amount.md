
# Donation Amount

*This model accepts additional fields of type unknown.*

## Structure

`DonationAmount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amounts` | `bigint[]` | Required | The donation amounts in minor units. The list must contain at least one amount and no more than three amounts.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `3` |
| `currencyCode` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).<br><br>**Constraints**: *Pattern*: `^[A-Z]{3}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DonationAmount } from 'adyenlib';

const donationAmount: DonationAmount = {
  amounts: [
    BigInt(204),
    BigInt(205),
    BigInt(206)
  ],
  currencyCode: 'currencyCode4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

