
# Diners Response Info 1

**diners** details

*This model accepts additional fields of type unknown.*

## Structure

`DinersResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `midNumber` | `string \| undefined` | Optional | MID (Merchant ID) number. |
| `reuseMidNumber` | `boolean \| undefined` | Optional | Indicates whether the JCB Merchant ID is reused from a previously configured JCB payment method. |
| `serviceLevel` | `string \| undefined` | Optional | The service level (settlement type) of this payment method. Possible values:<br><br>* **noContract**: Adyen holds the contract with JCB.<br>* **gatewayContract**: JCB receives the settlement and handles disputes, then pays out to you or your sub-merchant directly. |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DinersResponseInfo1, Type33 } from 'adyen';

const dinersResponseInfo1: DinersResponseInfo1 = {
  midNumber: 'midNumber4',
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

