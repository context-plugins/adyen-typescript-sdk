
# Generic Pm with Tdi Info 2

Details to provide if `type` is **discover**.
For merchants operating in Japan, request [Diners](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings/(paymentMethodId)#request-diners) payment method instead. Discover is automatically requested, together with Diners.

## Structure

`GenericPmWithTdiInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { GenericPmWithTdiInfo2, Type8Enum } from 'adyen';

const genericPmWithTdiInfo2: GenericPmWithTdiInfo2 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

