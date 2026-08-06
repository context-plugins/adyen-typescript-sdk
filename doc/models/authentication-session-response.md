
# Authentication Session Response

*This model accepts additional fields of type unknown.*

## Structure

`AuthenticationSessionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the session. |
| `token` | `string \| undefined` | Optional | The session token created. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AuthenticationSessionResponse } from 'adyen';

const authenticationSessionResponse: AuthenticationSessionResponse = {
  id: 'id6',
  token: 'token0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

