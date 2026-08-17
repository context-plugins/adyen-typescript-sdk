
# Disable Permit Request

## Structure

`DisablePermitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `token` | `string` | Required | The permit token to disable. |

## Example

```ts
import { DisablePermitRequest } from 'adyen';

const disablePermitRequest: DisablePermitRequest = {
  merchantAccount: 'merchantAccount8',
  token: 'token0',
};
```

