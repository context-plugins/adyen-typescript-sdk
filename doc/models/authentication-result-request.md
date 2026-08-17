
# Authentication Result Request

## Structure

`AuthenticationResultRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which the authentication was processed. |
| `pspReference` | `string` | Required | The pspReference identifier for the transaction. |

## Example

```ts
import { AuthenticationResultRequest } from 'adyen';

const authenticationResultRequest: AuthenticationResultRequest = {
  merchantAccount: 'merchantAccount2',
  pspReference: 'pspReference2',
};
```

