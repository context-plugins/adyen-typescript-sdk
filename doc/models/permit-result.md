
# Permit Result

## Structure

`PermitResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `resultKey` | `string \| undefined` | Optional | The key to link permit requests to permit results. |
| `token` | `string \| undefined` | Optional | The permit token which is used to make payments by the partner company. |

## Example

```ts
import { PermitResult } from 'adyen';

const permitResult: PermitResult = {
  resultKey: 'resultKey4',
  token: 'token6',
};
```

