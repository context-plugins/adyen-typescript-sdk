
# Additional Bank Identification 1

Additional identification codes of the bank. Some banks may require these identifiers for cross-border transfers.

*This model accepts additional fields of type unknown.*

## Structure

`AdditionalBankIdentification1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | The value of the additional bank identification. |
| `type` | [`AdditionalBankIdentificationType \| undefined`](../../doc/models/additional-bank-identification-type.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AdditionalBankIdentification1,
  AdditionalBankIdentificationType,
} from 'adyen';

const additionalBankIdentification1: AdditionalBankIdentification1 = {
  code: 'code4',
  type: AdditionalBankIdentificationType.GbSortCode,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

