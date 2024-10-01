---
layout: page
title: An IDE-like tool for legislative drafting
permalink: /work/an-ide-for-legislation
parent: Our work
parent_url: /work/
---

* TOC 
{:toc}

## Mock-ups of a tool for legislative drafters

We have an [**interactive mock-up** of some of the functions of an imaginary **tool**](https://crlp-jerseyldo.github.io/ilde-mockup/){:target="_blank"} for legislative drafters - please **try it out** (and see the [**explanations** in our newsletter](https://substack.com/@digitallegislation/p-149448484){:target="_blank"}).

![A screenshot of the mock-up of a drafting tool](/images/ILDE-mockup-screenshot.png)

It is a work in progress and we will add separate videos to illustrate further functions - 
* For now we have [notes on our OSF site](https://osf.io/3qrx6){:target="_blank"} about the idea of expanding the defined terms hyperlinks to cover undefined repeated terms (which should have the same meaning).
* We also have a PowerPoint showing how the tool in the mock-up might look if it handled those [repeated undefined terms](https://osf.io/uzw5d){:target="_blank"},
* Another PowerPoint shows how it might look if it handled marking up ["must" and "must not"](https://osf.io/fc3js){:target="_blank"} provisions to higlight their elements and link to the consequence of a breach.

We want to show legislative drafters how a possible tool could work to help them **create, mark up and check the logical structures in their drafts while they are drafting**. 
* We aim to do that by producing **illustrative mock-ups**, plus a basic specification as a starting point for any interested developers.
* We want **legislative drafters** to imagine an equivalent for them of the **"Integrated Development Environments"** that help programmers to code (ideally with a tool sitting inside our Word templates or XML editors). We want to avoid legislative drafters imagining we mean they have to draft their text first and then go back over it to mark it up.
* In the longer term we would like to see **developers** create these drafting tools, starting with our basic spec. But for now we are just illustrating what a tool could look like, to set the ball rolling.

## Building on related work

![A screenshot of a Python IDE offering help to a coder](/images/Python.png)

* Programmers already have these tools to help them when they are writing code. Jersey's Legislative Drafting Office has a “coding club”, where we have seen the benefit of tools in an [online Python IDE, Editor, Compiler, Interpreter](https://www.online-python.com){:target="_blank"} which (for instance) knows what you have already defined. [Grimmelmann](https://arxiv.org/abs/2206.14879){:target="_blank"} explains how lawyers could benefit from equivalents of an Integrated Development Environment and Jupyter Notebooks.
* [Oracle Intelligent Adviser](https://www.oracle.com/cx/service/intelligent-advisor/){:target="_blank"} is an existing commercial tool (from before generative AI) that shows it is already possible to help draft & check computer-readable **business rules**, and it was originally designed with legislation in mind.
* We want to build on Schwartz & others (2023) [“Design Principles for Integrated **Legislation** Drafting Environment”](https://ssrn.com/abstract=4556959){:target="_blank"}, who were the first to spell out what this could mean for legislative drafting. We want to adapt their approach for the Commonwealth style of drafting.
* In the EU there is the [LEOS](https://joinup.ec.europa.eu/collection/justice-law-and-security/solution/leos-open-source-software-editing-legislation){:target="_blank"} editing tool. They are looking at adding functions to help EU drafters and to allow them to mark up more elements in [their Akoma Ntoso]([https://op.europa.eu/fr/web/eu-vocabularies/akn4eu](https://op.europa.eu/en/web/eu-vocabularies/dataset/-/resource?uri=http%3A%2F%2Fpublications.europa.eu%2Fresource%2Fdataset%2Fakn4eu)){:target="_blank"} system (potentially using LegalRuleML) - see ["Drafting legislation in the era of AI and digitisation"](https://joinup.ec.europa.eu/collection/justice-law-and-security/solution/leos-open-source-software-editing-legislation/document/drafting-legislation-era-ai-and-digitisation){:target="_blank"} and ["Overview of smart functionalities in drafting legislation in LEOS"](https://joinup.ec.europa.eu/collection/justice-law-and-security/solution/leos-open-source-software-editing-legislation/document/overview-smart-functionalities-drafting-legislation-leos){:target="_blank"}. The UK's [LawMaker](https://www.youtube.com/watch?v=WBmwiHY4Q-Q&t=2s){:target="_blank"} drafting system is XML-based, also using Akoma Ntoso, and has also been looking at LegalRuleML.
* Just before this project started, we met Oswald Maskens who demonstrated a model he had made, gave us a talk on his ideas about leveraging tools for software engineering in legal corpus management, and showed us VS Code as an example of what an IDE could offer for legislative drafters.

## What would the imaginary tool do?
* The tool would **help** the drafter to be **rigorous** in creating (and marking up for computer readability) -
  * **if-and-or-not** structures, 
  * **defined** terms (see the mock-up) and **repeated undefined** terms (which should have the same meaning each time), 
  * provisions that use "**must**", "must not" or "**may**",
  * other key elements such as **offences** and **vires** (powers to make subsidiary legislation), 
  * any standard adaptable provisions arising from "**Common Legislative Solutions**".
* The idea would be to use **drop-down** lists of suggestions (& other help) to enable drafters to write consistently while the tool automatically marks up the text correctly (and possibly gives useful error messages when it detects an inconsistency).

## Some examples of what the tool could do (as descriptions, but better seen in demos)
We are using the [**interactive mock-up**](https://crlp-jerseyldo.github.io/ilde-mockup/){:target="_blank"} (and supplementary static mock-ups) to demonstrate what we mean, given it is far easier to get the ideas across to the rest of the legislative drafting community that way. But we will also see if we can produce a **basic specification** that a developer could use as starting material, and we need to explain what we mean in text as well as through demos, so here is an attempt.

One way for **legislative drafters** to think about it is just as doing something more than what (we hope) your **current** system already does for you. 
* You might be in one of the bigger drafting offices that have already moved over to writing in an **XML** editor (like LawMaker in UK offices).
* But if your office is still using **Word** (like Jersey), you probably have Word **styles** and **templates** (and maybe **macros**) that already help you to format your next paragraph/sub-paragraph/etc and number it correctly instead of you having to do that manually.
* In the XML systems the editor is (behind the scenes) adding metadata that identifies the provision as a paragraph with that number so that a computer can read the metadata.
* This tool would just be adding more metadata behind the scenes (or perhaps generating a twin version) to identify the logical elements as well as the structural elements.

Much of this would be by intelligent **auto-complete** suggestions - 

So imagine	you have **defined** "alcohol" (which the tool helped you with) and then further on you type "al" -
*	the tool offers to **auto-complete** that with a drop-down set of choices including "alcohol" as defined, 
* if you pick that word, the tool **marks up** that instance of "alcohol" as a use of the defined term
* see the way this works in the "Edit me" sections of the [**interactive mock-up**](https://crlp-jerseyldo.github.io/ilde-mockup/){:target="_blank"},

Then imagine you type the first couple of letters from another word, like "contravene", that is defined in your country's **Interpretation Act/Law** -
* as with "alcohol", the tool offers to auto-complete "contravene", this time as defined in the Interpretation Act/Law (again see the mock-up),
* if you accept, the tool marks up "contravene" as a use of the defined term from the Interpretation Act/Law (so far the mock-up does not reflect this)
* the same goes for words defined in legislation under which **subsidiary** legislation is being made, where the subsidiarly legislation inherits those definitions)  

Or imagine you type the first couple of letters from a word you **haven't defined** but you **have used already**, maybe "sheep" -
*	the tool offers "sheep" as one of the auto-complete options, but on the basis that will mark it up to reflect that it should have the same meaning as every other use of "sheep" in that draft,
*	the tool also catches grammatical variations of the same word, and it raises a question when you use a synonym of a previously used word ("do you intend this to have a different meaning from its synonym X which you have already used?"),
*	but the tool is set up to ignore logical words like "and" or trivial words for this purpose,

Or imagine you are drafting a provision to create a new **offence**, using standard wording -
   *	so you pick a drop-down option for that or you type "co"
   *	the tool offers to auto-complete "commits an offence and is liable to" marking that up as an offence-creation,
   *	if you accept, the tool marks that up as an instance of offence-creation,

Or imagine you type "the Minster m" -
   *	the tool offers to auto-complete that as "the Minster may" or alternatively as "the Minster may by Order"
   *	if you pick the one for an Order, the tool automatically **marks up** those words as **creating vires** for a subsidiary.
   *	it will also specify that the power is to make an Order,
   *	and in Jersey it would specify which Minister has the power, on the footing that when you typed "the M" it suggested "the Minister" as the term you had already defined as "the Minister for X",

Or imagine you want do something that is covered by **Common Legislative Solutions**, or you look like you are doing it, and you pick a menu or the tool pops up an offer to use the Jersey standard wording for that kind of provision, as well as marking it up.

## Not just auto-complete - help with "if" and "must" and other structures

The tool would not use the sort of auto-complete in Word that irritates drafters by guessing what word you are going to use next. Instead, when you do something it recognises, it would offer a drop-down list, and allow you to you click on one of the choices (or ignore them). Nor is the tool just a glorified handler of a precedent bank.

The tool would also help with constructing "**if**" provisions, by marking the conditions, the and/or between them, and the effects, and so on -
*	you press enter to start a new paragraph (your system already automatically formats that as a paragraph and numbers it properly, and, if it is an XML system, already identifies that numbered para with metadata),
*	the tool pops up an offer to help you in case you are making an **if-then** provision (which most provisions are),
*	if you click "yes" then it helps you clarify in your own mind what the **conditions** and **effects** are and how the **and/or/not** elements work, as well as marking them up for you;

Also, when you type **"must"** (or pick it from a menu) -
*	the tool prompts you to check that you have a clear enough link to the **consequences** (in another provision, or implied) if the "must" is **breached**,
*	it asks if you are applying the "must" to a **person** (and asks if you are sure you want to use "must" if it isn't a person),
*	if it thinks you have used **passive voice** after the "must", it asks you to check whether you really want to,

And so on - it does not need to dictate drafting rules, unless they are compulsory in your office.

The aim of the [**interactive mock-up**](https://crlp-jerseyldo.github.io/ilde-mockup/){:target="_blank"} is to make this clearer by allowing you to see an example working. We are also producing videos (and static screenshots) of mock-ups to illustrate other particular aspects of what the tool would be doing.

**This page is being updated.** See [our sub-project "What might an IDE-like drafting tool look like?"](https://osf.io/uk2vy/){:target="_blank"} on OSF for more.
