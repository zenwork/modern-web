import { customElement, html, LitElement } from 'lit-element'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as style }                from './modern-footer.css'

/**
 * Simple footer components.
 *
 * @element modern-footer
 *
 * @slot - footer content
 */
@customElement('modern-footer')
export class ModernFooter extends LitElement {

  static styles = [style]

  protected render(): unknown {
    return html`
        <div>
            <slot></slot>
        </div>
    `
  }
}
