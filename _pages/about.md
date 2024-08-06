---
layout: page
title: About
permalink: /about/
---

* TOC 
{:toc}

## What is CRLP about?

Finding a way for drafters to produce **computer-readable** versions of the **logical structure** of our drafts of legislation.

## Why do this?

So that computers can use those versions to **guide humans** through the **legislation**, but also to **check** the **drafts** for inconsistencies or unexpected effects.

![A diagram showing the if-this-then-that structure of a piece of legislation](/images/ifttt-example.png)

## How can we do that?

By finding an **easy-to-use** way for **legislative drafters** to mark up the logical structure of draft legislation while they are drafting it.

- It needs to reflect just the way the drafter is structuring the legislation, without adding more.
- It needs to be as easy as the ways in which drafters currently mark up the paragraphing structure of their drafts (using Word styles, or XML editors).

## What is the CRLP doing?

- Our project runs in 2023 & 2024, and builds on the work we had [already](https://legislativedrafter.wordpress.com/2022/08/06/gathering-the-public-output-on-rac-from-jersey-ldo/){:target="_blank"} started in LDO to apply this to the way we draft legislation for Jersey.
- We are currently working out how ["If-Then" structures](/work/parsing-exercises) fit in our legislation, like in the illustration above for an imaginary rule on feeding animals.
- We are also working on a [mock-up of a tool for legislative drafters](/work/an-ide-for-legislation) to help them draft coherent [logical](/work/logic) structures and automatically mark them up to be computer-readable.
- Other streams of the project include -
  - producing non-technical [guidance and training](/work/guidance) material for legislative drafters on what we have learnt about drafting itself,
  - working with [Digital Jersey](https://www.digital.je/){:target="_blank"} to see whether [Artificial Intelligence](/work/artificial-intelligence-and-legislation) can mark these "If-Then" structures, and
  - digitising standard provisions for a Jersey version of "[Common Legislative Solutions](https://www.gov.uk/government/publications/common-legislative-solutions-a-guide-to-tackling-recurring-policy-issues-in-legislation){:target="_blank"}".

For more see the list of streams in ["Our work"](/work), and the documents for each stream posted on [OSF](https://osf.io/yzf6x/){:target="_blank"}.

## Who else is working on this?

- Globally there is the "[**Rules as Code**](https://github.com/Rules-as-Code-League/RaC-Handbook/wiki/1-Introduction:-What-is-Rules-as-Code%3F){:target="_blank"}" movement, which started in 2018 in [New Zealand](https://www.youtube.com/watch?v=S4KWlmQBAc0&list=PLxI6pLSZVXTp3BA9IBK-Q_yZukyImMcnq&index=6){:target="_blank"}, and has since spread to [Australia](https://www.nsw.gov.au/media-releases/digitising-rules-of-government-to-make-compliance-easy){:target="_blank"}, [Canada](https://oecd-opsi.org/wp-content/uploads/2024/04/Rules-as-Code-in-Canada.pdf){:target="_blank"} (and [video](https://csps-efpc.gc.ca/video/rules-as-code-1-eng.aspx){:target="_blank"}), [Singapore](https://www.youtube.com/watch?v=NEjrV4Wwyh8){:target="_blank"}, [UK](https://azwyner.info/2020/03/02/rules-as-code/){:target="_blank"}, [France](https://github.com/openfisca/openfisca-france/){:target="_blank"} and elsewhere - see reports by the Observatory of Public Sector Innovation of the OECD ["Cracking the code"](https://www.oecd.org/en/publications/cracking-the-code_3afe6ba5-en.html){:target="_blank"} (2020) and ["New Techniques for Building and Using Legal Encodings in the Drafting Room"](https://oecd-opsi.org/innovations/new-techniques-for-building-and-using-legal-encodings-in-the-drafting-room/){:target="_blank"} (2024).
- Here in **Jersey** the [**Financial Services Commission**](https://www.jerseyfsc.org/){:target="_blank"} is working on "RegTech". JFSC did have [plans](https://www.jerseyfsc.org/media/5699/the-regtech-opportunity.pdf){:target="_blank"} to "enable the digitalisation of our regulatory content ... delivering machine readable rules", but is now working with Digital Jersey on use of AI to read and answer questions on JFSC's guidance and codes of practice.

## What could it be used for?

Here is an example of what programmers can do once they have the logical structure of the legislation set out so that a computer can read it --

![An example of a DataLex consultation](/images/datalex-example.jpg)

[AustLII](http://www.austlii.edu.au/){:target="_blank"} (who are the equivalent of [JLIB](https://www.jerseylaw.je/laws/current/){:target="_blank"}, who publish our legislation) have produced [**DataLex**](https://datalex.org/){:target="_blank"}, which is a **free** program that you can **try out** on the web.

It runs a "consultation", asking you **questions** based on the **wording of the legislation**.

- It shows the **facts** it has taken from you so far, the **conclusions** it has reached so far, and **links** to the relevant parts of the legislation.
- At each question you can ask it **why** it is asking, or check **what** will happen **if** you give a particular answer, or tell it to **forget** some or all of the facts you have given it.
- At the end it gives you a **report** that tells you its conclusion about how the legislation applies to your facts, but also sets out exactly **how** it came to that conclusion.

We are working with AustLII on applying DataLex, yScript & yLegis to our example laws.

In the longer term we also expect this work to help with creating new tools for legislative drafters to check our work, like those available to [programmers](https://ssrn.com/abstract=4556959){:target="_blank"}.

