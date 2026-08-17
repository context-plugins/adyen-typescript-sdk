
# Merchant Names Restriction 1

List of names that will be compared to the merchant name according to the matching type.

Supported operations: **anyMatch**, **noneMatch**.

## Structure

`MerchantNamesRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`StringMatch[] \| undefined`](../../doc/models/string-match.md) | Optional | - |

## Example

```ts
import { MerchantNamesRestriction1, OperationEnum } from 'adyen';

const merchantNamesRestriction1: MerchantNamesRestriction1 = {
  operation: 'operation4',
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

