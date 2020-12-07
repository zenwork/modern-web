import { customElement, html, LitElement, property } from 'lit-element'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as style }                          from './modern-header.css'

@customElement('modern-header')
export class ModernHeader extends LitElement {

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
