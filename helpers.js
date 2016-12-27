import dom from "snabbdom/h"
import {concat} from "ramda"
import {contains} from "ramda"
import {map} from "ramda"
import {mergeAll} from "ramda"
import {omit} from "ramda"

const voids = [
  "area",
  "base",
  "br",
  "col",
  "command",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]

const EMPTY_OBJECT = {}
const EMTPY_STRING = ""
const withoutSpecial = omit(["selector", "inner"])

const node = (tag) => {
  const withTag = concat(tag)

  if (contains(tag, voids)) {
    const warning = 'No content allowed in void element <' + tag + '}>'

    return {
      [tag]: (properties = EMPTY_OBJECT) => {
        if (properties.inner) {
          throw new Error(warning)
        }

        return dom(
          withTag(properties.selector || EMTPY_STRING),
          withoutSpecial(properties)
        )
      }
    }
  }

  return {
    [tag]: (properties = EMPTY_OBJECT) => dom(
      withTag(properties.selector || EMTPY_STRING),
      withoutSpecial(properties),
      properties.inner || EMTPY_STRING
    )
  }
}
export const a = node(a)
export const abbr = node(abbr)
export const acronym = node(acronym)
export const address = node(address)
export const applet = node(applet)
export const area = node(area)
export const article = node(article)
export const aside = node(aside)
export const audio = node(audio)
export const b = node(b)
export const base = node(base)
export const basefont = node(basefont)
export const bdi = node(bdi)
export const bdo = node(bdo)
export const bgsound = node(bgsound)
export const big = node(big)
export const blink = node(blink)
export const blockquote = node(blockquote)
export const body = node(body)
export const br = node(br)
export const button = node(button)
export const canvas = node(canvas)
export const caption = node(caption)
export const center = node(center)
export const cite = node(cite)
export const code = node(code)
export const col = node(col)
export const colgroup = node(colgroup)
export const command = node(command)
export const content = node(content)
export const data = node(data)
export const datalist = node(datalist)
export const dd = node(dd)
export const del = node(del)
export const details = node(details)
export const dfn = node(dfn)
export const dialog = node(dialog)
export const dir = node(dir)
export const div = node(div)
export const dl = node(dl)
export const dt = node(dt)
export const element = node(element)
export const em = node(em)
export const embed = node(embed)
export const fieldset = node(fieldset)
export const figcaption = node(figcaption)
export const figure = node(figure)
export const font = node(font)
export const footer = node(footer)
export const form = node(form)
export const frame = node(frame)
export const frameset = node(frameset)
export const h1 = node(h1)
export const h2 = node(h2)
export const h3 = node(h3)
export const h4 = node(h4)
export const h5 = node(h5)
export const h6 = node(h6)
export const head = node(head)
export const header = node(header)
export const hgroup = node(hgroup)
export const hr = node(hr)
export const html = node(html)
export const i = node(i)
export const iframe = node(iframe)
export const image = node(image)
export const img = node(img)
export const input = node(input)
export const ins = node(ins)
export const isindex = node(isindex)
export const kbd = node(kbd)
export const keygen = node(keygen)
export const label = node(label)
export const legend = node(legend)
export const li = node(li)
export const link = node(link)
export const listing = node(listing)
export const main = node(main)
export const map = node(map)
export const mark = node(mark)
export const marquee = node(marquee)
export const menu = node(menu)
export const menuitem = node(menuitem)
export const meta = node(meta)
export const meter = node(meter)
export const multicol = node(multicol)
export const nav = node(nav)
export const nobr = node(nobr)
export const noembed = node(noembed)
export const noframes = node(noframes)
export const noscript = node(noscript)
export const object = node(object)
export const ol = node(ol)
export const optgroup = node(optgroup)
export const option = node(option)
export const output = node(output)
export const p = node(p)
export const param = node(param)
export const picture = node(picture)
export const plaintext = node(plaintext)
export const pre = node(pre)
export const progress = node(progress)
export const q = node(q)
export const rp = node(rp)
export const rt = node(rt)
export const rtc = node(rtc)
export const ruby = node(ruby)
export const s = node(s)
export const samp = node(samp)
export const script = node(script)
export const section = node(section)
export const select = node(select)
export const shadow = node(shadow)
export const small = node(small)
export const source = node(source)
export const spacer = node(spacer)
export const span = node(span)
export const strike = node(strike)
export const strong = node(strong)
export const style = node(style)
export const sub = node(sub)
export const summary = node(summary)
export const sup = node(sup)
export const table = node(table)
export const tbody = node(tbody)
export const td = node(td)
export const template = node(template)
export const textarea = node(textarea)
export const tfoot = node(tfoot)
export const th = node(th)
export const thead = node(thead)
export const time = node(time)
export const title = node(title)
export const tr = node(tr)
export const track = node(track)
export const tt = node(tt)
export const u = node(u)
export const ul = node(ul)
export const var = node(var)
export const video = node(video)
export const wbr = node(wbr)
export const xmp = node(xmp)
