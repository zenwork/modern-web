export *                                   from '../../src/components/grid/modern-grid'
import { ModernGrid }                      from '../../src/components/grid/modern-grid'
import { elementUpdated, expect, fixture } from '@open-wc/testing'
import { slottedElements }                 from '../testutils'

describe('modern grid', () => {

  it('renders tag content', async () => {
    const el: ModernGrid = await fixture(
      `
                <modern-grid>
                    <div>cell 1</div>
                    <div>cell 2</div>
                    <div>cell 3</div>
                </modern-grid>
              `)

    await elementUpdated(el)

    // test slotted content
    const slotted: HTMLElement[] = slottedElements(el)

    expect(slotted.length).to.equal(3)

    expect(slotted[0].innerHTML).to.equal('cell 1')
    expect(slotted[1].innerHTML).to.equal('cell 2')
    expect(slotted[2].innerHTML).to.equal('cell 3')


  })

})
