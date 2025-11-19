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
![L4 visualiser showing yes-no colours, and-or-not paths, and unfolding definitions](/images/FarmerExemptColourUnfold.png)

## How can we do that?

By finding an **easy-to-use** way for **legislative drafters** to mark up the logical structure of draft legislation while they are drafting it.

- It needs to reflect just the way the drafter is structuring the legislation, without adding more.
- It needs to be as easy as the ways in which drafters currently mark up the paragraphing structure of their drafts (using Word styles, or XML editors).

## What is the CRLP doing?

- Our project now runs on a volunteer basis. It was funded from 2023 to mid-2025, and builds on the work we had [already](https://legislativedrafter.wordpress.com/2022/08/06/gathering-the-public-output-on-rac-from-jersey-ldo/){:target="_blank"} started in LDO to apply this to the way we draft legislation for Jersey. In the first half of 2025 we worked with the [**Centre for Digital Law**](https://cdl.smu.edu.sg/projects/research-project-computational-law-rpcl){:target="_blank"} (Singapore Management University) to advance our ideas on drafting tools, reading tools, and AI assistance for a logical reasoner, all using their [L4 language](https://github.com/smucclaw){:target="_blank"}. Work on L4 continues with [Legalese](https://l4.legalese.com/){:target="_blank"} (who invented it).
- The L4 team made us a **drafter-friendly logic mapping tool**. See [**this demonstration video**](https://youtu.be/_VZ4_FY_Nqo){:target="_blank"} and [**interactive example**](https://jl4.legalese.com/?id=8831700c-a1ee-4c21-9365-1aa410a977d0){:target="_blank"} for how a legislative drafter can put a draft provision into the **interactive, free, web-based** (no downloading needed) [**visualiser**](https://jl4.legalese.com/){:target="_blank"}. See also [our Substack **post**](https://substack.com/@digitallegislation/p-171875282){:target="_blank"} & earlier [**report**](https://osf.io/x43td){:target="_blank"}. The video shows how a **legislative drafter can produce** an *if-then* version of a draft provision, which can be automatically converted into L4 to produce a flowchart-like logical map that a reader can interact with to guide them through the legislation (see snapshot above). This limited use of L4 is an introduction for legislative drafters who have no technical knowledge, using just the **grammar**, [**logic**](/work/logic), **paragraphing** & **indenting** that they use every day. It enables them to produce working code that they and their policy officers could use to check drafts. That helps drafters to picture the potential benefits of using a fuller system - elsewhere on the Legalese site you can see examples of L4 being used more fully, with further examples on other L4 sites including for [Jersey's Charities Law](https://github.com/smucclaw/l4-ide/blob/ian/je-charities-3/jl4/experiments/jerseyCharities2.l4){:target="_blank"}.
- We are also working on **hyperlinking defined terms** - see our **explanation & demo** in [this video](https://youtu.be/zq6mf2zz7Eg?list=PLxI6pLSZVXTqp-BZ2f3uQ3m-mFp2nP4br&t=199){:target="_blank"}. We are working on rolling out a tool for Jersey's drafting office (where drafters use Word with a template & macros), so that drafters can mark up defined terms to give a **roll-over pop-up** that shows the text of the **definition** and a **link** to its **source**. Importantly, that is not just about definitions in the same legislative instrument - it also covers expressions used in **secondary** legislation which *invisibly* rely on definitions from the primary legislation under which the secondary is made, and definitions *even more invisibly* imported into *all* legislation from the **Interpretation Law**. Drafters need to stop hiding these essential elements of our legislation, and start using the world-wide web for what it was built for. 
- Before that, we produced an interactive [**mock-up of a tool** for legislative drafters](/work/an-ide-for-legislation) to show how hyperlinked pop-ups could work for defined terms, but also for repeated *undefined* terms which have the same meaning each time according to drafting & interpretation principles, as well as how offences and "must" provisions could be marked up. The idea is to illustrate for drafters how future tools could help them draft coherent [logical](/work/logic) structures and automatically mark up those structures to be computer-readable.
- This builds on our work looking at how [**"If-Then"** structures](/work/parsing-exercises) fit in our legislation, like in the illustration above for an imaginary rule on feeding animals.
- Other streams of the project include -
  - producing **non-technical** [guidance and training](/work/guidance) material for legislative drafters on what we have learnt about drafting itself,
  - working on [Artificial Intelligence](/work/artificial-intelligence-and-legislation), with [Digital Jersey](https://www.digital.je/){:target="_blank"} and the AI Working Group of the Commonwealth Association of Legislative Counsel, to see whether & how AI can help drafters to identify and mark up these structures, and
  - digitising standard provisions for a Jersey version of "[Common Legislative Solutions](https://www.gov.uk/government/publications/common-legislative-solutions-a-guide-to-tackling-recurring-policy-issues-in-legislation){:target="_blank"}".

For more see the list of streams in ["Our work"](/work), and the documents for each stream posted on [OSF](https://osf.io/yzf6x/){:target="_blank"}.

## Who else is working on this?

- Globally there is the "[**Rules as Code**](https://github.com/Rules-as-Code-League/RaC-Handbook/wiki/1-Introduction:-What-is-Rules-as-Code%3F){:target="_blank"}" movement, which started in 2018 in [New Zealand](https://www.youtube.com/watch?v=S4KWlmQBAc0&list=PLxI6pLSZVXTp3BA9IBK-Q_yZukyImMcnq&index=6){:target="_blank"}, and has since spread to [Australia](https://www.nsw.gov.au/media-releases/digitising-rules-of-government-to-make-compliance-easy){:target="_blank"}, [Canada](https://oecd-opsi.org/wp-content/uploads/2024/04/Rules-as-Code-in-Canada.pdf){:target="_blank"} (and [video](https://csps-efpc.gc.ca/video/rules-as-code-1-eng.aspx){:target="_blank"}), [Singapore](https://www.youtube.com/watch?v=NEjrV4Wwyh8){:target="_blank"}, [UK](https://azwyner.info/2020/03/02/rules-as-code/){:target="_blank"}, [France](https://github.com/openfisca/openfisca-france/){:target="_blank"} and elsewhere - see reports by the Observatory of Public Sector Innovation of the OECD ["Cracking the code"](https://www.oecd.org/en/publications/cracking-the-code_3afe6ba5-en.html){:target="_blank"} (2020) and ["New Techniques for Building and Using Legal Encodings in the Drafting Room"](https://oecd-opsi.org/innovations/new-techniques-for-building-and-using-legal-encodings-in-the-drafting-room/){:target="_blank"} (2024).
- Here in **Jersey** the [**Financial Services Commission**](https://www.jerseyfsc.org/){:target="_blank"} is working on "RegTech". JFSC did have [plans](https://www.jerseyfsc.org/media/5699/the-regtech-opportunity.pdf){:target="_blank"} to "enable the digitalisation of our regulatory content ... delivering machine readable rules", but is now working with Digital Jersey on use of AI to read and answer questions on JFSC's guidance and codes of practice.
- Some tech firms are working on **Artificial Intelligence** (generative AI, or LLMs, like ChatGPT) to make chatbots read legislation and answer questions about it. But LLMs are not able to reason as such, so they will remain unreliable for tasks that involve applying legislation to given fact scenarios, particularly where that involves applying definitions (as opposed to looking up an answer that is already on the face of the legislation). So [we are working on using AI to help](/work/artificial-intelligence-and-legislation) with reliable logic-based systems.
- For more on the range of views that others in the field take on what they mean by "Rules as Code", and how CRLP's view fits into that range, see our [Rules as Code](/about/RaC) page.

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

