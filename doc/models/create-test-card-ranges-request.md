
# Create Test Card Ranges Request

*This model accepts additional fields of type unknown.*

## Structure

`CreateTestCardRangesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string` | Required | The code of the account, for which the test card ranges should be created. |
| `accountTypeCode` | `string` | Required | The type of the account, for which the test card ranges should be created.<br><br>Permitted values:<br><br>* Company<br>* MerchantAccount<br><br>> These values are case-sensitive. |
| `testCardRanges` | [`TestCardRange[]`](../../doc/models/test-card-range.md) | Required | A list of test card ranges to create. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CreateTestCardRangesRequest,
  ExpiryMonth,
  ThreeDDirectoryServerResponse,
} from 'adyen';

const createTestCardRangesRequest: CreateTestCardRangesRequest = {
  accountCode: 'accountCode6',
  accountTypeCode: 'accountTypeCode0',
  testCardRanges: [
    {
      cardHolderName: 'cardHolderName0',
      expiryMonth: ExpiryMonth.December,
      expiryYear: 138,
      rangeEnd: 'rangeEnd6',
      rangeStart: 'rangeStart4',
      address: {
        streetAddress: 'streetAddress6',
        zip: 'zip0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      cvc: 'cvc0',
      threeDDirectoryServerResponse: ThreeDDirectoryServerResponse.N,
      threeDPassword: 'threeDPassword2',
      threeDUsername: 'threeDUsername8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

