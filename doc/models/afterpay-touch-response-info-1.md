
# Afterpay Touch Response Info 1

**afterpaytouch** details

*This model accepts additional fields of type unknown.*

## Structure

`AfterpayTouchResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `supportEmail` | `string \| undefined` | Optional | Support Email |
| `supportUrl` | `string \| undefined` | Optional | Support Url |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AfterpayTouchResponseInfo1 } from 'adyen';

const afterpayTouchResponseInfo1: AfterpayTouchResponseInfo1 = {
  supportEmail: 'supportEmail6',
  supportUrl: 'supportUrl2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

