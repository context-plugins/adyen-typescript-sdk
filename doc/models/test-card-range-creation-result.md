
# Test Card Range Creation Result

*This model accepts additional fields of type unknown.*

## Structure

`TestCardRangeCreationResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardNumberRangeEnd` | `string` | Required | The last test card number in the generated test card range.<br><br>Example: 5432 1234 1234 4321 |
| `cardNumberRangeStart` | `string` | Required | The first test card number in the generated test card range.<br><br>Example: 5432 1234 1234 1234 |
| `creationResultCode` | [`CreationResultCode`](../../doc/models/creation-result-code.md) | Required | - |
| `message` | `string \| undefined` | Optional | An optional information message about the result. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreationResultCode, TestCardRangeCreationResult } from 'adyen';

const testCardRangeCreationResult: TestCardRangeCreationResult = {
  cardNumberRangeEnd: 'cardNumberRangeEnd6',
  cardNumberRangeStart: 'cardNumberRangeStart8',
  creationResultCode: CreationResultCode.Error,
  message: 'message0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

