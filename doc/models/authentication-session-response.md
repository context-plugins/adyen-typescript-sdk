
# Authentication Session Response

## Structure

`AuthenticationSessionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the session. |
| `token` | `string \| undefined` | Optional | The session token created. |

## Example

```ts
import { AuthenticationSessionResponse } from 'adyen';

const authenticationSessionResponse: AuthenticationSessionResponse = {
  id: 'id6',
  token: 'token0',
};
```

