
# HU Local Account Identification

## Structure

`HULocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 24-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `24`, *Maximum Length*: `24` |
| `type` | `string` | Required, Constant | **huLocal**<br><br>**Value**: `'huLocal'` |

## Example

```ts
import { HULocalAccountIdentification } from 'adyen';

const hULocalAccountIdentification: HULocalAccountIdentification = {
  accountNumber: 'accountNumber4',
  type: 'huLocal',
};
```

