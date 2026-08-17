
# Bcmc Response Info 1

**bcmc** (Bancontact) details

## Structure

`BcmcResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enableBcmcMobile` | `boolean \| undefined` | Optional | Indicates if [Bancontact mobile](https://docs.adyen.com/payment-methods/bancontact/bancontact-mobile) is enabled. |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { BcmcResponseInfo1, Type8Enum } from 'adyen';

const bcmcResponseInfo1: BcmcResponseInfo1 = {
  enableBcmcMobile: false,
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

