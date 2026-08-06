
# Diners Info 1

Details to provide if `type` is **diners**.
For merchants operating in Japan, Diners payments are processed through the JCB network. This means that you must include [JCB-specific fields](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings/(paymentMethodId)#request-jcb) in this object.

*This model accepts additional fields of type unknown.*

## Structure

`DinersInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `midNumber` | `string \| undefined` | Optional | MID (Merchant ID) number. Required for merchants operating in Japan.<br>Format: 14 numeric characters.<br><br>**Constraints**: *Maximum Length*: `14` |
| `reuseMidNumber` | `boolean` | Required | Indicates whether the JCB Merchant ID is reused from a previously configured JCB payment method.<br>The default value is **false**.<br>For merchants operating in Japan, this field is required and must be set to **true**. |
| `serviceLevel` | [`ServiceLevel1 \| undefined`](../../doc/models/service-level-1.md) | Optional | - |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DinersInfo1, ServiceLevel1, Type33 } from 'adyen';

const dinersInfo1: DinersInfo1 = {
  reuseMidNumber: false,
  midNumber: 'midNumber8',
  serviceLevel: ServiceLevel1.NoContract,
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

