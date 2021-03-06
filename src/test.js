import {describe, describe as context, it} from "mocha"
import {expect} from "chai"
import * as src from "../src"
import {img} from "../src"
import {a} from "../src"

describe("src/index.js", () => {
  context("when asked for a void element", () => {
    context("and called with inner", () => {
      it("throws an error", () => {
        expect(() => img({inner: "Test"})).to.throw("No content allowed in void element <img>")
      })
    })
  })

  context("when asked for any element", () => {
    context("and called with selector", () => {
      it("returns an object with the given selector in the .sel property appended to the element", () => {
        expect(a({selector: ".value"})).to.have.property("sel", "a.value")
      })
    })

    context("and called with inner", () => {
      it("returns an object with the given inner in the .text property", () => {
        expect(a({inner: "test"})).to.have.property("text", "test")
      })
    })

    context("and called with aria", () => {
      it("returns an object with the given aria on in the .data property", () => {
        expect(a({aria: {id: "1"}})).to.have.deep.property("data.aria.id", "1")
      })
    })
  })

  it("contains all of the W3C defined elements", () => {
    expect(Object.keys(src)).to.deep.equal([
      "a",
      "abbr",
      "acronym",
      "address",
      "applet",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "basefont",
      "bdi",
      "bdo",
      "bgsound",
      "big",
      "blink",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "center",
      "cite",
      "code",
      "col",
      "colgroup",
      "command",
      "content",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "element",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "font",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "image",
      "img",
      "input",
      "ins",
      "isindex",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "listing",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "multicol",
      "nav",
      "nobr",
      "noembed",
      "noframes",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "plaintext",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "rtc",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "shadow",
      "small",
      "source",
      "spacer",
      "span",
      "strike",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "tt",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "xmp",
      "default"
      // Exports!
    ])
  })
})
