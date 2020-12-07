/**
 * A convenience function to select through shadow root. Equivalent to channing`element.shadowRoot?.querySelector(selector)`
 * @param {HTMLElement} el target element
 * @param {string} selector selector expression
 * @returns {Element} selected element
 * @throws error if unable to resolve
 */
export function esq(el: HTMLElement, selector: string): Element {
  const selection = el.shadowRoot?.querySelector(selector)
  if (selection) return selection
  throw Error(`unable to resolve selector [${selector}] from ${el.tagName}`)

}

type SubSelect<T extends Element = Element> = {
  element: T
  thenSelect: (selector: string) => SubSelect<T>
  thenSelectAll: (selector: string) => NodeListOf<T>
}

/**
 * A convenience to select through multiple levels of shadow roots
 * @param {Element} el target element
 * @param {string} selector selection expression
 * @returns {SubSelect<T>} object to access selected or to select again on that object
 * @throws error if unable to resolve
 */
export function select<T extends Element>(el: Element, selector: string): SubSelect<T> {
  const selection: T = el.shadowRoot?.querySelector(selector) as T
  if (selection) {
    return {
      element: selection,
      thenSelect: (s) => select<T>(selection, s),
      thenSelectAll: (s) => selectAll<T>(selection, s)
    }
  }
  throw Error(`unable to resolve selector [${selector}] from ${el.tagName}`)
}

/**
 * A convenience function to selectall through the shadow root.
 * @param {Element} el taget element
 * @param {string} selector selection expression
 * @returns {NodeListOf<T>} list of selected elements
 * @throws error if unable to resolve
 */
export function selectAll<T extends Element>(el: Element, selector: string): NodeListOf<T> {
  const selection: NodeListOf<T> | undefined = el.shadowRoot?.querySelectorAll(selector)
  if (selection && selection.length > 0) return selection
  throw Error(`unable to resolve select all [${selector}] from ${el.tagName}. The selector is either invalid or returned no elements`)
}

/**
 * find slotted elements.
 * @param {HTMLElement} el target element
 * @param {string} selector optional selection; if not provided then '*'; must specify to target named slots
 * @returns {T[]}
 */
export function slottedElements<T extends Element>(el: HTMLElement, selector: string = '*'): T[] {
  const selected = el.querySelectorAll(selector)
  const assigned: Element[] | undefined = selected[0].assignedSlot?.assignedElements()
  if (assigned && assigned.length > 0) return assigned as T[]
  throw Error(`unable to resolve assigned elements for [${selector}] from ${el.tagName}.`)
}

/**
 * find slotted element.
 * @param {HTMLElement} el target element
 * @param {string} selector optional selection; if not provided then '*'; must specify to target named slots
 * @returns {T}
 */
export function slottedElement<T extends Element>(el: HTMLElement, selector: string = '*'): T {
  const element = slottedElements(el, selector)[0]
  if (element) return element as T
  throw Error(`unable to resolve assigned element for [${selector}] from ${el.tagName}.`)
}
