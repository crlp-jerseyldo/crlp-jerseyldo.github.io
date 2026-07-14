---
layout: page
title: Artificial Intelligence and legislation
permalink: /work/artificial-intelligence-and-legislation
parent: Our work
parent_url: /work/
---

We do not see AI taking over from humans in drafting legislation. 
* We have tried it for drafting, and it is good for suggesting provisions the drafter might not have thought of, but the drafting of the actual provisions is still nowhere near rigorous enough for workable legislation.
* See our early experiments with drafting a Commercial Baking Act/Law with ChatGPT in 2023 and 2024 in our [AI & legislation](https://osf.io/bkjqx/){:target="_blank"} folder on OSF - 
  * ChatGPT - Commercial Baking Act.pdf
  * Drafting legislation with free ChatGPT as at 15 May 2024.pdf
  * Drafting legislation with ChatGPT 4o, again as at 15 May 2024.pdf

Nor do we see AI fully reliably answering questions about legislation *on its own* - and there is no need if a fully determinative traditional program can produce solidly reliable results.
* Some tech firms are working on AI (generative AI, or LLMs) to make **chatbots** read legislation and answer questions about it. Examples include -
  * [Codify AI](https://codifyai.com/){:target="_blank"} for Canadian legislation, and
  * [Max](https://askmax.je/){:target="_blank"} for Jersey Financial Services Commission's [AML/CFT/CPF Handbook](https://www.jerseyfsc.org/industry/financial-crime/amlcftcpf-handbooks/amlcftcpf-handbook/){:target="_blank"} 
* But LLMs are not able to **reason** as such, as opposed to developing existing patterns, so they will remain unreliable ("hallucinating") for tasks that involve working out how legislative provisions apply to given fact scenarios. They often suffer where answering a question involves applying definitions, or following cross-references, as opposed to looking up an answer that is already on the face of the legislation.
* All that said, legislative drafting offices now need to take full account of the fact that our **legislation websites are now being used by more AI agents and bots than by humans** (most offices will have usage statistics that confirm this). The AI then feeds its answer to the human, who never reads the actual legislation.
* Because of that, drafting offices should be taking steps to ensure we are helping AIs to find and read our legislation. Ultimately that means providing the AI with an if-then model of the legislation's logical structure. But in the meantime we should be ensuring our legislation is available, along with explanatory material about it, in a form that AI can ingest easily. We have had a first go at making a set of [**“skills”** for AI agents for reading Jersey legislation](https://github.com/crlp-jerseyldo/jersey-legislation-reading-skills){:target="_blank"}. These "skills" pre-packaged sets of instructions to AI agents, from which the agent can pick what appears relevant, to guide the agent in reading legislation and applying it to facts.
* Also in the meantime, legislative drafting offices should be putting renewed energy into updating and **publishing our drafting manuals** and doing so in a format that is convenient for AI readers as well as human readers. Only a small proportion of Commonwealth legislative drafting offices have made their [drafting manuals available on the CALC website](https://www.calc.ngo/drafting-manuals-and-other-resources){:target="_blank"} (a higher proportion of US states have done so).
* The Commonwealth has also published its own [Commonwealth-wide drafting book](https://thecommonwealth.org/publications/commonwealth-legislative-drafting-manual){:target="_blank"}, but still as a set of static pdfs. Ari Hershowitz has made an [experimental version of the book, to be human-&-AI-friendly](https://aih.github.io/commonwealth-leg-drafting-manual/about.html){:target="_blank"} instead - the Commonwealth and all legislative drafing offices should look into following his lead.
* For more, see our slides for the 2026 CALC conference in Singapore - [Updating what we tell ourselves about the legislative sentence for the AI age](https://osf.io/w6d9n){:target="_blank"}.

But we do also see AI helping humans in other ways - for fuller details, see chapter 4 of [our report on our work in 2024 & 2025](https://osf.io/m4che){:target="_blank"}.
* [Legal Drafting in the Era of Artificial Intelligence and Digitisation](https://joinup.ec.europa.eu/sites/default/files/document/2022-06/Drafting%20legislation%20in%20the%20era%20of%20AI%20and%20digitisation%20%E2%80%93%20study.pdf){:target="_blank"} – Palmirani & others – AI could help with the **nuts and bolts** of drafting and managing draft legislation. See also the 2025 book ["AI and Law: How Automation is Changing the Law"](https://www.routledge.com/AI-and-Law-How-Automation-is-Changing-the-Law/Tamo-Larrieux-Guitton-Mayer/p/book/9781032464527){:target="_blank"} (Tamo-Larrieux, Guitton & Mayer) - it is more about wider automation than just AI as such but it gives a good and succinct overview of all of the relevant issues (with leads for more detailed reading where it is too succinct).
* We are working on using AI to help with systems that reason **reliably** using **marked up** legislation. See the article by [Dr Guzyal Hill](https://researchers.cdu.edu.au/en/persons/guzyal-hill){:target="_blank"} ["From pen to algorithm: optimizing legislation for the future with artificial intelligence"](https://link.springer.com/article/10.1007/s00146-024-02062-3){:target="_blank"}, to which we contributed.
* We collaborated with [Digital Jersey](https://www.digital.je/){:target="_blank"}, the Government of Jersey's AI Working Group, and the Working Group on Legislation and AI at the [Commonwealth Association of Legislative Counsel](https://www.calc.ngo/){:target="_blank"}. We produced information notes to help tech firms thinking of developing a chatbot for questions about Jersey legislation. See [our report](https://osf.io/m4che){:target="_blank"}.

![Front page of draft of our notes for Jersey legislation chatbot developers](/images/Jsychatbotnote.png)

So can AI help human drafters to **parse** draft legislation (or maybe already enacted legislation) for key elements that a useful computer program would want to be able to read? We currently think a “hybrid” approach looks most likely to be useful –
* statistical/generative AI, and
* rule-based logic systems

helping each other. See Jason Morris [“GPT4 & Rules as Code”](https://gauntlet173.github.io/post/2023_04_12_llm_and_rac/){:target="_blank"} and a Canadian government team's [bid to develop Rules as Code chatbots](https://www.youtube.com/watch?v=UIz4TLBO4WQ){:target="_blank"}. 

We worked in 2025 with the [**Centre for Computational Law**](https://cclaw.smu.edu.sg/projects-papers/research-project-computational-law){:target="_blank"} (at Singapore Management University), and then the team at [**Legalese**](https://legalese.com){:target="_blank"} who created the [L4 language](https://github.com/smucclaw){:target="_blank"} for coding law, to see how L4 could form the basis of the reasoner filling in an AI sandwich of this sort. At the time those experiments struggled with getting various chatbots to stick to reporting what the L4 reasoner had produced (they could not stop themselves from adding their own hallucinated material, which made the whole result unreliable). But the L4 team have since made much more progress in getting LLMs to write, read and run L4 code, and in getting them to report results reliably to the human user - follow [Legalese](https://legalese.com){:target="_blank"} for future reports.

We reckon AI could also be helpful as part of the [tool for legislative drafters](https://crlp-jerseyldo.github.io/work/artificial-intelligence-and-legislation) that we are calling for, to help us mark up the logical structure of drafts. We worked with [Digital Jersey](https://www.digital.je){:target="_blank"}, Go Reply & Google on a test of how **[Google Cloud’s AIs](https://cloud.google.com/products/ai/?hl=en){:target="_blank"}** (beyond LLMs) can learn to identify standard/logical elements in drafts. That would help drafters make their drafts computer-readable.
* **Definitions** – scope, defined term, definition
* **Offences** – offence creation, penalty
* **Vires** to make subsidiary legislation - person given power, type of instrument
* **If-then** and-or-not structures (next) – conditions, effects, scope of and/or/not

![A screenshot of our work with Digital Jersey on AI from Google Cloud](/images/GoogleDJ.png)

In the longer run we imagine LLMs being useful as the interface with the user, guiding the user to a relevant item of legislation for a logic-based reasoner to ask questions and give fully sourced answers, but perhaps with the LLM then giving a summary and suggesting further questions. We think of that as an **AI and reasoner sandwich** - see our [AI sandwich](https://osf.io/8v5bd){:target="_blank"} slides. 

![The AI and reasoner sandwich](/images/AIbun.png)


**This page is being updated.** You can find the documents we produce in our AI stream on OSF: <https://osf.io/bkjqx/>{:target="_blank"}.
