
# Additional Bank Identification

*This model accepts additional fields of type unknown.*

## Structure

`AdditionalBankIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | The value of the additional bank identification. |
| `type` | [`AdditionalBankIdentificationType \| undefined`](../../doc/models/additional-bank-identification-type.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AdditionalBankIdentification,
  AdditionalBankIdentificationType,
} from 'adyenlib';

const additionalBankIdentification: AdditionalBankIdentification = {
  code: 'code2',
  type: AdditionalBankIdentificationType.GbSortCode,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

