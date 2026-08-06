
# Platform Payment Configuration

*This model accepts additional fields of type unknown.*

## Structure

`PlatformPaymentConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `salesDayClosingTime` | `string \| undefined` | Optional | Specifies at what time a sales day ends for this account.<br><br>Possible values: Time in **"HH:MM"** format. **HH** ranges from **00** to **07**. **MM** must be **00**.<br><br>Default value: **"00:00"**. |
| `settlementDelayDays` | `number \| undefined` | Optional | Specifies after how many business days the funds in a settlement batch are made available in this balance account. Requires Custom Sales Day Payout to be enabled for your balance account. Contact your account manager or implementation manager to enable this.<br><br>Possible values: **1** to **20**, or **null**.<br><br>Default value: **null**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlatformPaymentConfiguration } from 'adyen';

const platformPaymentConfiguration: PlatformPaymentConfiguration = {
  salesDayClosingTime: '2016-03-13T12:52:32.123Z',
  settlementDelayDays: 80,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

