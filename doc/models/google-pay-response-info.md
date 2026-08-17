
# Google Pay Response Info

## Structure

`GooglePayResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string \| undefined` | Optional | Google Pay [Merchant ID] |
| `reuseMerchantId` | `boolean \| undefined` | Optional | Indicates whether the Google Pay Merchant ID is used for several merchant accounts. |

## Example

```ts
import { GooglePayResponseInfo } from 'adyen';

const googlePayResponseInfo: GooglePayResponseInfo = {
  merchantId: 'merchantId4',
  reuseMerchantId: false,
};
```

