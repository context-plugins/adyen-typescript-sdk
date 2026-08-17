
# We Chat Pay Pos Info

## Structure

`WeChatPayPosInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactPersonName` | `string` | Required | The name of the contact person from merchant support. |
| `email` | `string` | Required | The email address of merchant support. |

## Example

```ts
import { WeChatPayPosInfo } from 'adyen';

const weChatPayPosInfo: WeChatPayPosInfo = {
  contactPersonName: 'contactPersonName4',
  email: 'email6',
};
```

