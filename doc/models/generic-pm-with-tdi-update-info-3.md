
# Generic Pm with Tdi Update Info 3

Details to provide if `type` is **diners**.
For merchants operating in Japan, Diners payments are processed through the JCB network. This means that you must include [JCB-specific fields](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings/(paymentMethodId)#request-jcb) in this object.

## Structure

`GenericPmWithTdiUpdateInfo3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiUpdateInfo3, Type8Enum } from 'adyen';

const genericPmWithTdiUpdateInfo3: GenericPmWithTdiUpdateInfo3 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

