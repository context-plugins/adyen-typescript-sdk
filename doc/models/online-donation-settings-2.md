
# Online Donation Settings 2

The settings for online donations collected as part of the campaign.

## Structure

`OnlineDonationSettings2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultAmount` | [`DonationAmount1 \| undefined`](../../doc/models/donation-amount-1.md) | Optional | The default amount for donations. |
| `donationType` | [`DonationType1Enum \| undefined`](../../doc/models/donation-type-1-enum.md) | Optional | The type of donation to collect from the shopper. Possible values:<br><br>- **roundup**: Round up the transaction amount.<br><br>- **fixedAmounts**: Choose a fixed amount.<br><br>- **fixedAmountsRoundup**: Round up, or choose a fixed amount. |
| `merchantAccounts` | `string[] \| undefined` | Optional | The merchant accounts for this sales channel that are associated with the donation campaign. |
| `storeIds` | `string[] \| undefined` | Optional | The Adyen-generated unique identifiers of stores for this sales channel that are associated with the donation campaign. |

## Example

```ts
import { DonationType1Enum, OnlineDonationSettings2 } from 'adyen';

const onlineDonationSettings2: OnlineDonationSettings2 = {
  defaultAmount: {
    amounts: [
      BigInt(78),
      BigInt(79),
      BigInt(80)
    ],
    currencyCode: 'currencyCode6',
  },
  donationType: DonationType1Enum.FixedAmountsRoundup,
  merchantAccounts: [
    'merchantAccounts6',
    'merchantAccounts5',
    'merchantAccounts4'
  ],
  storeIds: [
    'storeIds9'
  ],
};
```

