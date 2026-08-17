
# We Chat Pay Response Info

## Structure

`WeChatPayResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactPersonName` | `string \| undefined` | Optional | The name of the contact person from merchant support. |
| `email` | `string \| undefined` | Optional | The email address of merchant support. |

## Example

```ts
import { WeChatPayResponseInfo } from 'adyen';

const weChatPayResponseInfo: WeChatPayResponseInfo = {
  contactPersonName: 'contactPersonName8',
  email: 'email2',
};
```

