
# Account Holder 11

Contains the full name of the person or entity that receives the payment funds).

## Structure

`AccountHolder11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullName` | `string` | Required | Full name of the account holder.<br><br>**Constraints**: *Minimum Length*: `1` |

## Example

```ts
import { AccountHolder11 } from 'adyen';

const accountHolder11: AccountHolder11 = {
  fullName: 'John Doe',
};
```

