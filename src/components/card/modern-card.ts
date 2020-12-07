import { html, LitElement, property } from 'lit-element'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as style }           from './modern-card.css'

export class ModernCard extends LitElement {

  @property() header = '!'
  static styles = [style]

  protected render(): unknown {
    return html`
        <div class="card-header"><span>${this.header}</span></div>
        <slot name="header" class="card-heading">title</slot>
        <slot name="body" class="card-body">Some content goes here</slot>

    `
  }
}
