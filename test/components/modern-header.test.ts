import { elementUpdated, expect, fixture } from '@open-wc/testing'

export *                        from '../../src/components/header/modern-header'
import { ModernHeader }         from '../../src/components/header/modern-header'
import { esq, slottedElements } from '../testutils'

describe('modern header', () => {

  let el: ModernHeader
  beforeEach(async () => {
    el = await fixture('<modern-header title="the title"><p>Description</p></modern-header>')
    await elementUpdated(el)
  })

  it('renders default title', async () => {
    el = await fixture('<modern-header></modern-header>')
    await elementUpdated(el)
    expect(el).to.not.be.undefined
    expect(esq(el, 'h1').innerHTML).to.include('no title')
  })

  it('renders title', async () => {
    expect(el).to.not.be.undefined
    expect(esq(el, 'h1').innerHTML).to.include('the title')
  })

  it('renders description', async () => {
    const slotted: HTMLParagraphElement[] = slottedElements(el, 'p')
    expect(slotted.length).to.equal(1)
    expect(slotted[0].innerHTML).to.equal('Description')
  })

})
