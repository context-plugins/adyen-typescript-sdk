
# We Chat Pay Info

## Structure

`WeChatPayInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactPersonName` | `string` | Required | The name of the contact person from merchant support. |
| `email` | `string` | Required | The email address of merchant support. |

## Example

```ts
import { WeChatPayInfo } from 'adyen';

const weChatPayInfo: WeChatPayInfo = {
  contactPersonName: 'contactPersonName8',
  email: 'email2',
};
```

