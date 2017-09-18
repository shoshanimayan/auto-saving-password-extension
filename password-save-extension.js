// ==UserScript==
// @name         auto-password-save-extension
// @include        *
// ==/UserScript==

var allowSaving = function(element) {
    var count = element.attributes.length;
    for (var i = 0; i < count; i++) {
        var Attr = element.attributes[i];
        if (Attr.name == 'autocomplete') {
            Attr.value = 'on';
            break;
        }
    }
};

var forms = document.getElementsByTagName('form');
for (var i = 0; i < forms.length; i++)
{
    var form = forms[i];
    var elements = form.elements;

    allowSaving(form);

    for (var j = 0; j < elements.length; j++)
    {
        allowSaving(elements[j]);
    }
}