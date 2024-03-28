---
layout: default
---

# <span>Welcome to the</span> <br><em>Computer-Readable Legislation Project</em> (CRLP)

At the States of Jersey’s [**Legislative Drafting Office**](https://www.gov.je/Government/NonexecLegal/StatesGreffe/Pages/LegislativeDraftingOffice.aspx){:target="_blank"} (LDO) we have a 2-year Computer-Readable Legislation Project (part of the global “Rules as Code” initiative).

## What is it about?

Finding a way for drafters to produce **computer-readable** versions of the **logical structure** of our drafts of legislation.

## Why?

So that computers can use those versions to **guide humans** through the **legislation**, but also to **check** the **drafts** for inconsistencies or unexpected effects.

![A diagram showing the if-this-then-that structure of a piece of legislation](/images/ifttt-example.png)

## How can we do that?

By finding an **easy-to-use** way for **legislative drafters** to mark up the logical structure of draft legislation while they are drafting it.

- It needs to reflect just the way the drafter is structuring the legislation, without adding more.
- It needs to be as easy as the ways in which drafters currently mark up the paragraphing structure of their drafts (using Word styles, or XML editors).

## Who else is working on this?

- Globally there is the "[**Rules as Code**](https://github.com/Rules-as-Code-League/RaC-Handbook/wiki/1-Introduction:-What-is-Rules-as-Code%3F)" movement, which started in 2018 in [New Zealand](https://www.youtube.com/watch?v=S4KWlmQBAc0&list=PLxI6pLSZVXTp3BA9IBK-Q_yZukyImMcnq&index=6), and has since spread to [Australia](https://www.nsw.gov.au/media-releases/digitising-rules-of-government-to-make-compliance-easy), [Canada](https://csps-efpc.gc.ca/video/rules-as-code-1-eng.aspx), [Singapore](https://www.youtube.com/watch?v=NEjrV4Wwyh8), [UK](https://azwyner.info/2020/03/02/rules-as-code/), [France](https://github.com/openfisca/openfisca-france/) and elsewhere.
- Here in **Jersey** the [**Financial Services Commission**](https://www.jerseyfsc.org/) is working on "RegTech" and has [plans](https://www.jerseyfsc.org/media/5699/the-regtech-opportunity.pdf) to "enable the digitalisation of our regulatory content ... delivering machine readable rules"

## What are we doing?

- Our project runs in 2023 & 2024, and builds on the work we had [already](https://legislativedrafter.wordpress.com/2022/08/06/gathering-the-public-output-on-rac-from-jersey-ldo/) started in LDO to apply this to the way we draft legislation for Jersey.
- We are currently working out how "If-Then" structures fit in our legislation, like in this example of an imaginary rule on feeding animals.
- We are also working with [Digital Jersey](https://www.digital.je/) on a project to see how Artificial Intelligence can mark these "If-Then" structures.
- Other streams of the project, posted on [OSF](https://osf.io/yzf6x/), include producing guidance for legislative drafters, and digitising "[Common Legislative Solutions](https://www.gov.uk/government/publications/common-legislative-solutions-a-guide-to-tackling-recurring-policy-issues-in-legislation)".

## What could it be used for?

Here is an example of what programmers can do once they have the logical structure of the legislation set out so that a computer can read it --

[AustLII](http://www.austlii.edu.au/) (who are the equivalent of [JLIB](https://www.jerseylaw.je/laws/current/), who publish our legislation) have produced [**DataLex**](https://datalex.org/), which is a **free** program that you can **try out** on the web.

It runs a "consultation", asking you **questions** based on the **wording of the legislation**.

- It shows the **facts** it has taken from you so far, the **conclusions** it has reached so far, and **links** to the relevant parts of the legislation.
- At each question you can ask it **why** it is asking, or check **what** will happen **if** you give a particular answer, or tell it to **forget** some or all of the facts you have given it.
- At the end it gives you a **report** that tells you its conclusion about how the legislation applies to your facts, but also sets out exactly **how** it came to that conclusion.

We are working with AustLII on applying DataLex, yScript & yLegis to our example laws.

In the longer term we also expect this work to help with creating new tools for legislative drafters to check our work, like those available to [programmers](https://ssrn.com/abstract=4556959).

![An example of a DataLex consultation](/images/datalex-example.jpg)