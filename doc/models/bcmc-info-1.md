
# Bcmc Info 1

Details to provide if `type` is **bcmc** (Bancontact).

*This model accepts additional fields of type unknown.*

## Structure

`BcmcInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enableBcmcMobile` | `boolean \| undefined` | Optional | Indicates if [Bancontact mobile](https://docs.adyen.com/payment-methods/bancontact/bancontact-mobile) is enabled. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BcmcInfo1 } from 'adyen';

const bcmcInfo1: BcmcInfo1 = {
  enableBcmcMobile: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

