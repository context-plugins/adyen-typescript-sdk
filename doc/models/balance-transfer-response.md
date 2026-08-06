
# Balance Transfer Response

*This model accepts additional fields of type unknown.*

## Structure

`BalanceTransferResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdAt` | `string` | Required | The date when the balance transfer was performed. |
| `pspReference` | `string` | Required | Adyen's 16-character string reference associated with the balance transfer. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BalanceTransferResponse } from 'adyen';

const balanceTransferResponse: BalanceTransferResponse = {
  createdAt: '2016-03-13T12:52:32.123Z',
  pspReference: 'pspReference6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

