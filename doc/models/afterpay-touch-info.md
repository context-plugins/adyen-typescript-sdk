
# Afterpay Touch Info

*This model accepts additional fields of type unknown.*

## Structure

`AfterpayTouchInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `supportEmail` | `string \| undefined` | Optional | Support Email |
| `supportUrl` | `string` | Required | Support Url |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AfterpayTouchInfo } from 'adyen';

const afterpayTouchInfo: AfterpayTouchInfo = {
  supportUrl: 'supportUrl4',
  supportEmail: 'supportEmail8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

