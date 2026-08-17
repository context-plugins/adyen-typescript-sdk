
# Account Holder 1

## Structure

`AccountHolder1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullName` | `string` | Required | Full name of the account holder.<br><br>**Constraints**: *Minimum Length*: `1` |

## Example

```ts
import { AccountHolder1 } from 'adyen';

const accountHolder1: AccountHolder1 = {
  fullName: 'John Doe',
};
```

