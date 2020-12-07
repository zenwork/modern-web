export *                                   from '../../src/components/card/modern-card'
import { ModernCard }                      from '../../src/components/card/modern-card'
import { elementUpdated, expect, fixture } from '@open-wc/testing'
import { esq, slottedElement }             from '../testutils'

describe('modern grid', () => {

  let el: ModernCard
  beforeEach(async () => {
    el = await fixture(`
                <modern-card badge="?">
                    <h1 slot="header">heading</h1>
                    <div slot="body">body</div>
                </modern-card>
              `)
    await elementUpdated(el)
  })


  it('renders default badge', async () => {
    el = await fixture('<modern-card > </modern-card>')
    await elementUpdated(el)
    expect(el).to.not.be.undefined
    expect(esq(el, '.card-badge').innerHTML).to.include('!')
  })

  it('renders ! as an icon', async () => {
    expect(el).to.not.be.undefined
    expect(esq(el, '.card-badge').innerHTML).to.include('?')
  })

  it('renders header', async () => {
    const slottedHeading: Element = slottedElement(el, 'h1')
    expect(slottedHeading.innerHTML).to.equal('heading')
  })

  it('renders card body', async () => {
    const slottedBody: Element = slottedElement(el, 'div')
    expect(slottedBody.innerHTML).to.equal('body')
  })

})
