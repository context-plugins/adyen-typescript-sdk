
# Stored Value Void Request

*This model accepts additional fields of type unknown.*

## Structure

`StoredValueVoidRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `originalReference` | `string` | Required | The original pspReference of the payment to modify. |
| `reference` | `string \| undefined` | Optional | Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters. |
| `store` | `string \| undefined` | Optional | The physical store, for which this payment is processed.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16` |
| `tenderReference` | `string \| undefined` | Optional | The reference of the tender. |
| `uniqueTerminalId` | `string \| undefined` | Optional | The unique ID of a POS terminal. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StoredValueVoidRequest } from 'adyen';

const storedValueVoidRequest: StoredValueVoidRequest = {
  merchantAccount: 'merchantAccount2',
  originalReference: 'originalReference6',
  reference: 'reference4',
  store: 'store0',
  tenderReference: 'tenderReference2',
  uniqueTerminalId: 'uniqueTerminalId0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

