import "./bootstrap.bundle.min.js";
import "./tribute.min.js";

/*
 * Utility functions
 */
function makeDefinitionLink(id, naturalTerm, title, content) { // Function for creating templated definition links
    var idAttr = id ? `data-bs-content-id="${id}"` : '';
    var titleAttr = title ? `title="${title}"` : '';
    var contentAttr = content ? `data-bs-content="${content}"` : '';
    var classes = (id === "undefined" ? "undefined" : (!id ? "ext" : "int"));
    // console.log(naturalTerm, `<span contenteditable="false"><a href="javascript:;" role="button" contenteditable="false" data-bs-toggle="popover" ${titleAttr} ${idAttr} ${contentAttr} class="definition ${classes}" tabindex="0">${naturalTerm}</a></span>`);
    return `<span contenteditable="false"><a href="javascript:;" role="button" contenteditable="false" data-bs-toggle="popover" ${titleAttr} ${idAttr} ${contentAttr} class="definition ${classes}" tabindex="0">${naturalTerm}</a></span>`;
}

/*
 * Grab definitions and provisions for later use
 */
const termNodeList = document.querySelectorAll('[id^="definition-"]');
const provisionList = document.querySelectorAll('ul.provision.body > li');
var termList = ['']; // Array of terms + defs for autocomplete

/*
 * Process terms into links
 */

// External definitions stored in external-definitions.js
extDefinitions.forEach((definitionCategory) => {
    var title = definitionCategory.title;
    var url = definitionCategory.url;
    var terms = definitionCategory.terms;
    terms.forEach((term) => {
        termList.push({
            key: term.term,
            value: makeDefinitionLink(false, term.term, `Externally defined term: “${term.term}”`, `<p class='m-0 p-0'><strong class='small'><a href='${url}' target='_blank'>${title}</a>, ${term.ref}</strong><br/><span class='serif'>${term.definition}</span></p>`), 
            def: term.definition,
            ref: term.ref,
            source: 'ext'});
    });
});

// Undefined terms stored in external-definitions.js
undefinedTerms.forEach((undefinedCategory) => {
    var msg = undefinedCategory.msg;
    var terms = undefinedCategory.terms;
    var help = undefinedCategory.help;
    terms.forEach((term) => {
        if (typeof term === 'string') {
            termList.push({
                key: term,
                value: makeDefinitionLink('undefined', term, `${msg}: “${term}”`, `<p class='m-0 p-0'><strong class='small'>This term is not defined. But it is used more than once, so it should be treated as having the same meaning each time.</strong><br/><span class='serif'>${help.map(h => `${h.tool} ${h.msg}`).join('<br/>')}</span></p>`),
                def: msg,
                ref: '',
                source: 'undefined'});
        } else {
            termList.push({
                key: term.term,
                value: makeDefinitionLink('undefined', term.term, `${msg}: “${term.term}”`, `<p class='m-0 p-0'><strong class='small'>This term is not defined. But it is used in the ${term.law.title} so it should be treated as having the same meaning as it has there.</strong><br/><span class='serif'>Search uses of &#8220;${term.term}&#8221; in the ${term.law.title}.</span><br/><span class='serif'>${help.map(h => `${h.tool} ${h.msg}`).join('<br/>')}</span><br/><span class='serif'>${term.lookup.map(l => `See ${l.title} ${l.msg}`).join('<br/>')}</span></p>`),
                def: msg,
                ref: '',
                source: 'undefined'});
        }
    });
});

// Internal definitions defined in Article 1 of this document
termNodeList.forEach((term) => {
    var realTerm = term.id.split('-');
    realTerm.shift();
    var naturalTerm = realTerm.join(' ');
    termList.push({key: naturalTerm, value: makeDefinitionLink(term.id, naturalTerm), def: term.innerText, ref: term.parentElement.getAttribute('data-ref'), source: 'int'});
});
// Sort termList so undefined terms are replaced first
termList.sort((a, b) => {
    if (a.source === 'undefined' && b.source !== 'undefined') {
        return -1;
    }
    if (a.source !== 'undefined' && b.source === 'undefined') {
        return 1;
    }
    return 0;
});
termList.forEach((term, i) => { // Loop through provisions and find/replace terms

    provisionList.forEach((provision) => {
        provision.innerHTML = provision.innerHTML.replace(new RegExp(`${term.key}`, 'ig'), term.value); // NB using innerHTML causes problems for repeating/overlapping terms, where the definition markup contains a subsequent term that is substituted. Handling this kind of conflict would need considered in production by using a NodeList instead of manipulating innerHTML.
    });
    if (term.source == 'undefined') {// Remove undefined terms
        delete termList[i];
    }
    if (term.source == 'ext') {// Remove external terms
        delete termList[i];
    }
    
});

