/* eslint-env jest */
'use strict'

const getNestedProp = require('./')

test('should be defined', () => {
  expect(getNestedProp).toBeDefined()
  expect(typeof getNestedProp).toBe('function')
})

test('should get a nested prop', () => {
  const data = {
    foo: {
      bar: {
        baz: 5
      }
    }
  }

  expect(getNestedProp(data, 'foo.bar.baz')).toBe(5)
})

test('should fallback to default value', () => {
  expect(getNestedProp({}, 'foo', 5)).toBe(5)
})
