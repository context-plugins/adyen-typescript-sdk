
# Generic Pm with Tdi Update Info 3

Details to provide if `type` is **diners**.
For merchants operating in Japan, Diners payments are processed through the JCB network. This means that you must include [JCB-specific fields](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings/(paymentMethodId)#request-jcb) in this object.

*This model accepts additional fields of type unknown.*

## Structure

`GenericPmWithTdiUpdateInfo3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GenericPmWithTdiUpdateInfo3, Type33 } from 'adyen';

const genericPmWithTdiUpdateInfo3: GenericPmWithTdiUpdateInfo3 = {
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type33.Fixed,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

