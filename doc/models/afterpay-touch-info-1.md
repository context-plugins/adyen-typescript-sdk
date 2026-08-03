
# Afterpay Touch Info 1

Details to provide if `type` is **afterpaytouch**.

*This model accepts additional fields of type unknown.*

## Structure

`AfterpayTouchInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `supportEmail` | `string \| undefined` | Optional | Support Email |
| `supportUrl` | `string` | Required | Support Url |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AfterpayTouchInfo1 } from 'adyenlib';

const afterpayTouchInfo1: AfterpayTouchInfo1 = {
  supportUrl: 'supportUrl2',
  supportEmail: 'supportEmail6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

