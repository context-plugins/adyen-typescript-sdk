
# Loyalty Data

In the Payment, Loyalty or Balance Inquiry Request message, it allows the Sale Terminal to send the identification of the loyalty account or an awarded amount or an amount to redeem to the loyalty account.
Data related to a Loyalty program or account.

## Structure

`LoyaltyData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardAcquisitionReference` | [`TransactionIDType3 \| undefined`](../../doc/models/transaction-id-type-3.md) | Optional | Reference to the last CardAcquisition, to use the same card.<br>If the loyalty account ID comes from a previous CardAcquisition. |
| `loyaltyAccountID` | [`LoyaltyAccountID1 \| undefined`](../../doc/models/loyalty-account-id-1.md) | Optional | Identification of a Loyalty account.<br>If loyalty identification of the loyalty account is realised by the Sale System. |

## Example

```ts
import {
  EntryModeEnum,
  IdentificationSupport1Enum,
  IdentificationType11Enum,
  LoyaltyData,
} from 'adyen';

const loyaltyData: LoyaltyData = {
  cardAcquisitionReference: {
    transactionID: 'TransactionID8',
    timeStamp: '2016-03-13T12:52:32.123Z',
  },
  loyaltyAccountID: {
    entryMode: [
      EntryModeEnum.File
    ],
    identificationType: IdentificationType11Enum.ISOTrack2,
    loyaltyID: 'LoyaltyID4',
    identificationSupport: IdentificationSupport1Enum.HybridCard,
  },
};
```