/*
 * Create definition popovers
 */
const defList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
function makePopover(el) { // Function for creating arbitrary definition links
    if (el.hasAttribute('data-bs-content-id') || el.hasAttribute('data-bs-content')) {
        let opts = {
            container: '.ui-body',
            toggle: 'popover',
            html: true,
            sanitize: false,
            placement: 'top',
            customClass: 'definition-popover-ext',
            boundary: '.ui-body',
        }
        if (el.classList.contains('undefined')) {
            // opts.title = `Undefined term: &#8220;${el.innerText}&#8221;`;
            opts.customClass = 'definition-popover-undefined';
            // opts.content = '<p class="m-0 p-0">' + (document.getElementById(el.getAttribute('data-bs-content'))?.innerHTML || 'Definition not found') + '</p>';
        }
        else if (!el.classList.contains('ext')) {
            opts.title = `Previously defined term: &#8220;${el.innerText}&#8221;`;
            opts.customClass = 'definition-popover',
            opts.content = '<p class="m-0 p-0"><strong class="small"><a href="#art-1-1" >Art. 1(1)</a></strong>: <span class="serif">' + (document.getElementById(el.getAttribute('data-bs-content-id'))?.innerHTML || 'Definition not found') + '</span></p>';
        }
        
        new bootstrap.Popover(el, opts);
    }
}
defList.map((el) => { // Create definition links on page load
    makePopover(el);
});


/*
 * Set up tooltips
 */
// undefinedTerms.forEach((category) => { // Undefined terms tooltips
//     category.terms.forEach((t) => {
//         provisionList.forEach((p) => {
//             p.innerHTML = p.innerHTML.replace(new RegExp(t, 'ig'), `<em>${t}</em>`);
//             //p.innerHTML = p.innerHTML.replace(new RegExp(t, 'ig'), `<span data-bs-toggle="tooltip" data-bs-title="helo" data-bs-placement="top">${t}</span>`);
//         })
//     });
// });

var tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]'); // Create tooltips
  tooltipElements.forEach(tooltip => {
    new bootstrap.Tooltip(tooltip)
});

/*
 * Set up toolbar button events
 */
var allCheckboxes = document.querySelectorAll('.btn-check.toggle'); // Grab toolbar checkboxes

allCheckboxes.forEach((checkBox) => { // Add body class toggle using `data-toggle-class` attribute
    checkBox.addEventListener('change', (event) => {
        document.body.classList.toggle(checkBox.getAttribute('data-toggle-class'));
    });
});

checkall.addEventListener('change', (event) => { // Add Toggle All event listener
    if (event.currentTarget.checked) {
        allCheckboxes.forEach((checkBox) => { 
            checkBox.checked = true;
            document.body.classList.add(checkBox.getAttribute('data-toggle-class'));
        });
    } else {
        allCheckboxes.forEach((checkBox) => { 
            checkBox.checked = false;
            document.body.classList.remove(checkBox.getAttribute('data-toggle-class'));
        });
    }
});

/*
 * Tribute autocomplete for editable provisions
 * Uses Tribute library from https://github.com/zurb/tribute/ (MIT license)
 */
const editableProvisions = document.querySelectorAll('.editable');
var tribute = new Tribute({
    values:             termList,
    autocompleteMode:   true,
    menuShowMinLength:  2,
    containerClass:     'tribute-container popover definition-popover',
    menuItemTemplate: function (item) {
        return `<strong>${item.original.ref}</strong>: <span class="term">${item.string}</span><br/><span class="serif">${item.original.def}</span>`;
    },
    noMatchTemplate: function () {
        return '<span class="nr"></span>';
    },
});

editableProvisions.forEach((provision) => {
    provision.addEventListener("tribute-replaced", function(e) {
        let sel = `#${e.target.id} .definition`, newRefParent = document.querySelectorAll(sel);
        newRefParent.forEach((def)=>{
            makePopover(def);
        });
        
  });
});

tribute.attach(document.querySelectorAll(".editable")); // Execute Tribute


/*
 * Help panel popup on first page load
 */
const helpPanel = document.getElementById("help-panel");
const seen = localStorage.getItem("help-seen");
var helpPanelOffCanvas = new bootstrap.Offcanvas(helpPanel);
if (!seen) {
    helpPanelOffCanvas.show();
    localStorage.setItem("help-seen", true);
}
