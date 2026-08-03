
# Disable Request

*This model accepts additional fields of type unknown.*

## Structure

`DisableRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contract` | `string \| undefined` | Optional | Specify the contract if you only want to disable a specific use.<br><br>This field can be set to one of the following values, or to their combination (comma-separated):<br><br>* ONECLICK<br>* RECURRING<br>* PAYOUT |
| `merchantAccount` | `string` | Required | The merchant account identifier with which you want to process the transaction. |
| `recurringDetailReference` | `string \| undefined` | Optional | The ID that uniquely identifies the recurring detail reference.<br><br>If it is not provided, the whole recurring contract of the `shopperReference` will be disabled, which includes all recurring details. |
| `shopperReference` | `string` | Required | The ID that uniquely identifies the shopper.<br><br>This `shopperReference` must be the same as the `shopperReference` used in the initial payment. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DisableRequest } from 'adyenlib';

const disableRequest: DisableRequest = {
  merchantAccount: 'merchantAccount4',
  shopperReference: 'shopperReference2',
  contract: 'contract4',
  recurringDetailReference: 'recurringDetailReference4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

