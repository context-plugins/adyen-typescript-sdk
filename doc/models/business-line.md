
# Business Line

*This model accepts additional fields of type unknown.*

## Structure

`BusinessLine`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required, Read-only | The unique identifier of the business line. |
| `industryCode` | `string` | Required | A code that represents the industry of the legal entity for [marketplaces](https://docs.adyen.com/marketplaces/verification-requirements/reference-additional-products/#list-industry-codes) or [platforms](https://docs.adyen.com/platforms/verification-requirements/reference-additional-products/#list-industry-codes). For example, **4431A** for computer software stores. |
| `industryCodeDescription` | `string \| undefined` | Optional, Read-only | The description of the industry code. |
| `legalEntityId` | `string` | Required | Unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) that owns the business line. |
| `problems` | [`CapabilityProblem1[] \| undefined`](../../doc/models/capability-problem-1.md) | Optional | The verification errors related to capabilities for this supporting entity. |
| `salesChannels` | `string[] \| undefined` | Optional | A list of channels where goods or services are sold.<br><br>Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.<br><br>Required only in combination with the `service` **paymentProcessing**. |
| `service` | [`Service`](../../doc/models/service.md) | Required | - |
| `sourceOfFunds` | [`SourceOfFunds \| undefined`](../../doc/models/source-of-funds.md) | Optional | - |
| `webData` | [`WebData[] \| undefined`](../../doc/models/web-data.md) | Optional | List of website URLs where your user's goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object. |
| `webDataExemption` | [`WebDataExemption \| undefined`](../../doc/models/web-data-exemption.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  BusinessLine,
  Capability,
  Service,
  Type3,
  Type32,
  Type59,
} from 'adyen';

const businessLine: BusinessLine = {
  id: 'id6',
  industryCode: 'industryCode8',
  legalEntityId: 'legalEntityId2',
  service: Service.Banking,
  industryCodeDescription: 'industryCodeDescription2',
  problems: [
    {
      entity: {
        documents: [
          'documents1',
          'documents2'
        ],
        id: 'id2',
        owner: {
          documents: [
            'documents3',
            'documents4'
          ],
          id: 'id4',
          type: Type3.LegalEntity,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        type: Type32.BankAccount,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      verificationErrors: [
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      entity: {
        documents: [
          'documents1',
          'documents2'
        ],
        id: 'id2',
        owner: {
          documents: [
            'documents3',
            'documents4'
          ],
          id: 'id4',
          type: Type3.LegalEntity,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        type: Type32.BankAccount,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      verificationErrors: [
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      entity: {
        documents: [
          'documents1',
          'documents2'
        ],
        id: 'id2',
        owner: {
          documents: [
            'documents3',
            'documents4'
          ],
          id: 'id4',
          type: Type3.LegalEntity,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        type: Type32.BankAccount,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      verificationErrors: [
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type59.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  salesChannels: [
    'salesChannels0',
    'salesChannels1'
  ],
  sourceOfFunds: {
    adyenProcessedFunds: false,
    amount: {
      currency: 'currency2',
      value: BigInt(110),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    assetMonthsHeld: 46,
    cryptocurrencyExchange: 'cryptocurrencyExchange2',
    dateOfFundsReceived: '2016-03-13T12:52:32.123Z',
    dateOfSourceEvent: '2016-03-13T12:52:32.123Z',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  webData: [
    {
      webAddress: 'webAddress4',
      webAddressId: 'webAddressId8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      webAddress: 'webAddress4',
      webAddressId: 'webAddressId8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      webAddress: 'webAddress4',
      webAddressId: 'webAddressId8',
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

