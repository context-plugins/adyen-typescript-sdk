
# Online Donation Settings Update

*This model accepts additional fields of type unknown.*

## Structure

`OnlineDonationSettingsUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultAmount` | [`OnlineDonationSettingsUpdateDefaultAmount \| undefined`](../../doc/models/containers/online-donation-settings-update-default-amount.md) | Optional | This is a container for one-of cases. |
| `donationType` | [`OnlineDonationSettingsUpdateDonationType \| undefined`](../../doc/models/containers/online-donation-settings-update-donation-type.md) | Optional | This is a container for one-of cases. |
| `merchantAccounts` | `string[] \| null \| undefined` | Optional | The merchant accounts for this sales channel that are associated with the donation campaign. |
| `storeIds` | `string[] \| null \| undefined` | Optional | The Adyen-generated unique identifiers of stores for this sales channel that are associated with the donation campaign. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DonationType, OnlineDonationSettingsUpdate } from 'adyen';

const onlineDonationSettingsUpdate: OnlineDonationSettingsUpdate = {
  defaultAmount: {
    amounts: [
      BigInt(40)
    ],
    currencyCode: 'currencyCode2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  donationType: DonationType.FixedAmountsRoundup,
  merchantAccounts: [
    'merchantAccounts4'
  ],
  storeIds: [
    'storeIds9',
    'storeIds0'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

