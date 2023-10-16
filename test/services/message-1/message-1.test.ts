// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../src/app'

describe('message-1 service', () => {
  it('registered the service', () => {
    const service = app.service('message-1')

    assert.ok(service, 'Registered the service')
  })
})
