
# Donation Campaign Update

*This model accepts additional fields of type unknown.*

## Structure

`DonationCampaignUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderIds` | `string[] \| null \| undefined` | Optional | The unique identifiers of the account holders associated with the donation campaign. |
| `inPerson` | [`DonationCampaignUpdateInPerson \| undefined`](../../doc/models/containers/donation-campaign-update-in-person.md) | Optional | This is a container for one-of cases. |
| `name` | `string \| undefined` | Optional | The name of the donation campaign.<br><br>**Constraints**: *Minimum Length*: `1` |
| `online` | [`DonationCampaignUpdateOnline \| undefined`](../../doc/models/containers/donation-campaign-update-online.md) | Optional | This is a container for one-of cases. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DisplayTextField2,
  DonationCampaignUpdate,
  DonationFlow1,
  DonationType,
} from 'adyenlib';

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
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    displayTextField: DisplayTextField2.CauseName,
    donationFlow: DonationFlow1.OneStep,
    donationType: DonationType.FixedAmountsRoundup,
    merchantAccounts: [
      'merchantAccounts4'
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  name: 'name4',
  online: {
    defaultAmount: {
      amounts: [
        BigInt(40)
      ],
      currencyCode: 'currencyCode2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    donationType: DonationType.Roundup,
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
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

