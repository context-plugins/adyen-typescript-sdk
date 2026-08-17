
# International Transaction Restriction

## Structure

`InternationalTransactionRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `boolean \| undefined` | Optional | Boolean indicating whether transaction is an international transaction.<br><br>Possible values:<br><br>- **true**: The transaction is an international transaction.<br><br>- **false**: The transaction is a domestic transaction. |

## Example

```ts
import { InternationalTransactionRestriction } from 'adyen';

const internationalTransactionRestriction: InternationalTransactionRestriction = {
  operation: 'operation0',
  value: false,
};
```

