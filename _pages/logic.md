---
layout: page
title: Logic and legislative drafting
permalink: /work/logic
parent: Our work
parent_url: /work/
---

* TOC 
{:toc}

## Guides to formal logic for legislative drafters
Formal logic is **useful** for legislative drafters -
* both as a reinforcement for the **common sense** logic they apply in constructing and checking their drafts,
* and as a bridge to understanding what **computers** can do with the logical structures in legislative drafts.

But most **introductory** guides to formal logic are written for students of computer science or mathematics, and head off too soon into specialist complications that are not needed by legislative drafters. Equally, legislative drafters do need a basic explanation of "deontic" logic, which is often treated as too advanced for general introductions to logic. 

So our project has tried to explain the basics of formal logic in ways that will make sense to, and be useful for, legislative drafters (particularly those working in the relatively rigorous [modern Commonwealth style of drafting](https://www.thecommonwealth-ilibrary.org/index.php/comsec/catalog/book/873){:target="_blank"}). 

* Matthew Waddington has published an article on how to apply formal logic to legislative drafting - [**The basics of symbolic formal logic as a useful tool for legislative counsel**](https://osf.io/tpra2){:target="_blank"} (original available through [CALC Loophole, November 2021](https://www.calc.ngo/publications/loopholes){:target="_blank"}).

[![Screenshot of Logic article in Loophole](/images/Logic-Loophole.png)](https://osf.io/tpra2){:target="_blank"}

* Zoe Rillstone has been running a **workshop on logic** for legislative drafters at meetings of the Commonwealth Association of Legislative Drafters in the various regions and globally. See her [**workshop slides**](https://osf.io/tks85){:target="_blank"}, her ["logic cheat sheet"](https://osf.io/rsbnj){:target="_blank"} and her ["truth tables"](https://osf.io/pg89x){:target="_blank"}. 

[![Screenshot of Logic presentation](/images/Logic-ZoePresentation.png)](https://osf.io/tks85){:target="_blank"}

We have gathered these and our other materials in the [**Logic folder** in our "Parsing exercises" documents on OSF](https://osf.io/qg4pb/files/osfstorage){:target="_blank"}.

[![Screenshot of OSF Parsing exercises with Logic folder](/images/Logic-folderOSF.png)](https://osf.io/qg4pb/files/osfstorage){:target="_blank"}

## Is there any logic in law (or at least in legislation)? 
Many lawyers are repulsed by the mathematical look of formal logic, and many common lawyers see logic as being a concern of civil law countries. But legislation in common law countries is meant to work logically, and legislative drafters do use common sense logic in checking our drafts.

### Against – 
* “The life of the law has not been logic; it has been experience.” [Oliver Wendell Holmes, The Common Law](https://www.gutenberg.org/files/2449/2449-h/2449-h.htm){:target="_blank"} (1881)
* "when lawyers reason or dispute about legal rights and obligations ... they make use of standards that do not function as rules" [Ronald Dworkin, The Model of Rules](https://www.jstor.org/stable/1598947){:target="_blank"} (1967)

### For – 
* [Hohfeld, Some Fundamental Legal Conceptions as Applied in Judicial Reasoning](https://www.jstor.org/stable/785533#metadata_info_tab_contents){:target="_blank"} (1913)
* [Layman Allen, Normalized Legal Drafting and the Query Method](https://repository.law.umich.edu/cgi/viewcontent.cgi?article=1028&context=articles){:target="_blank"} (1978)
* [Kowalski, The British Nationality Act as a Logic Program](https://www.doc.ic.ac.uk/~rak/papers/British%20Nationality%20Act.pdf){:target="_blank"} (1986)
* [Sartor, Fundamental Legal Concepts: A Formal and Teleological Characterisation](https://deon2008.uni.lu/Sartor_Paper.pdf){:target="_blank"} (2006)
* [Governatori, Rotolo & Sartor, Logic and the law: philosophical foundations, deontics, and defeasible reasoning](https://www.researchgate.net/publication/353013213_Logic_and_the_Law_Philosophical_Foundations_Deontics_and_Defeasible_Reasoning){:target="_blank"} (2021) in Gabbay, Horty & Parent, Handbook of Deontic Logic and Normative Reasoning 2, 655-760

### Between – 
* [Susan Haack, On Logic in the Law: 'Something, But Not All'](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3287317){:target="_blank"}
* [Sarah B. Lawsky, A logic for statutes](https://scholarship.law.ufl.edu/ftr/vol21/iss1/2/){:target="_blank"} - contrasts case-based reasoning, which law schools teach, with rule-based reasoning "as exemplified in much statutory reasoning", which is overlooked by most law schools but can be analysed logically (she argues for "defeasible" logic instead of standard formal logic)

### Legislative drafters – 

“If we draft legislation that has logical errors, every other lawyer will want to be the first to point and laugh” - Every legislative drafter ever. 

In modern Commonwealth legislative drafting, the legislative drafters are creating relationships between provisions which are expected to be **logically coherent** -
* One provision of a draft should not **contradict** another provision of the same draft without the relationship between them being clear (typically by saying one provision is "subject to" the other or applies "despite" the other).
* The drafter has made a mistake if there is a logical **inconsistency**. A common example is failing to deal with definitions that have some overlap -
  * a type of entity is defined and a provision requires those entities to do some act,
  * but then another type of entity is defined and prohibited from doing that act,
  * but there is some overlap in the definitions of the types of entities,
  * so that there are some entities that are both being required to do the act and prohibited from doing it.

## What logic are we talking about? 
There are several aspects to logic as it relates to legislative drafting and legislation

### Types of logic
* **common sense** logic - which we use to check our drafts
* **formal** logics - which logicians use to abstract logical structures - includes propositional logic, predicate logic and deontic logic (among others), as well as different types such as defeasible logic (for handling our exceptions, and exceptions to exceptions)
* **computer** logics - which computers use to operate, and which grew out of formal logic

### Types of language – can all be “parsed”
* **natural** – English, French, Welsh, Jèrriais 
* **non-natural** – logical languages, computer languages
* in between – **controlled natural languages** – natural language, but following rules so a computer can read it

### Key features of formal logic
* **Propositions** – true/false (binary/“Boolean” opposition) – linked in “arguments”
* **Formal** – abstraction with symbols & parentheses – form not content (like algebra)
* **Connectors** – not, and, or (inclusive/exclusive), if (if but not only if, or if and only if) – fixed meanings

## How does formal logic apply to legislative drafting? 
We are looking at formal logic, particularly propositional logic using "if", "and", "or" and "not". It is just a more sophisticated form of the **common sense logic** that legislative drafters **already** use to write their own drafts and to check drafts written by other drafters.

The key is that most legislative provisions apply a **legal effect** if certain **conditions** are met (but those conditions might be cumulative or alternative, and some of them might be expressed negatively). 
* This has a logical **if-then** structure, with and-or-not structures in the conditions.
* The **human** reader of the legislation often finds these structures **confusing**, particularly when we have to provide exceptions to exceptions and generally cater for the complexity of human activity.
* But the human reader can be **guided** through the logical structures by a computer, given that **computers can follow logic easily and reliably**.

![Simpler example provision rendered in symbolic logic](/images/example-formal-logic-lgsltn.png)
![More complex example provision rendered in symbolic logic](/images/symboliclogic-regulator.png)

## What do we mean by "parsing" the logical structure of a draft of legislation?
Parsing in **grammar** is something legislative drafters will already be familiar with. It is identifying the part of speech for each word in a sentence \(the grammatical function of the word\), and the relationships between them, as in "that is an adjective and it qualifies this noun". 

Parsing in **logic** is similar - our sentences can be treated as propositions and you can find the logical structure of the sentence by identifying the words that have logical functions and the ones that are being related to each other with those logical functions. In  
"a person who drives must wear a seatbelt"  
the logical structure is an if-then proposition - 
* the logical word is "who" which represents "if",
* the condition is "a person drives" and
* the effect is "a person must wear a seatbelt"

IF a person drives THEN a person must wear a seatbelt. 

The logic is more complex when we add lists joined by "and" or "or" and when we start negating some of the elements of the sentence. 
* In "A person must wear a seatbelt **if** the person drives **and** is **not** a police officer who is on duty **or** is responding to an emergency", there is ambiguity about whether the person responding to an emergency needs to be a police officer or whether that could be any person.
* Legislative drafters might fix that by breaking the sentence into paragraphs with different indentation and numbering - "A person must wear a seatbelt **if** the person - \(a\) drives **and** \(b\) is **not** a police officer who - \(i\) is on duty **or** \(ii\) is responding to an emergency"
* There are different forms of logical notation, but one way to render the logic of this would be "IF ((the person drives) AND ( NOT ((the person is a police officer who is on duty) OR (the person is a police officer who is responding to an emergency))) THEN (the person must wear a seatbelt)"

The purpose in each case is to capture the point that the person responding to the emergency needs to be a police officer if they are going to drive without a seatbelt.

For more on how we parse the logical structure in legislative provisions, see -
* [Parsing drafts for if-then logic](https://www.youtube.com/watch?v=0PIC4UcetsI&list=PLxI6pLSZVXTp3BA9IBK-Q_yZukyImMcnq&index=2){:target="_blank"} – video from CALC conference 2022;
* [Jersey’s project on parsing drafts for if-then structures for “Rules as Code”](https://www.calc.ngo/publications/loopholes){:target="_blank"}, Waddington, CALC Loophole, Sept 2023
* our [paper](https://osf.io/mt78r){:target="_blank"} on ways to parse **s1 British Nationality Act 1981** (the provision that kicked off computational law with the foundational [paper](https://www.doc.ic.ac.uk/~rak/papers/British%20Nationality%20Act.pdf){:target="_blank"} by Kowalski and others applying Prolog to it back in 1986)

[![Logical formalisation of s1 British Nationality Act](/images/Logic-BNAs1.png)](https://osf.io/mt78r){:target="_blank"}

**This page is a work in progress.** We plan to add explanations of propositional logic, and why we are using if-then rather than going into deontic logic or defeasible logic. You can find the documents we produce on OSF: <https://osf.io/bkjqx/>{:target="_blank"}.
