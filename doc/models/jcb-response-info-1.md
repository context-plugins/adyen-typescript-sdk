
# Jcb Response Info 1

**jcb** details

*This model accepts additional fields of type unknown.*

## Structure

`JcbResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `midNumber` | `string \| undefined` | Optional | MID (Merchant ID) number. |
| `reuseMidNumber` | `boolean \| undefined` | Optional | Indicates whether the JCB Merchant ID is reused from a previously setup JCB payment method. |
| `serviceLevel` | `string \| undefined` | Optional | Specifies the service level (settlement type) of this payment method. |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { JcbResponseInfo1, Type33 } from 'adyen';

const jcbResponseInfo1: JcbResponseInfo1 = {
  midNumber: 'midNumber8',
  reuseMidNumber: false,
  serviceLevel: 'serviceLevel8',
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

