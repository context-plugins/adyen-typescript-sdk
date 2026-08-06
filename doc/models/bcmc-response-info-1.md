
# Bcmc Response Info 1

**bcmc** (Bancontact) details

*This model accepts additional fields of type unknown.*

## Structure

`BcmcResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enableBcmcMobile` | `boolean \| undefined` | Optional | Indicates if [Bancontact mobile](https://docs.adyen.com/payment-methods/bancontact/bancontact-mobile) is enabled. |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BcmcResponseInfo1, Type33 } from 'adyen';

const bcmcResponseInfo1: BcmcResponseInfo1 = {
  enableBcmcMobile: false,
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

