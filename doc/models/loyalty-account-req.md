
# Loyalty Account Req

## Structure

`LoyaltyAccountReq`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardAcquisitionReference` | [`TransactionIDType \| undefined`](../../doc/models/transaction-id-type.md) | Optional | Identification of a transaction for the Sale System or the POI System. |
| `loyaltyAccountID` | [`LoyaltyAccountID \| undefined`](../../doc/models/loyalty-account-id.md) | Optional | Identification of a Loyalty account.<br>In the Payment Request message, it allows to identify the loyalty account by the Sale Terminal instead of the POI Terminal (e.g. because the account identification is a bar-code read by the Cashier on a scanner device). |

## Example

```ts
import {
  EntryModeEnum,
  IdentificationSupport1Enum,
  IdentificationType11Enum,
  LoyaltyAccountReq,
} from 'adyen';

const loyaltyAccountReq: LoyaltyAccountReq = {
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

