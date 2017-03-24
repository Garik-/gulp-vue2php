'use strict';

import { parseHTML } from 'Vue/compiler/parser/html-parser'
import { isUnaryTag, canBeLeftOpenTag } from 'Vue/platforms/web/compiler/util'

let warn = function(message: string): void {
    console.log(message);
}

let template = '<a v-if="row.name" href="#">test</a>';
parseHTML(template, {
    warn,
    expectHTML: true,
    isUnaryTag: isUnaryTag,
    canBeLeftOpenTag: canBeLeftOpenTag,
    shouldDecodeNewlines: true,
    start(tag, attrs, unary) {
        console.log(tag, attrs, unary);
    },
    end() {},
    chars(text: string) {
        console.log(text);
    }
});
