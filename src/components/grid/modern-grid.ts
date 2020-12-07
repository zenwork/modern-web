import { html, LitElement } from 'lit-element'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as style } from './modern-grid.css'

export class ModernGrid extends LitElement {

  static styles = [style]

  protected render(): unknown {
    return html`
        <section>
            <slot class="container"></slot>
        </section>

    `
  }
}
