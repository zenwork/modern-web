import { customElement, html, LitElement } from 'lit-element'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as style }                from './modern-grid.css'

@customElement('modern-grid')
export class ModernGrid extends LitElement {

  static styles = [style]

  protected render() {
    return html`
        <section>
            <slot class="container"></slot>
        </section>

    `
  }
}
