import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalSettings1Schema, type AdditionalSettings1 } from "./additional-settings1.js";
import { communicationFormatSchema, type CommunicationFormat } from "./communication-format.js";
import { encryptionProtocolSchema, type EncryptionProtocol } from "./encryption-protocol.js";
import { networkTypeSchema, type NetworkType } from "./network-type.js";

export type UpdateMerchantWebhookRequest = {
  acceptsExpiredCertificate?: boolean;
  acceptsSelfSignedCertificate?: boolean;
  acceptsUntrustedRootCertificate?: boolean;
  active?: boolean;
  additionalSettings?: AdditionalSettings1;
  communicationFormat?: CommunicationFormat;
  description?: string;
  encryptionProtocol?: EncryptionProtocol;
  networkType?: NetworkType;
  password?: string;
  populateSoapActionHeader?: boolean;
  url?: string;
  username?: string;
};

export const updateMerchantWebhookRequestSchema: Schema<UpdateMerchantWebhookRequest> =
  s.object<UpdateMerchantWebhookRequest>({
    acceptsExpiredCertificate: s.optional(s.boolean()),
    acceptsSelfSignedCertificate: s.optional(s.boolean()),
    acceptsUntrustedRootCertificate: s.optional(s.boolean()),
    active: s.optional(s.boolean()),
    additionalSettings: s.optional(s.lazy(() => additionalSettings1Schema)),
    communicationFormat: s.optional(s.lazy(() => communicationFormatSchema)),
    description: s.optional(s.string()),
    encryptionProtocol: s.optional(s.lazy(() => encryptionProtocolSchema)),
    networkType: s.optional(s.lazy(() => networkTypeSchema)),
    password: s.optional(s.string()),
    populateSoapActionHeader: s.optional(s.boolean()),
    url: s.optional(s.string()),
    username: s.optional(s.string()),
  });
