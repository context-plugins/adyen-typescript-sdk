
# Afterpay Touch Response Info

*This model accepts additional fields of type unknown.*

## Structure

`AfterpayTouchResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `supportEmail` | `string \| undefined` | Optional | Support Email |
| `supportUrl` | `string \| undefined` | Optional | Support Url |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AfterpayTouchResponseInfo } from 'adyenlib';

const afterpayTouchResponseInfo: AfterpayTouchResponseInfo = {
  supportEmail: 'supportEmail0',
  supportUrl: 'supportUrl4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

