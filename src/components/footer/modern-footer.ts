import { html, LitElement } from 'lit-element'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as style } from './modern-footer.css'

export class ModernFooter extends LitElement {

  static styles = [style]

  protected render(): unknown {
    return html`
        <div><slot></slot></div>
    `
  }
}
