
# Donation Campaign Request

## Structure

`DonationCampaignRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderIds` | `string[] \| undefined` | Optional | The unique identifiers of the account holders associated with the donation campaign. |
| `inPerson` | [`InPersonDonationSettings2 \| undefined`](../../doc/models/in-person-donation-settings-2.md) | Optional | The settings for in-person donations collected as part of the campaign. |
| `name` | `string` | Required | The name of the donation campaign.<br><br>**Constraints**: *Minimum Length*: `1` |
| `nonprofitCauseId` | `string` | Required | The unique identifier of the nonprofit cause that the campaign supports.<br><br>**Constraints**: *Minimum Length*: `1` |
| `online` | [`OnlineDonationSettings2 \| undefined`](../../doc/models/online-donation-settings-2.md) | Optional | The settings for online donations collected as part of the campaign. |

## Example

```ts
import {
  DisplayTextField2Enum,
  DonationCampaignRequest,
  DonationFlow1Enum,
  DonationType1Enum,
} from 'adyen';

const donationCampaignRequest: DonationCampaignRequest = {
  name: 'name6',
  nonprofitCauseId: 'nonprofitCauseId0',
  accountHolderIds: [
    'accountHolderIds1'
  ],
  inPerson: {
    displayTextField: DisplayTextField2Enum.CauseName,
    donationFlow: DonationFlow1Enum.OneStep,
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
    presentCardTimeoutMs: BigInt(102),
    promptTimeoutMs: BigInt(66),
  },
  online: {
    defaultAmount: {
      amounts: [
        BigInt(78),
        BigInt(79),
        BigInt(80)
      ],
      currencyCode: 'currencyCode6',
    },
    donationType: DonationType1Enum.FixedAmounts,
    merchantAccounts: [
      'merchantAccounts4',
      'merchantAccounts3',
      'merchantAccounts2'
    ],
    storeIds: [
      'storeIds9',
      'storeIds0',
      'storeIds1'
    ],
  },
};
```

