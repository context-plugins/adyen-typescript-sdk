
# Online Donation Settings 2

The settings for online donations collected as part of the campaign.

*This model accepts additional fields of type unknown.*

## Structure

`OnlineDonationSettings2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultAmount` | [`DonationAmount \| undefined`](../../doc/models/donation-amount.md) | Optional | - |
| `donationType` | [`DonationType1 \| undefined`](../../doc/models/donation-type-1.md) | Optional | - |
| `merchantAccounts` | `string[] \| undefined` | Optional | The merchant accounts for this sales channel that are associated with the donation campaign. |
| `storeIds` | `string[] \| undefined` | Optional | The Adyen-generated unique identifiers of stores for this sales channel that are associated with the donation campaign. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DonationType1, OnlineDonationSettings2 } from 'adyen';

const onlineDonationSettings2: OnlineDonationSettings2 = {
  defaultAmount: {
    amounts: [
      BigInt(78),
      BigInt(79),
      BigInt(80)
    ],
    currencyCode: 'currencyCode6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  donationType: DonationType1.FixedAmountsRoundup,
  merchantAccounts: [
    'merchantAccounts6',
    'merchantAccounts5',
    'merchantAccounts4'
  ],
  storeIds: [
    'storeIds9'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

