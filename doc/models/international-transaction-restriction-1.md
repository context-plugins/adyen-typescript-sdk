
# International Transaction Restriction 1

Indicates whether transaction is an international transaction and specifies the operation.

Supported operations: **equals**, **notEquals**.

## Structure

`InternationalTransactionRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `boolean \| undefined` | Optional | Boolean indicating whether transaction is an international transaction.<br><br>Possible values:<br><br>- **true**: The transaction is an international transaction.<br><br>- **false**: The transaction is a domestic transaction. |

## Example

```ts
import { InternationalTransactionRestriction1 } from 'adyen';

const internationalTransactionRestriction1: InternationalTransactionRestriction1 = {
  operation: 'operation8',
  value: false,
};
```

