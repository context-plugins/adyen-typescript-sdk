
# Google Pay Response Info

*This model accepts additional fields of type unknown.*

## Structure

`GooglePayResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string \| undefined` | Optional | Google Pay [Merchant ID] |
| `reuseMerchantId` | `boolean \| undefined` | Optional | Indicates whether the Google Pay Merchant ID is used for several merchant accounts. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GooglePayResponseInfo } from 'adyen';

const googlePayResponseInfo: GooglePayResponseInfo = {
  merchantId: 'merchantId4',
  reuseMerchantId: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

