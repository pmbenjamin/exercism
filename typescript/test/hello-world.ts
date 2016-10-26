import * as mocha from 'mocha'
import { expect } from 'chai'
import { HelloWorld } from '../src/hello-world'

describe('Hello World', () => {
  let helloWorld = new HelloWorld()

  it('says hello world with no name', () => {
    expect(helloWorld.hello('')).to.equal('Hello, World!')
  })

  it('says hello to bob', () => {
    expect(helloWorld.hello('Bob')).to.equal('Hello, Bob!')
  })

  it('says hello to sally', () => {
    expect(helloWorld.hello('Sally')).to.equal('Hello, Sally!')
  })
})