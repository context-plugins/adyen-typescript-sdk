
# Test Card Range Creation Result

## Structure

`TestCardRangeCreationResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardNumberRangeEnd` | `string` | Required | The last test card number in the generated test card range.<br><br>Example: 5432 1234 1234 4321 |
| `cardNumberRangeStart` | `string` | Required | The first test card number in the generated test card range.<br><br>Example: 5432 1234 1234 1234 |
| `creationResultCode` | [`CreationResultCodeEnum`](../../doc/models/creation-result-code-enum.md) | Required | Notification message. It informs about the outcome of the operation. Possible values:<br><br>* CREATED<br>* ALREADY_EXISTS<br>* ERROR |
| `message` | `string \| undefined` | Optional | An optional information message about the result. |

## Example

```ts
import { CreationResultCodeEnum, TestCardRangeCreationResult } from 'adyen';

const testCardRangeCreationResult: TestCardRangeCreationResult = {
  cardNumberRangeEnd: 'cardNumberRangeEnd6',
  cardNumberRangeStart: 'cardNumberRangeStart8',
  creationResultCode: CreationResultCodeEnum.ERROR,
  message: 'message0',
};
```

