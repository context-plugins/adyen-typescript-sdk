
# Donation Campaign Update

## Structure

`DonationCampaignUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderIds` | `string[] \| null \| undefined` | Optional | The unique identifiers of the account holders associated with the donation campaign. |
| `inPerson` | [`DonationCampaignUpdateInPerson \| null \| undefined`](../../doc/models/containers/donation-campaign-update-in-person.md) | Optional | This is a container for one-of cases. |
| `name` | `string \| undefined` | Optional | The name of the donation campaign.<br><br>**Constraints**: *Minimum Length*: `1` |
| `online` | [`DonationCampaignUpdateOnline \| null \| undefined`](../../doc/models/containers/donation-campaign-update-online.md) | Optional | This is a container for one-of cases. |

## Example

```ts
import {
  DisplayTextField2Enum,
  DonationCampaignUpdate,
  DonationFlow1Enum,
  DonationTypeEnum,
} from 'adyen';

const donationCampaignUpdate: DonationCampaignUpdate = {
  accountHolderIds: [
    'accountHolderIds9',
    'accountHolderIds0',
    'accountHolderIds1'
  ],
  inPerson: {
    defaultAmount: {
      amounts: [
        BigInt(40)
      ],
      currencyCode: 'currencyCode2',
    },
    displayTextField: DisplayTextField2Enum.CauseName,
    donationFlow: DonationFlow1Enum.OneStep,
    donationType: DonationTypeEnum.FixedAmountsRoundup,
    merchantAccounts: [
      'merchantAccounts4'
    ],
  },
  name: 'name4',
  online: {
    defaultAmount: {
      amounts: [
        BigInt(40)
      ],
      currencyCode: 'currencyCode2',
    },
    donationType: DonationTypeEnum.Roundup,
    merchantAccounts: [
      'merchantAccounts6',
      'merchantAccounts5',
      'merchantAccounts4'
    ],
    storeIds: [
      'storeIds1',
      'storeIds2',
      'storeIds3'
    ],
  },
};
```

