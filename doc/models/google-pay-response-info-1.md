
# Google Pay Response Info 1

**googlepay** details

*This model accepts additional fields of type unknown.*

## Structure

`GooglePayResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string \| undefined` | Optional | Google Pay [Merchant ID] |
| `reuseMerchantId` | `boolean \| undefined` | Optional | Indicates whether the Google Pay Merchant ID is used for several merchant accounts. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GooglePayResponseInfo1 } from 'adyenlib';

const googlePayResponseInfo1: GooglePayResponseInfo1 = {
  merchantId: 'merchantId6',
  reuseMerchantId: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

