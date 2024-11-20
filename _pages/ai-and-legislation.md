---
layout: page
title: Artificial Intelligence and legislation
permalink: /work/artificial-intelligence-and-legislation
parent: Our work
parent_url: /work/
---

We do not see AI taking over from humans in drafting legislation. 
* We have tried it for drafting, and it is good for suggesting provisions the drafter might not have thought of, but the drafting of the actual provisions is still nowhere near rigorous enough for workable legislation.
* See our experiments with drafting a Commercial Baking Act/Law with ChatGPT in 2023 and 2024 in our [AI & legislation](https://osf.io/bkjqx/){:target="_blank"} folder on OSF - 
  * ChatGPT - Commercial Baking Act.pdf
  * Drafting legislation with free ChatGPT as at 15 May 2024.pdf
  * Drafting legislation with ChatGPT 4o, again as at 15 May 2024.pdf

Nor do we see AI reliably answering questions about legislation on its own.
* Some tech firms are working on AI (generative AI, or LLMs) to make **chatbots** read legislation and answer questions about it. Examples include -
  * [Codify AI](https://codifyai.com/){:target="_blank"} for Canadian legislation, and
  * [Max](https://askmax.je/){:target="_blank"} for Jersey Financial Services Commission's [AML/CFT/CPF Handbook](https://www.jerseyfsc.org/industry/financial-crime/amlcftcpf-handbooks/amlcftcpf-handbook/){:target="_blank"} 
* But LLMs are not able to **reason** as such, as opposed to developing existing patterns, so they will remain unreliable ("hallucinating") for tasks that involve working out how legislative provisions apply to given fact scenarios. They often suffer where answering a question involves applying definitions, or following cross-references, as opposed to looking up an answer that is already on the face of the legislation.

But we do see AI helping humans.
* [Legal Drafting in the Era of Artificial Intelligence and Digitisation](https://joinup.ec.europa.eu/sites/default/files/document/2022-06/Drafting%20legislation%20in%20the%20era%20of%20AI%20and%20digitisation%20%E2%80%93%20study.pdf){:target="_blank"} – Palmirani & others – AI could help with the **nuts and bolts** of drafting and managing draft legislation.
* We are working on using AI to help with systems that reason **reliably** using **marked up** legislation. See the article by [Dr Guzyal Hill](https://researchers.cdu.edu.au/en/persons/guzyal-hill){:target="_blank"} ["From pen to algorithm: optimizing legislation for the future with artificial intelligence"](https://link.springer.com/article/10.1007/s00146-024-02062-3){:target="_blank"}, to which we contributed.
* We are collaborating with [Digital Jersey](https://www.digital.je/){:target="_blank"}, the Government of Jersey's AI Working Group, and the Working Group on Legislation and AI at the [Commonwealth Association of Legislative Counsel](https://www.calc.ngo/){:target="_blank"}.
* We are producing information notes to help tech firms thinking of developing a chatbot for questions about Jersey legislation.

![Front page of draft of our notes for Jersey legislation chatbot developers](/images/Jsychatbotnote.png)

So can AI help human drafters to **parse** draft legislation (or maybe already enacted legislation) for key elements that a useful computer program would want to be able to read? We currently think a “hybrid” approach looks most likely to be useful –
* statistical/generative AI, and
* rule-based logic systems

helping each other. See Jason Morris [“GPT4 & Rules as Code”](https://gauntlet173.github.io/post/2023_04_12_llm_and_rac/){:target="_blank"} and a Canadian government team's [bid to develop Rules as Code chatbots](https://www.youtube.com/watch?v=UIz4TLBO4WQ){:target="_blank"}. 

We reckon AI could also be helpful as part of the [tool for legislative drafters](https://crlp-jerseyldo.github.io/work/artificial-intelligence-and-legislation) that we are calling for, to help us mark up the logical structure of drafts. We are working with [Digital Jersey](https://www.digital.je){:target="_blank"}, Go Reply & Google on a test of how **[Google Cloud’s AIs](https://cloud.google.com/products/ai/?hl=en){:target="_blank"}** (beyond LLMs) can learn to identify standard/logical elements in drafts. That would help drafters make their drafts computer-readable.
* **Definitions** – scope, defined term, definition
* **Offences** – offence creation, penalty
* **Vires** to make subsidiary legislation - person given power, type of instrument
* **If-then** and-or-not structures (next) – conditions, effects, scope of and/or/not

![A screenshot of our work with Digital Jersey on AI from Google Cloud](/images/GoogleDJ.png)

In the longer run we imagine LLMs being useful as the interface with the user, guiding the user to a relevant item of legislation for a logic-based reasoner to ask questions and give fully sourced answers, but perhaps with the LLM then giving a summary and suggesting further questions. We think of that as an **AI and reasoner sandwich** - see our [AI sandwich](https://osf.io/8v5bd){:target="_blank"} slides

![The AI and reasoner sandwich](/images/AIbun.png)

We are planning to work in 2025 with the [**Centre for Computational Law**](https://cclaw.smu.edu.sg/projects-papers/research-project-computational-law){:target="_blank"} (at Singapore Management University) to see how their [L4 language](https://github.com/smucclaw){:target="_blank"} could form the basis of the reasoner filling in an AI sandwich of this sort.

**This page is being updated.** You can find the documents we produce in our AI stream on OSF: <https://osf.io/bkjqx/>{:target="_blank"}.
