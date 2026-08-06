
# Donation Campaign Request

*This model accepts additional fields of type unknown.*

## Structure

`DonationCampaignRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderIds` | `string[] \| undefined` | Optional | The unique identifiers of the account holders associated with the donation campaign. |
| `inPerson` | [`InPersonDonationSettings \| undefined`](../../doc/models/in-person-donation-settings.md) | Optional | - |
| `name` | `string` | Required | The name of the donation campaign.<br><br>**Constraints**: *Minimum Length*: `1` |
| `nonprofitCauseId` | `string` | Required | The unique identifier of the nonprofit cause that the campaign supports.<br><br>**Constraints**: *Minimum Length*: `1` |
| `online` | [`OnlineDonationSettings \| undefined`](../../doc/models/online-donation-settings.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DisplayTextField2,
  DonationCampaignRequest,
  DonationFlow1,
  DonationType1,
} from 'adyen';

const donationCampaignRequest: DonationCampaignRequest = {
  name: 'name6',
  nonprofitCauseId: 'nonprofitCauseId0',
  accountHolderIds: [
    'accountHolderIds1'
  ],
  inPerson: {
    displayTextField: DisplayTextField2.CauseName,
    donationFlow: DonationFlow1.OneStep,
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
    presentCardTimeoutMs: BigInt(102),
    promptTimeoutMs: BigInt(66),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  online: {
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
    donationType: DonationType1.FixedAmounts,
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
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

