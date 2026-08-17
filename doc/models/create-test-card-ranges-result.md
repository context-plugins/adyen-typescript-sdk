
# Create Test Card Ranges Result

## Structure

`CreateTestCardRangesResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rangeCreationResults` | [`TestCardRangeCreationResult[]`](../../doc/models/test-card-range-creation-result.md) | Required | The results of the test card creation. |

## Example

```ts
import { CreateTestCardRangesResult, CreationResultCodeEnum } from 'adyen';

const createTestCardRangesResult: CreateTestCardRangesResult = {
  rangeCreationResults: [
    {
      cardNumberRangeEnd: 'cardNumberRangeEnd6',
      cardNumberRangeStart: 'cardNumberRangeStart8',
      creationResultCode: CreationResultCodeEnum.ALREADYEXISTS,
      message: 'message0',
    }
  ],
};
```

