
# We Chat Pay Pos Info

*This model accepts additional fields of type unknown.*

## Structure

`WeChatPayPosInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactPersonName` | `string` | Required | The name of the contact person from merchant support. |
| `email` | `string` | Required | The email address of merchant support. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WeChatPayPosInfo } from 'adyenlib';

const weChatPayPosInfo: WeChatPayPosInfo = {
  contactPersonName: 'contactPersonName4',
  email: 'email6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

