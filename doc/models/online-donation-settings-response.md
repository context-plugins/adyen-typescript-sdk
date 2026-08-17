
# Online Donation Settings Response

## Structure

`OnlineDonationSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amounts` | [`DonationAmount[] \| undefined`](../../doc/models/donation-amount.md) | Optional | The currency and fixed amounts for donations. We automatically add calculated amounts in other currencies for participating stores that use a different currency than the default. |
| `defaultCurrency` | `string \| undefined` | Optional | The currency that was used in the request to set fixed donation amounts. Format: three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes). |
| `donationType` | [`DonationType1Enum \| undefined`](../../doc/models/donation-type-1-enum.md) | Optional | The type of donation to collect from the shopper. Possible values:<br><br>- **roundup**: Round up the transaction amount.<br><br>- **fixedAmounts**: Choose a fixed amount.<br><br>- **fixedAmountsRoundup**: Round up, or choose a fixed amount. |
| `merchantAccounts` | `string[] \| undefined` | Optional | The merchant accounts for this sales channel that are associated with the donation campaign. |
| `storeIds` | `string[] \| undefined` | Optional | The Adyen-generated unique identifiers of stores for this sales channel that are associated with the donation campaign. |

## Example

```ts
import { DonationType1Enum, OnlineDonationSettingsResponse } from 'adyen';

const onlineDonationSettingsResponse: OnlineDonationSettingsResponse = {
  amounts: [
    {
      amounts: [
        BigInt(48),
        BigInt(49),
        BigInt(50)
      ],
      currencyCode: 'currencyCode6',
    }
  ],
  defaultCurrency: 'defaultCurrency8',
  donationType: DonationType1Enum.FixedAmountsRoundup,
  merchantAccounts: [
    'merchantAccounts2',
    'merchantAccounts1'
  ],
  storeIds: [
    'storeIds7'
  ],
};
```

