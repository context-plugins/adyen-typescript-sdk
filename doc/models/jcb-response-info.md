
# JCB Response Info

## Structure

`JCBResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `midNumber` | `string \| undefined` | Optional | MID (Merchant ID) number. |
| `reuseMidNumber` | `boolean \| undefined` | Optional | Indicates whether the JCB Merchant ID is reused from a previously setup JCB payment method. |
| `serviceLevel` | `string \| undefined` | Optional | Specifies the service level (settlement type) of this payment method. |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { JCBResponseInfo, Type8Enum } from 'adyen';

const jCBResponseInfo: JCBResponseInfo = {
  midNumber: 'midNumber8',
  reuseMidNumber: false,
  serviceLevel: 'serviceLevel2',
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

