export *                                   from '../../src/components/footer/modern-footer'
import { ModernFooter }                    from '../../src/components/footer/modern-footer'
import { elementUpdated, expect, fixture } from '@open-wc/testing'
import { slottedElement, slottedElements } from '../testutils'

describe('modern grid', () => {

  it('renders tag content', async () => {
    const el: ModernFooter = await fixture('<modern-footer><span>a footer</span></modern-footer>')

    await elementUpdated(el)

    // test slotted content
    const slotted: HTMLSpanElement = slottedElement(el)

    expect(slotted.innerHTML).to.equal('a footer')

  })

})
