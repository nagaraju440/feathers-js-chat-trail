// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { Message3Service } from './message-3.class'

// Main data model schema
export const message3Schema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Message3', additionalProperties: false }
)
export type Message3 = Static<typeof message3Schema>
export const message3Validator = getValidator(message3Schema, dataValidator)
export const message3Resolver = resolve<Message3, HookContext<Message3Service>>({})

export const message3ExternalResolver = resolve<Message3, HookContext<Message3Service>>({})

// Schema for creating new entries
export const message3DataSchema = Type.Pick(message3Schema, ['text'], {
  $id: 'Message3Data'
})
export type Message3Data = Static<typeof message3DataSchema>
export const message3DataValidator = getValidator(message3DataSchema, dataValidator)
export const message3DataResolver = resolve<Message3, HookContext<Message3Service>>({})

// Schema for updating existing entries
export const message3PatchSchema = Type.Partial(message3Schema, {
  $id: 'Message3Patch'
})
export type Message3Patch = Static<typeof message3PatchSchema>
export const message3PatchValidator = getValidator(message3PatchSchema, dataValidator)
export const message3PatchResolver = resolve<Message3, HookContext<Message3Service>>({})

// Schema for allowed query properties
export const message3QueryProperties = Type.Pick(message3Schema, ['id', 'text'])
export const message3QuerySchema = Type.Intersect(
  [
    querySyntax(message3QueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type Message3Query = Static<typeof message3QuerySchema>
export const message3QueryValidator = getValidator(message3QuerySchema, queryValidator)
export const message3QueryResolver = resolve<Message3Query, HookContext<Message3Service>>({})
