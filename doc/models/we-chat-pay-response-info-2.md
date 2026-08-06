
# We Chat Pay Response Info 2

**wechatpay** details

*This model accepts additional fields of type unknown.*

## Structure

`WeChatPayResponseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactPersonName` | `string \| undefined` | Optional | The name of the contact person from merchant support. |
| `email` | `string \| undefined` | Optional | The email address of merchant support. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WeChatPayResponseInfo2 } from 'adyen';

const weChatPayResponseInfo2: WeChatPayResponseInfo2 = {
  contactPersonName: 'contactPersonName8',
  email: 'email2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

