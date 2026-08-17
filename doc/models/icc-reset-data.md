
# ICC Reset Data

## Structure

`ICCResetData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aTRValue` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^.{1,100}$` |
| `cardStatusWords` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^.{2,2}$` |

## Example

```ts
import { ICCResetData } from 'adyen';

const iCCResetData: ICCResetData = {
  aTRValue: 'ATRValue2',
  cardStatusWords: 'CardStatusWords2',
};
```

