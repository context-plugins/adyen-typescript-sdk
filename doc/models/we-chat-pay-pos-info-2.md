
# We Chat Pay Pos Info 2

Details to provide if `type` is **wechatpay_pos**.

*This model accepts additional fields of type unknown.*

## Structure

`WeChatPayPosInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactPersonName` | `string` | Required | The name of the contact person from merchant support. |
| `email` | `string` | Required | The email address of merchant support. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WeChatPayPosInfo2 } from 'adyen';

const weChatPayPosInfo2: WeChatPayPosInfo2 = {
  contactPersonName: 'contactPersonName6',
  email: 'email4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

