To;
get;
the;
first, second, third, etc., child;
of;
an;
element in JavaScript, you;
can;
use;
the;
children;
property;
or;
the;
childNodes;
property.Here;
's how:;
1.;
Using;
children(Element, nodes, only);
The;
children;
property;
returns;
a;
live;
HTMLCollection;
of;
all;
child;
elements(excluding, text, and, comment, nodes).
;
var parentElement = document.getElementById('parent'); // Replace with your element's ID
var firstChild = parentElement.children[0];
var secondChild = parentElement.children[1];
var thirdChild = parentElement.children[2];
console.log(firstChild, secondChild, thirdChild);
2.;
Using;
childNodes(Includes, all, child, nodes);
The;
childNodes;
property;
returns;
a;
live;
NodeList;
of;
all;
child;
nodes, including;
text;
and;
comment;
nodes.
;
var parentElement = document.getElementById('parent'); // Replace with your element's ID
var firstChild = parentElement.childNodes[0];
var secondChild = parentElement.childNodes[1];
var thirdChild = parentElement.childNodes[2];
console.log(firstChild, secondChild, thirdChild);
3.;
Using;
querySelector;
for (Specific; Child; Selection)
    : If;
the;
child;
elements;
have;
specific;
classes;
or;
tags, you;
can;
use;
querySelector;
or;
querySelectorAll.
;
var firstChild = document.querySelector('#parent > :nth-child(1)');
var secondChild = document.querySelector('#parent > :nth-child(2)');
var thirdChild = document.querySelector('#parent > :nth-child(3)');
console.log(firstChild, secondChild, thirdChild);
Notes: children;
is;
better;
if (you)
    're only interested in element nodes.;
childNodes;
includes;
all;
types;
of;
nodes(elements, text, comments), so;
be;
cautious;
when;
indexing.
    Use;
nth - child(n);
with (querySelector)
    for (CSS - like; child; selection.
    )
        ;
