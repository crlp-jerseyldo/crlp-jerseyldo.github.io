import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/tributejs/dist/tribute.min.js";

/*
 * Grab definitions and provisions for later use
 */
const termNodeList = document.querySelectorAll('[id^="definition-"]');
const provisionList = document.querySelectorAll('ul.provision.body > li');
var termList = [];

/*
 * Process terms into links
 */
function makeDefinitionLink(id, naturalTerm) { // Function for creating templated definition links
    return `<span contenteditable="false"><a href="javascript:;" role="button" contenteditable="false" data-bs-toggle="popover" data-bs-content-id="${id}" class="definition" tabindex="0">${naturalTerm}</a></span>`;
}
termNodeList.forEach((term) => {
    var realTerm = term.id.split('-');
    realTerm.shift();
    var naturalTerm = realTerm.join(' ');
    var regex = new RegExp(`${naturalTerm}`, 'ig');
    termList.push({key: naturalTerm, value: makeDefinitionLink(term.id, naturalTerm, false), def: term.innerText, ref: term.parentElement.getAttribute('data-ref')});
        
    provisionList.forEach((provision) => {
        provision.innerHTML = provision.innerHTML.replace(regex, makeDefinitionLink(term.id, naturalTerm, true));
    });
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
        if (!el.classList.contains('ext')) {
            opts.title = `Previously defined term: &#8220;${el.innerText}&#8221;`;
            opts.customClass = 'definition-popover',
            opts.content = '<p class="m-0 p-0"><strong class="small"><a href="#art-1-1" >Art. 1(1)</a></strong>: <span class="serif">' + document.getElementById(el.getAttribute('data-bs-content-id')).innerHTML + '</span></p>';
        }
        new bootstrap.Popover(el, opts);
    }
}
defList.map((el) => { // Create definition links on page load
    makePopover(el);
});


/*
 * Set up tooltips (not used currently)
 */
document.querySelectorAll('[data-bs-toggle="tooltip"]')
  .forEach(tooltip => {
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