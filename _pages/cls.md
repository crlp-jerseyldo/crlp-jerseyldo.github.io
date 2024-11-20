---
layout: page
title: Other work - CLS, Interpretation Law
permalink: /work/common-legislative-solutions
parent: Our work
parent_url: /work/
---

* TOC 
{:toc}

This is the other work we are doing (apart from parsing, tool mock-up, AI & training). 

# Common Legislative Solutions
As part of our [parsing](/work/parsing-exercises) work we are parsing some model provisions on common topics for a Jersey version of "Common Legislative Solutions". That also helps with drafting the models because it gives the drafter greater clarity about the logical structures being created (which is the point more generally).

## What is CLS?
* “[Common legislative solutions](https://www.gov.uk/government/publications/common-legislative-solutions-a-guide-to-tackling-recurring-policy-issues-in-legislation){:target="_blank"} - a guide to tackling recurring policy issues in legislation” was produced by the UK drafting offices (with [Scottish](https://www.gov.scot/publications/guidance-instructing-counsel-common-legislative-solutions/){:target="_blank"} and [Welsh](https://www.gov.wales/common-legislative-solutions-a-guide-to-tackling-recurring-policy-issues-in-legislation){:target="_blank"} versions). It takes instructing officers through a set of questions about typical issues that come up in many drafting proposals, such as setting up statutory bodies, search powers, appeals, licensing schemes, criminal offences, and so on. 
* CLS was inspired by “pattern languages” in computing - see for example:
  * Luke Norbury, [Loophole, Sept 2018](https://www.calc.ngo/publications/loopholes){:target="_blank"}
  * Leon Qiu (CRLP team member) led [“Formalisation memories: towards a pattern approach to legal design”](https://jusletter-it.weblaw.ch/issues/2024/28-Maerz-2024/formalisation-memori_15306e8304.html__ONCE&login=false){:target="_blank"} applying that to computational law
  * Laurence Diver (CRLP team member) recently published an analysis of the Rule of Law from the pattern language perspective in the journal *Digital Society*: '[Using design patterns to build and maintain the Rule of Law](https://osf.io/preprints/socarxiv/587zd){:target="_blank"}'.

## What is Jersey's Legislative Drafting Office doing with CLS?
* Jersey's Legislative Drafting Office is producing a Jersey version of CLS, aiming to back it up with model provisions (not just examples from actual legislation).
* LDO has set up a “coding club” in which we are learning about coding by producing a [docassemble](https://docassemble.org/){:target="_blank"} app to help instructing officers to follow the Jersey CLS guidance.
* This builds on the experience of two members of the team who, as part of a course at [Flinders](https://docassemble.flinders.edu.au/interview?i=docassemble.FlindersUniDocassembleFrontPage:data/questions/main.yml){:target="_blank"} University, created a docassemble [app which LDO has been using](https://www.youtube.com/watch?v=bE44gFDzx5o){:target="_blank"} successfully for the last few years for policy officers to give usable instructions for annual increases in fees.

## What is CRLP doing with the Jersey version of CLS?
* We are parsing some of the examples of actual provisions, that will be included in the Jersey version of CLS.
* That helps us to spot problems before we parse and draft model provisions to recommend for adaptation by drafters in particular drafts.
* It also means the models will come ready parsed and marked up to be computer-readable.
* This exposes oddities in provisions like “a person aggrieved by a Part 3 decision may request the Minister to review the decision”. See for example Art 36(7)-(8) [Wildlife (Jersey) Law 2021](https://www.jerseylaw.je/laws/current/Pages/02.950.aspx){:target="_blank"} - does the person really need to be "aggrieved" and what happens if they are not; does the person really need permission to request a review; does the Minister have no power to review their own decisions otherwise; how could the actual intention be made clearer?
* We are working on an **illustrative Docassemble app** for an imaginary policy officer writing drafting instructions for a new licensing scheme. The app will illustrate how the user would be asked for information about the plans, prompted at each stage to go to the next question resulting from the answer to the last one, and would be shown a model draft provision with an Excel Q&A version (or maybe an [L4](https://github.com/smucclaw){:target="_blank"} version from our work with [**Centre for Computational Law**](https://cclaw.smu.edu.sg/projects-papers/research-project-computational-law){:target="_blank"} in Singapore) of that provision for the officer to check the provision did what was wanted in different cases.

See our [CLS sub-project](https://osf.io/ywq82/){:target="_blank"} on OSF for more.

# An Interpretation Law for the digital age?
In 2026 there might be an opportunity to update Jersey's [Interpretation Law](https://www.jerseylaw.je/laws/current/Pages/15.360.aspx){:target="_blank"} (the equivalent of Interpretation Acts in other Commonwealth countries). In preparation for that, we are looking into whether the Interpretation Law could be made more helpful for computer readers and human readers, or whether there is some better route for achieving that.
* The definition of "person" could be improved, and brought together with the definition of "act", as the fundamental building blocks of most legislation.
* Could we add something to clarify how we use logical terms like "if", "and" & "or", as well as "means", "includes", "must" and "may"?
* Could we add something about some of the interpretation principles that we rely on when drafting - that the legislation is "always speaking" (so we use present tense), that the same word should have the same meaning even when it is undefined, and so on? Or would we be better off using our ideas on [drafting tools](/work/an-ide-for-legislation) to provide pop-ups to point readers to the effect of the same-meaning principle (flagging repeated undefined expressions in a similar way to our plans for defined terms)? 

**This page is being updated.** You can find a full archive on OSF: <https://osf.io/yzf6x/>{:target="_blank"}.
