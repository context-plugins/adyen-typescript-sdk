
# We Chat Pay Info 2

Details to provide if `type` is **wechatpay**.

*This model accepts additional fields of type unknown.*

## Structure

`WeChatPayInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactPersonName` | `string` | Required | The name of the contact person from merchant support. |
| `email` | `string` | Required | The email address of merchant support. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WeChatPayInfo2 } from 'adyen';

const weChatPayInfo2: WeChatPayInfo2 = {
  contactPersonName: 'contactPersonName0',
  email: 'email0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

