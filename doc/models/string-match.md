
# String Match

## Structure

`StringMatch`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | [`OperationEnum \| undefined`](../../doc/models/operation-enum.md) | Optional | The type of string matching operation. Possible values:  **startsWith**, **endsWith**, **isEqualTo**, **contains**, |
| `value` | `string \| undefined` | Optional | The string to be matched. |

## Example

```ts
import { OperationEnum, StringMatch } from 'adyen';

const stringMatch: StringMatch = {
  operation: OperationEnum.IsEqualTo,
  value: 'value0',
};
```

