
# We Chat Pay Pos Response Info 2

**wechatpay_pos** details

*This model accepts additional fields of type unknown.*

## Structure

`WeChatPayPosResponseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactPersonName` | `string \| undefined` | Optional | The name of the contact person from merchant support. |
| `email` | `string \| undefined` | Optional | The email address of merchant support. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WeChatPayPosResponseInfo2 } from 'adyen';

const weChatPayPosResponseInfo2: WeChatPayPosResponseInfo2 = {
  contactPersonName: 'contactPersonName8',
  email: 'email2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

