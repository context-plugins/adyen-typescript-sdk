
# Donation Amount Update

## Structure

`DonationAmountUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amounts` | `bigint[] \| undefined` | Optional | The donation amounts in minor units. The list must contain at least one amount and no more than three amounts.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `3` |
| `currencyCode` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).<br><br>**Constraints**: *Pattern*: `^[A-Z]{3}$` |

## Example

```ts
import { DonationAmountUpdate } from 'adyen';

const donationAmountUpdate: DonationAmountUpdate = {
  amounts: [
    BigInt(96),
    BigInt(97)
  ],
  currencyCode: 'currencyCode8',
};
```

