---
layout: page
title: Logic and legislative drafting
permalink: /work/logic
parent: Our work
parent_url: /work/
---

* TOC 
{:toc}

## Is there any logic in law (or at least in legislation)? 
Many lawyers are repulsed by the mathematical look of formal logic, and many common lawyers see logic as being for those civil law countries. But legislation in common law countries is meant to work logically, and legislative drafters do use common sense logic in checking their drafts.

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

### Our contributions – 
* [The basics of symbolic formal logic as a useful tool for legislative counsel](https://www.calc.ngo/publications/loopholes){:target="_blank"}, Waddington, CALC Loophole, Oct 2021
* [Parsing drafts for if-then logic](https://www.youtube.com/watch?v=0PIC4UcetsI&list=PLxI6pLSZVXTp3BA9IBK-Q_yZukyImMcnq&index=2){:target="_blank"} – video from CALC conference 2022; Jersey’s project on parsing drafts for if-then structures for “Rules as Code”, Waddington, CALC Loophole, Sept 2023

“If we draft legislation that has logical errors, every other lawyer will want to be the first to point and laugh” - Every legislative drafter ever. 
In modern Commonwealth legislative drafting, the legislative drafters are creating logical structures which are expected to be coherent and in which one provision of a draft should not contradict another provision of the same draft without the relationship between them being clear (typically by saying one provision is "subject to" the other or applies "despite" the other), and the drafter has made a mistake if there is a logical inconsistency. 

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

Zoe Rillstone has been running a **workshop on logic** for legislative drafters at meetings of the Commonwealth Association of Legislative Drafters in the various regions and globally. See the slides and handouts in the [logic](https://osf.io/qg4pb/){:target="_blank"} folder in our "parsing exercises" stream on OSF. 

For more detail on applying formal logic to legislative drafting, see **The basics of symbolic formal logic as a useful tool for legislative counsel** in [CALC Loophole, November 2021](https://www.calc.ngo/publications/loopholes){:target="_blank"} (or the copy in the logic folder on OSF).

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

**This page is being updated.** You can find the documents we produce on OSF: <https://osf.io/bkjqx/>{:target="_blank"}.
