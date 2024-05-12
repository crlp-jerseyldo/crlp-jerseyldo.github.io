---
layout: page
title: Other work - CLS, IDE, Interpretation Law
permalink: /work/common-legislative-solutions
parent: Our work
parent_url: /work/
---

* TOC 
{:toc}

This is the other work we are doing (apart from parsing, AI & training). 

# Common Legislative Solutions
As part of our [parsing](/parsing-exercises) work we are parsing some model provisions on common topics for a Jersey version of "Common Legislative Solutions". That also helps with drafting the models because it gives the drafter greater clarity about the logical structures being created (which is the point more generally).

## What is CLS?
* “[Common legislative solutions](https://www.gov.uk/government/publications/common-legislative-solutions-a-guide-to-tackling-recurring-policy-issues-in-legislation){:target="_blank"} - a guide to tackling recurring policy issues in legislation” was produced by the UK drafting offices. It takes instructing officers through a set of questions about typical issues that come up in many drafting proposals, such as setting up statutory bodies, search powers, appeals, licensing schemes, criminal offences, and so on. 
* CLS was inspired by “pattern languages” in computing - see Luke Norbury, [Loophole, Sept 2018](https://www.calc.ngo/publications/loopholes){:target="_blank"}. CRLP team member Leon Qiu led [“Formalisation memories: towards a pattern approach to legal design”](https://jusletter-it.weblaw.ch/issues/2024/28-Maerz-2024/formalisation-memori_15306e8304.html__ONCE&login=false){:target="_blank"} applying that to computational law

## What is Jersey's Legislative Drafting Office doing with CLS?
* Jersey's Legislative Drafting Office is producing a Jersey version of CLS, aiming to back it up with model provisions (not just examples from actual legislation).
* LDO has set up a “coding club” in which we are learning about coding by producing a [docassemble](https://docassemble.org/){:target="_blank"} app to help instructing officers to follow the Jersey CLS guidance.
* This builds on the experience of two members of the team who, as part of a course at [Flinders](https://docassemble.flinders.edu.au/interview?i=docassemble.FlindersUniDocassembleFrontPage:data/questions/main.yml){:target="_blank"} University, created a docassemble app which LDO has been using successfully for the last few years for policy officers to give usable instructions for annual increases in fees.

## What is CRLP doing with the Jersey version of CLS?
* We are parsing some of the examples of actual provisions, that will be included in the Jersey version of CLS.
* That helps us to spot problems before we parse and draft model provisions to recommend for adaptation by drafters in particular drafts.
* It also means the models will come ready parsed and marked up to be computer-readable.
* This exposes oddities in provisions like “a person aggrieved by a Part 3 decision may request the Minister to review the decision”. See for example Art 36(7)-(8) [Wildlife (Jersey) Law 2021](https://www.jerseylaw.je/laws/current/Pages/02.950.aspx){:target="_blank"} - does the person really need to be "aggrieved" and what happens if they are not; does the person really need permission to request a review; does the Minister have no power to review their own decisions otherwise; how could the actual intention be made clearer?

See our [CLS sub-project](https://osf.io/ywq82/){:target="_blank"} on OSF for more.

# IDE-like legislative drafting tool
We want to produce a basic specification, with illustrative mock-ups, of a potential tool for legislative drafters, adapting the "Integrated Development Environments" that help programmers to code.
* In the longer term we would like to see drafting tools that help us make, expose & check the logical structures in our drafts – ideally sitting inside our Word templates or XML editors.
* Programmers already have these tools to help them when they are writing code. In LDO’s “coding club” we have seen the benefit of tools in an [online Python IDE, Editor, Compiler, Interpreter](https://www.online-python.com){:target="_blank"} which (for instance) knows what you have already defined. [Grimmelmann](https://arxiv.org/abs/2206.14879){:target="_blank"} explains how lawyers could benefit from equivalents of an IDE and Jupyter Notebooks.
* [Oracle Intelligent Adviser](https://www.oracle.com/cx/service/intelligent-advisor/){:target="_blank"} is an existing commercial tool (pre-AI) that shows it is already possible to help draft & check computer-readable **business rules**, and it was originally designed with legislation in mind.
* We want to build on Schwartz & others (2023) [“Design Principles for Integrated **Legislation** Drafting Environment”](https://ssrn.com/abstract=4556959){:target="_blank"} and adapt it for Commonwealth drafting.
* The point would be to use drop-down lists of suggestions (& other help) to enable drafters to write consistently while the tool automatically marks up the text correctly (& possibly gives useful error messages when it detects an inconsistency).
* For instance if you have already defined "agriculturalist" and in a later provision you start typing "ag" it would suggest "agriculturalist" as a defined term, and if you accepted the suggestion by clicking on it then it would complete the word but also mark it as a use of the defined term. Similarly it could help with constructing "if" provisions, by marking the conditions, the and/or between them, and the effects, and so on.

![A screenshot of a Python IDE offering help to a coder](/images/Python.png)

See [our sub-project "What might an IDE-like drafting tool look like?"](https://osf.io/uk2vy/){:target="_blank"} on OSF for more.

# An Interpretation Law for the digital age?
There might be an opportunity to update our Interpretation Law (the equivalent of Interpretation Acts in other Commonwealth countries), where we are looking into whether it could be made more helpful for computer readers and human readers, or whether there is some better route for achieving that.
* The definition of "person" could be improved, and brought together with the definition of "act", as the fundamental building blocks of most legislation.
* Could we add something to clarify how we use logical terms like "if", "and" & "or", as well as "means", "includes", "must" and "may"?
* Could we add something about some of the interpretation principles that we rely on when drafting - that the legislation is "always speaking" (so we use present tense), that the same word should have the same meaning even when it is undefined, and so on?

**This page is being updated.** You can find a full archive on OSF: <https://osf.io/yzf6x/>{:target="_blank"}.
