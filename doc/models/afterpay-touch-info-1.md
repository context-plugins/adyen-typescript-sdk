
# Afterpay Touch Info 1

Details to provide if `type` is **afterpaytouch**.

## Structure

`AfterpayTouchInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `supportEmail` | `string \| undefined` | Optional | Support Email |
| `supportUrl` | `string` | Required | Support Url |

## Example

```ts
import { AfterpayTouchInfo1 } from 'adyen';

const afterpayTouchInfo1: AfterpayTouchInfo1 = {
  supportUrl: 'supportUrl2',
  supportEmail: 'supportEmail6',
};
```

