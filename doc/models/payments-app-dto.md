
# Payments App Dto

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsAppDto`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `installationId` | `string` | Required | The unique identifier of the Payments App instance. |
| `merchantAccountCode` | `string` | Required | The account code associated with the Payments App instance. |
| `merchantStoreCode` | `string \| undefined` | Optional | The store code associated with the Payments App instance. |
| `status` | `string` | Required | The status of the Payments App instance. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentsAppDto } from 'adyenlib';

const paymentsAppDto: PaymentsAppDto = {
  installationId: 'installationId6',
  merchantAccountCode: 'merchantAccountCode2',
  status: 'status2',
  merchantStoreCode: 'merchantStoreCode8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

