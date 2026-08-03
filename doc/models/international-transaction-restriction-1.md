
# International Transaction Restriction 1

Indicates whether transaction is an international transaction and specifies the operation.

Supported operations: **equals**, **notEquals**.

*This model accepts additional fields of type unknown.*

## Structure

`InternationalTransactionRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `boolean \| undefined` | Optional | Boolean indicating whether transaction is an international transaction.<br><br>Possible values:<br><br>- **true**: The transaction is an international transaction.<br><br>- **false**: The transaction is a domestic transaction. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InternationalTransactionRestriction1 } from 'adyenlib';

const internationalTransactionRestriction1: InternationalTransactionRestriction1 = {
  operation: 'operation8',
  value: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

