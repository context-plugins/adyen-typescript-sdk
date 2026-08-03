
# Loyalty Data

In the Payment, Loyalty or Balance Inquiry Request message, it allows the Sale Terminal to send the identification of the loyalty account or an awarded amount or an amount to redeem to the loyalty account.
Data related to a Loyalty program or account.

*This model accepts additional fields of type unknown.*

## Structure

`LoyaltyData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardAcquisitionReference` | [`CardAcquisitionReference \| undefined`](../../doc/models/card-acquisition-reference.md) | Optional | - |
| `loyaltyAccountId` | [`LoyaltyAccountId3 \| undefined`](../../doc/models/loyalty-account-id-3.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EntryMode,
  IdentificationSupport1,
  IdentificationType11,
  LoyaltyData,
} from 'adyenlib';

const loyaltyData: LoyaltyData = {
  cardAcquisitionReference: {
    transactionId: 'TransactionID8',
    timeStamp: '2016-03-13T12:52:32.123Z',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  loyaltyAccountId: {
    entryMode: [
      EntryMode.File
    ],
    identificationType: IdentificationType11.IsoTrack2,
    loyaltyId: 'LoyaltyID4',
    identificationSupport: IdentificationSupport1.HybridCard,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

