
# Online Donation Settings Response 2

The settings for online donations collected as part of the campaign.

*This model accepts additional fields of type unknown.*

## Structure

`OnlineDonationSettingsResponse2`

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
import { DonationType1, OnlineDonationSettingsResponse2 } from 'adyenlib';

const onlineDonationSettingsResponse2: OnlineDonationSettingsResponse2 = {
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
    },
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
    },
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
  defaultCurrency: 'defaultCurrency4',
  donationType: DonationType1.FixedAmounts,
  merchantAccounts: [
    'merchantAccounts0',
    'merchantAccounts1',
    'merchantAccounts2'
  ],
  storeIds: [
    'storeIds5',
    'storeIds6'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

