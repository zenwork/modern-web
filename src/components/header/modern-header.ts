import { customElement, html, LitElement, property } from 'lit-element'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as style }                          from './modern-header.css'

/**
 * Header component for capturing a title and a short description.
 *
 * @element modern-header
 */
@customElement('modern-header')
export class ModernHeader extends LitElement {

  /**
   * @attr {string} title - title to display
   * @type {string}
   */
  @property() title = 'no title'

  static styles = [style]

  protected render(): unknown {
    return html`
        <h1>${this.title}</h1>
        <h3>
            <slot></slot>
        </h3>
    `
  }
}
