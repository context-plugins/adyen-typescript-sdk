
# We Chat Pay Pos Info 2

Details to provide if `type` is **wechatpay_pos**.

## Structure

`WeChatPayPosInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactPersonName` | `string` | Required | The name of the contact person from merchant support. |
| `email` | `string` | Required | The email address of merchant support. |

## Example

```ts
import { WeChatPayPosInfo2 } from 'adyen';

const weChatPayPosInfo2: WeChatPayPosInfo2 = {
  contactPersonName: 'contactPersonName6',
  email: 'email4',
};
```

