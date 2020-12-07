import { customElement, html, internalProperty, LitElement, property } from 'lit-element'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as style }                                            from './wc-meta.css'

type WcDescriptor = { name: string; description: string; path: string; attributes: any[]; properties: any[]; slots: any[] }

@customElement('wc-meta')
export class WcMeta extends LitElement {

  @property() href: string = ''
  @internalProperty() private desc: WcDescriptor = {name: '', description: '', path: '', attributes: [], properties: [], slots: []}

  static styles = [style]

  async connectedCallback() {
    super.connectedCallback()

    if (this.href) {
      this.desc = await fetch(this.href)
        .then(r => r.json())
        .then(j => j.tags[0])

    }
  }


  render(): unknown {
    return html`
        <p>${this.desc.description}</p>
        <section>
            <h4>overview</h4>
            
            <div>
                <label for="name">tag:</label>
                <code id="name">
                    <${this.desc.name}>
                </code>
            </div>
            <div>
                <label for="file">file:</label>
                <span id="file"><a href=${this.desc.path}>${this.desc.path}</a></span>
            </div>
        </section>
        <section>

            <h4>attributes/properties</h4>
            ${this.desc.properties?.map(a => {
                return html`
                    <div class="attribute">
                        <div>
                            <label>name:</label>
                            <span>${a.name}</span>
                        </div>
                        <div>
                            <label>as attribute:</label>
                            <span>${a.attribute ? a.attribute : !!a.attribute}</span>
                        </div>
                        <div>
                            <label>type:</label>
                            <span>${a.type}</span>
                        </div>
                        <div>
                            <label>default:</label>
                            <span>${a.default}</span>
                        </div>
                    </div>
                `
            })}
        </section>
        <section>
            <h4>slots</h4>
            ${this.desc.slots?.map(a => {
                return html`
                    <div class="slot">
                        <div>
                            <label>name:</label>
                            <span>${a.name ? a.name : '[default]'} (${a.description})</span>
                        </div>
                    </div>
                `
            })}
        </section>
    `
  }
}
