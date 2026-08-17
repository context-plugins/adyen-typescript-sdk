
# Bcmc Info 1

Details to provide if `type` is **bcmc** (Bancontact).

## Structure

`BcmcInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enableBcmcMobile` | `boolean \| undefined` | Optional | Indicates if [Bancontact mobile](https://docs.adyen.com/payment-methods/bancontact/bancontact-mobile) is enabled. |

## Example

```ts
import { BcmcInfo1 } from 'adyen';

const bcmcInfo1: BcmcInfo1 = {
  enableBcmcMobile: false,
};
```

