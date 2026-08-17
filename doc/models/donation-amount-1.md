
# Donation Amount 1

The default amount for donations.

## Structure

`DonationAmount1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amounts` | `bigint[]` | Required | The donation amounts in minor units. The list must contain at least one amount and no more than three amounts.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `3` |
| `currencyCode` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).<br><br>**Constraints**: *Pattern*: `^[A-Z]{3}$` |

## Example

```ts
import { DonationAmount1 } from 'adyen';

const donationAmount1: DonationAmount1 = {
  amounts: [
    BigInt(248),
    BigInt(249),
    BigInt(250)
  ],
  currencyCode: 'currencyCode2',
};
```

