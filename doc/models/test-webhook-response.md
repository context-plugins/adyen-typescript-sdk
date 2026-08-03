
# Test Webhook Response

*This model accepts additional fields of type unknown.*

## Structure

`TestWebhookResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`TestOutput[] \| undefined`](../../doc/models/test-output.md) | Optional | List with test results. Each test webhook we send has a list element with the result. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TestWebhookResponse } from 'adyenlib';

const testWebhookResponse: TestWebhookResponse = {
  data: [
    {
      status: 'status2',
      merchantId: 'merchantId6',
      output: 'output8',
      requestSent: 'requestSent0',
      responseCode: 'responseCode0',
      responseTime: 'responseTime8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      status: 'status2',
      merchantId: 'merchantId6',
      output: 'output8',
      requestSent: 'requestSent0',
      responseCode: 'responseCode0',
      responseTime: 'responseTime8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      status: 'status2',
      merchantId: 'merchantId6',
      output: 'output8',
      requestSent: 'requestSent0',
      responseCode: 'responseCode0',
      responseTime: 'responseTime8',
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

