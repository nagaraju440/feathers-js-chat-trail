// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { Message1Service } from './message-1.class'

// Main data model schema
export const message1Schema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Message1', additionalProperties: false }
)
export type Message1 = Static<typeof message1Schema>
export const message1Validator = getValidator(message1Schema, dataValidator)
export const message1Resolver = resolve<Message1, HookContext<Message1Service>>({})

export const message1ExternalResolver = resolve<Message1, HookContext<Message1Service>>({})

// Schema for creating new entries
export const message1DataSchema = Type.Pick(message1Schema, ['text'], {
  $id: 'Message1Data'
})
export type Message1Data = Static<typeof message1DataSchema>
export const message1DataValidator = getValidator(message1DataSchema, dataValidator)
export const message1DataResolver = resolve<Message1, HookContext<Message1Service>>({})

// Schema for updating existing entries
export const message1PatchSchema = Type.Partial(message1Schema, {
  $id: 'Message1Patch'
})
export type Message1Patch = Static<typeof message1PatchSchema>
export const message1PatchValidator = getValidator(message1PatchSchema, dataValidator)
export const message1PatchResolver = resolve<Message1, HookContext<Message1Service>>({})

// Schema for allowed query properties
export const message1QueryProperties = Type.Pick(message1Schema, ['id', 'text'])
export const message1QuerySchema = Type.Intersect(
  [
    querySyntax(message1QueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type Message1Query = Static<typeof message1QuerySchema>
export const message1QueryValidator = getValidator(message1QuerySchema, queryValidator)
export const message1QueryResolver = resolve<Message1Query, HookContext<Message1Service>>({})
