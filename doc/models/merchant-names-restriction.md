
# Merchant Names Restriction

## Structure

`MerchantNamesRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`StringMatch[] \| undefined`](../../doc/models/string-match.md) | Optional | - |

## Example

```ts
import { MerchantNamesRestriction, OperationEnum } from 'adyen';

const merchantNamesRestriction: MerchantNamesRestriction = {
  operation: 'operation0',
  value: [
    {
      operation: OperationEnum.IsEqualTo,
      value: 'value4',
    },
    {
      operation: OperationEnum.IsEqualTo,
      value: 'value4',
    },
    {
      operation: OperationEnum.IsEqualTo,
      value: 'value4',
    }
  ],
};
```

