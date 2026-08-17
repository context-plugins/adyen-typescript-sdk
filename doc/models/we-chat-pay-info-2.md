
# We Chat Pay Info 2

Details to provide if `type` is **wechatpay**.

## Structure

`WeChatPayInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactPersonName` | `string` | Required | The name of the contact person from merchant support. |
| `email` | `string` | Required | The email address of merchant support. |

## Example

```ts
import { WeChatPayInfo2 } from 'adyen';

const weChatPayInfo2: WeChatPayInfo2 = {
  contactPersonName: 'contactPersonName0',
  email: 'email0',
};
```

