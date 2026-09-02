import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DirectDebitInformation = {
  dateOfSignature?: Date;
  dueDate?: Date;
  mandateId?: string;
  sequenceType?: string;
};

export const directDebitInformationSchema: Schema<DirectDebitInformation> = s.object<DirectDebitInformation>({
  dateOfSignature: s.optional(s.dateTime()),
  dueDate: s.optional(s.dateTime()),
  mandateId: s.optional(s.string()),
  sequenceType: s.optional(s.string()),
});
