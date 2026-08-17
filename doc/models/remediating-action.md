
# Remediating Action

## Structure

`RemediatingAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | The remediating action code. |
| `message` | `string \| undefined` | Optional | A description of how you can resolve the verification error. |

## Example

```ts
import { RemediatingAction } from 'adyen';

const remediatingAction: RemediatingAction = {
  code: 'code6',
  message: 'message8',
};
```

