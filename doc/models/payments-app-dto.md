
# Payments App Dto

## Structure

`PaymentsAppDto`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `installationId` | `string` | Required | The unique identifier of the Payments App instance. |
| `merchantAccountCode` | `string` | Required | The account code associated with the Payments App instance. |
| `merchantStoreCode` | `string \| undefined` | Optional | The store code associated with the Payments App instance. |
| `status` | `string` | Required | The status of the Payments App instance. |

## Example

```ts
import { PaymentsAppDto } from 'adyen';

const paymentsAppDto: PaymentsAppDto = {
  installationId: 'installationId6',
  merchantAccountCode: 'merchantAccountCode2',
  status: 'status2',
  merchantStoreCode: 'merchantStoreCode8',
};
```

