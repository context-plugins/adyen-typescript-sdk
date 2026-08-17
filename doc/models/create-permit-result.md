
# Create Permit Result

## Structure

`CreatePermitResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `permitResultList` | [`PermitResult[] \| undefined`](../../doc/models/permit-result.md) | Optional | List of new permits. |
| `pspReference` | `string \| undefined` | Optional | A unique reference associated with the request. This value is globally unique; quote it when communicating with us about this request. |

## Example

```ts
import { CreatePermitResult } from 'adyen';

const createPermitResult: CreatePermitResult = {
  permitResultList: [
    {
      resultKey: 'resultKey4',
      token: 'token6',
    },
    {
      resultKey: 'resultKey4',
      token: 'token6',
    }
  ],
  pspReference: 'pspReference0',
};
```

