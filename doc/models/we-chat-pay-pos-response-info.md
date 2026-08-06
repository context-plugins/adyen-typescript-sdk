
# We Chat Pay Pos Response Info

*This model accepts additional fields of type unknown.*

## Structure

`WeChatPayPosResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactPersonName` | `string \| undefined` | Optional | The name of the contact person from merchant support. |
| `email` | `string \| undefined` | Optional | The email address of merchant support. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WeChatPayPosResponseInfo } from 'adyen';

const weChatPayPosResponseInfo: WeChatPayPosResponseInfo = {
  contactPersonName: 'contactPersonName6',
  email: 'email4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

