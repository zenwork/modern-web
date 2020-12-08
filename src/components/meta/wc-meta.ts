import { customElement, html, internalProperty, LitElement, property } from 'lit-element'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as style }                                            from './wc-meta.css'

type WcDescriptor = { name: string; description: string; path: string; attributes: any[]; properties: any[]; slots: any[] }
const empty = {name: '', description: '', path: '', attributes: [], properties: [], slots: []}


/**
 * Component used to display `custom-elements.json` values in the docs. Based on the json produced with
 * https://github.com/runem/web-component-analyzer
 */
@customElement('wc-meta')
export class WcMeta extends LitElement {

  /**
   * @attr {string} url to file
   * @type {string}
   */
  @property() href: string = ''
  @internalProperty() private desc: WcDescriptor = empty

  static styles = [style]

  async connectedCallback() {
    super.connectedCallback()

    if (this.href) {
      this.desc = await fetch(this.href)
        .then(r => r.json())
        .then(j => j.tags[0])
        .catch(err => {
          console.error(`unable to load: ${this.href}`, err)
          return {...empty, description: `ERROR: unable to load: ${this.href}`}
        })

    }
  }


  render(): unknown {
    return html`
        <h2 id="description">Description</h2>
        <p>${this.desc.description}</p>
        <div id="summary">
            <div>
                <label>tag &mdash;</label>
                <code>
                    <${this.desc.name}><&sol;${this.desc.name}>
                </code>
            </div>
            <div>
                <label for="file">source &mdash;</label>
                <span id="file"><a href=${this.desc.path}>${this.desc.path}</a></span>
            </div>
        </div>
        <section>
            <h3>Properties/Attributes</h3>
            ${this.desc.properties
                    ?.filter(a => a.name !== 'styles')
                    .map(a => {
                        return html`
                            <div>
                                <code>${a.name}</code>
                            </div>
                            <ul class="attribute">
                                <li>
                                    <label>as attribute:</label>
                                    <span>${a.attribute ? a.attribute : !!a.attribute}</span>
                                </li>
                                <li>
                                    <label>type:</label>
                                    <span>${a.type}</span>
                                </li>
                                <li>
                                    <label>default:</label>
                                    <span>${a.default}</span>
                                </li>
                            </ul>
                        `
                    })}
        </section>
        <section>
            <h3>Slots</h3>
            <ul>
                ${this.desc.slots?.map(a => {
                    return html`
                        <li class="slot">
                            <span><code>${a.name ? a.name : '[default]'}</code> &mdash; ${a.description}</span>
                        </li>
                    `
                })}
            </ul>
        </section>
    `
  }
}
