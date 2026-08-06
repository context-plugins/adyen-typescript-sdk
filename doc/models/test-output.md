
# Test Output

*This model accepts additional fields of type unknown.*

## Structure

`TestOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string \| undefined` | Optional | Unique identifier of the merchant account that the notification is about. |
| `output` | `string \| undefined` | Optional | A short, human-readable explanation of the test result.<br><br>Your server must respond with **HTTP 2xx* for the test webhook to be successful (`data.status`: **success**). Find out more about [accepting notifications](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks)<br><br>You can use the value of this field together with the [`responseCode`](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/merchants/{merchantId}/webhooks/{id}/test__resParam_data-responseCode) value to troubleshoot unsuccessful test webhooks. |
| `requestSent` | `string \| undefined` | Optional | The [body of the notification webhook](https://docs.adyen.com/development-resources/webhooks/understand-notifications#notification-structure) that was sent to your server. |
| `responseCode` | `string \| undefined` | Optional | The HTTP response code for your server's response to the test webhook.<br><br>You can use the value of this field together with the the [`output`](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/merchants/{merchantId}/webhooks/{id}/test__resParam_data-output) field value to troubleshoot failed test webhooks. |
| `responseTime` | `string \| undefined` | Optional | The time between sending the test webhook and receiving the response from your server. You can use it as an indication of how long your server takes to process a webhook notification. Measured in milliseconds, for example **304 ms**. |
| `status` | `string` | Required | The status of the test request. Possible values are:<br><br>* **success**, `data.responseCode`: **2xx**.<br>* **failed**, in all other cases.<br><br>You can use the value of the [`output`](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/merchants/{merchantId}/webhooks/{id}/test__resParam_data-output) field together with the [`responseCode`](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/merchants/{merchantId}/webhooks/{id}/test__resParam_data-responseCode) value to troubleshoot failed test webhooks. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TestOutput } from 'adyen';

const testOutput: TestOutput = {
  status: 'status2',
  merchantId: 'merchantId6',
  output: 'output8',
  requestSent: 'requestSent0',
  responseCode: '200',
  responseTime: 'responseTime8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

