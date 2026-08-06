
# Response Additional Data Domestic Error

*This model accepts additional fields of type unknown.*

## Structure

`ResponseAdditionalDataDomesticError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domesticRefusalReasonRaw` | `string \| undefined` | Optional | The reason the transaction was declined, given by the local issuer.<br>Currently available for merchants in Japan. |
| `domesticShopperAdvice` | `string \| undefined` | Optional | The action the shopper should take, in a local language.<br>Currently available in Japanese, for merchants in Japan. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ResponseAdditionalDataDomesticError } from 'adyen';

const responseAdditionalDataDomesticError: ResponseAdditionalDataDomesticError = {
  domesticRefusalReasonRaw: 'domesticRefusalReasonRaw6',
  domesticShopperAdvice: 'domesticShopperAdvice8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

