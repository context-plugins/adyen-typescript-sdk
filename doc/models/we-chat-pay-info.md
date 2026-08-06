
# We Chat Pay Info

*This model accepts additional fields of type unknown.*

## Structure

`WeChatPayInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactPersonName` | `string` | Required | The name of the contact person from merchant support. |
| `email` | `string` | Required | The email address of merchant support. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WeChatPayInfo } from 'adyen';

const weChatPayInfo: WeChatPayInfo = {
  contactPersonName: 'contactPersonName8',
  email: 'email2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

