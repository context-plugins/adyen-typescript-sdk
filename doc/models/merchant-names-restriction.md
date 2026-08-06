
# Merchant Names Restriction

*This model accepts additional fields of type unknown.*

## Structure

`MerchantNamesRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`StringMatch[] \| undefined`](../../doc/models/string-match.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MerchantNamesRestriction, Operation } from 'adyen';

const merchantNamesRestriction: MerchantNamesRestriction = {
  operation: 'operation0',
  value: [
    {
      operation: Operation.IsEqualTo,
      value: 'value4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      operation: Operation.IsEqualTo,
      value: 'value4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      operation: Operation.IsEqualTo,
      value: 'value4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

