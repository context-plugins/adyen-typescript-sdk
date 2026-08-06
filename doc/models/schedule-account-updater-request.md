
# Schedule Account Updater Request

*This model accepts additional fields of type unknown.*

## Structure

`ScheduleAccountUpdaterRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular request. |
| `card` | [`Card6 \| undefined`](../../doc/models/card-6.md) | Optional | - |
| `merchantAccount` | `string` | Required | Account of the merchant. |
| `reference` | `string` | Required | A reference that merchants can apply for the call. |
| `selectedRecurringDetailReference` | `string \| undefined` | Optional | The selected detail recurring reference.<br><br>Optional if `card` is provided. |
| `shopperReference` | `string \| undefined` | Optional | The reference of the shopper that owns the recurring contract.<br><br>Optional if `card` is provided. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ScheduleAccountUpdaterRequest } from 'adyen';

const scheduleAccountUpdaterRequest: ScheduleAccountUpdaterRequest = {
  merchantAccount: 'merchantAccount2',
  reference: 'reference6',
  additionalData: {
    'key0': 'additionalData0'
  },
  card: {
    cvc: 'cvc0',
    expiryMonth: 'expiryMonth0',
    expiryYear: 'expiryYear0',
    holderName: 'holderName2',
    issueNumber: 'issueNumber8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  selectedRecurringDetailReference: 'selectedRecurringDetailReference0',
  shopperReference: 'shopperReference8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

