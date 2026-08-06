
# Bcmc Info

*This model accepts additional fields of type unknown.*

## Structure

`BcmcInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enableBcmcMobile` | `boolean \| undefined` | Optional | Indicates if [Bancontact mobile](https://docs.adyen.com/payment-methods/bancontact/bancontact-mobile) is enabled. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BcmcInfo } from 'adyen';

const bcmcInfo: BcmcInfo = {
  enableBcmcMobile: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

