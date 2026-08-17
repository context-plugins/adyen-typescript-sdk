
# Disable Permit Result

## Structure

`DisablePermitResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pspReference` | `string \| undefined` | Optional | A unique reference associated with the request. This value is globally unique; quote it when communicating with us about this request. |
| `status` | `string \| undefined` | Optional | Status of the disable request. |

## Example

```ts
import { DisablePermitResult } from 'adyen';

const disablePermitResult: DisablePermitResult = {
  pspReference: 'pspReference8',
  status: 'status8',
};
```

