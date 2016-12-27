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
