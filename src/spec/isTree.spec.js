import chai, { expect } from 'chai'
import React from 'react'
import isTree from '../isTree'

describe('isTree', () => {
  it('returns false given string', () => {
    expect(isTree('string')).to.be.false
  })

  it('returns false given number', () => {
    expect(isTree('number')).to.be.false
  })

  it('returns true given object', () => {
    expect(isTree(<div>test</div>)).to.be.true
  })
})