
# Online Donation Settings Update

## Structure

`OnlineDonationSettingsUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultAmount` | [`OnlineDonationSettingsUpdateDefaultAmount \| null \| undefined`](../../doc/models/containers/online-donation-settings-update-default-amount.md) | Optional | This is a container for one-of cases. |
| `donationType` | [`OnlineDonationSettingsUpdateDonationType \| null \| undefined`](../../doc/models/containers/online-donation-settings-update-donation-type.md) | Optional | This is a container for one-of cases. |
| `merchantAccounts` | `string[] \| null \| undefined` | Optional | The merchant accounts for this sales channel that are associated with the donation campaign. |
| `storeIds` | `string[] \| null \| undefined` | Optional | The Adyen-generated unique identifiers of stores for this sales channel that are associated with the donation campaign. |

## Example

```ts
import { DonationTypeEnum, OnlineDonationSettingsUpdate } from 'adyen';

const onlineDonationSettingsUpdate: OnlineDonationSettingsUpdate = {
  defaultAmount: {
    amounts: [
      BigInt(40)
    ],
    currencyCode: 'currencyCode2',
  },
  donationType: DonationTypeEnum.FixedAmountsRoundup,
  merchantAccounts: [
    'merchantAccounts4'
  ],
  storeIds: [
    'storeIds9',
    'storeIds0'
  ],
};
```

