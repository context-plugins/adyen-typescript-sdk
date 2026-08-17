
# Google Pay Response Info 1

**googlepay** details

## Structure

`GooglePayResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string \| undefined` | Optional | Google Pay [Merchant ID] |
| `reuseMerchantId` | `boolean \| undefined` | Optional | Indicates whether the Google Pay Merchant ID is used for several merchant accounts. |

## Example

```ts
import { GooglePayResponseInfo1 } from 'adyen';

const googlePayResponseInfo1: GooglePayResponseInfo1 = {
  merchantId: 'merchantId6',
  reuseMerchantId: false,
};
```

