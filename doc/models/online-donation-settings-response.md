
# Online Donation Settings Response

*This model accepts additional fields of type unknown.*

## Structure

`OnlineDonationSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amounts` | [`DonationAmount[] \| undefined`](../../doc/models/donation-amount.md) | Optional | The currency and fixed amounts for donations. We automatically add calculated amounts in other currencies for participating stores that use a different currency than the default. |
| `defaultCurrency` | `string \| undefined` | Optional | The currency that was used in the request to set fixed donation amounts. Format: three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes). |
| `donationType` | [`DonationType1 \| undefined`](../../doc/models/donation-type-1.md) | Optional | - |
| `merchantAccounts` | `string[] \| undefined` | Optional | The merchant accounts for this sales channel that are associated with the donation campaign. |
| `storeIds` | `string[] \| undefined` | Optional | The Adyen-generated unique identifiers of stores for this sales channel that are associated with the donation campaign. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DonationType1, OnlineDonationSettingsResponse } from 'adyenlib';

const onlineDonationSettingsResponse: OnlineDonationSettingsResponse = {
  amounts: [
    {
      amounts: [
        BigInt(48),
        BigInt(49),
        BigInt(50)
      ],
      currencyCode: 'currencyCode6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  defaultCurrency: 'defaultCurrency8',
  donationType: DonationType1.FixedAmountsRoundup,
  merchantAccounts: [
    'merchantAccounts2',
    'merchantAccounts1'
  ],
  storeIds: [
    'storeIds7'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

