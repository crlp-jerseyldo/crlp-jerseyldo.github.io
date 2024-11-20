---
layout: page
title: Parsing exercises
permalink: /work/parsing-exercises
parent: Our work
parent_url: /work/
---

* TOC 
{:toc}

## Parsing for the logical structure - further information 

* For information on **logic**, see our separate page on [**logic** and legislative drafting](/work/logic)
* For information about our **parsing** work, see -
  * our [Substack post](https://digitallegislation.substack.com/p/news-from-the-computer-readable-legislation?utm_source=profile&utm_medium=reader2){:target="_blank"} on the parsing work Margaux McQuilton did for us as an intern, and
  * ["Jersey’s project on parsing drafts for if-then structures for Rules as Code"](https://www.calc.ngo/sites/default/files/loophole/Loophole%20-%202023-02%20%282023-09-06%29.pdf){:target="_blank"} (or extracted [copy on OSF](https://osf.io/mfwc6){:target="_blank"})
* For more on how we see this fitting into "**Rules as Code**" and computational law, see -
  * [Rules As Code: Drawing Out the Logic of Legislation for Drafters and Computers](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4299375){:target="_blank"}
  * [Research Note - Rules as Code](https://journals.latrobe.edu.au/index.php/law-in-context/article/view/134){:target="_blank"}
  * our forthcoming notes on our plans for work with the [**Centre for Computational Law**](https://cclaw.smu.edu.sg/projects-papers/research-project-computational-law){:target="_blank"} (at Singapore Management University) to see how we can advance our ideas on parsing by using their [L4 language](https://github.com/smucclaw){:target="_blank"}
* For why we believe this is still needed however much [AI](/work/ai-and-legislation) will improve, see -
  * our presentation to CALC on a [hybrid "sandwich" approach](https://osf.io/8v5bd){:target="_blank"} 
  * and Canada's pitch to [develop ‘rules as code’ chatbots](https://www.youtube.com/watch?v=UIz4TLBO4WQ){:target="_blank"}

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

## What have we been parsing and how have we marked up the parsing?
We have a [set of imaginary examples of legislative provisions](https://osf.io/rjduz){:target="_blank"}, using different forms of if/who construction, with increasingly complex and/or/not relationships, and definitions and "must" provisions. The most basic is "if a person drives, the person must wear a seatbelt", working up to provisions that have all of these elements.

![Example imaginary provisions with if-and-or-not, definitions, must and offences](/images/AlcoholDogExamples.png)

We have tried various ways of marking up this parsing on the imaginary examples, and we will post a full set of them on OSF when they are ready. We have tried -
* **coloured highlighting** of the original text - first in Word, and then with better results in [docanno](https://doccano.github.io/doccano/){:target="_blank"}
* rewriting as a shadow draft in a formalised IF-THEN form
* [**QnA** Markup](https://www.qnamarkup.org){:target="_blank"} to produce free online questionnaires
* [**Mermaid** Markdown](https://mermaid.js.org){:target="_blank"} to produce free online flowcharts
* [AustLII **DataLex** ylegis and yscript](https://datalex.org){:target="_blank"} to produce free online consultations
* **Excel** spreadsheets - to demonstrate what can be done by carving the original text into chunks in cells which are then used in Excel's IF formula - see our working examples in the **"Spreadsheets if-then"** folder in our ["Parsing exercises" stream](https://osf.io/qg4pb/){:target="_blank"} on OSF
* we would like to have versions in other more sophisticated systems like [Blawx](https://www.youtube.com/@JasonMorrisRTL/){:target="_blank"} from [Jason Morris](https://www.linkedin.com/in/jason-morris-09684023/){:target="_blank"} - watch this space
* we will be working with the [**Centre for Computational Law**](https://cclaw.smu.edu.sg/projects-papers/research-project-computational-law){:target="_blank"} (at Singapore Management University) to produce a working model of a system for parsing provisions using their [L4 language](https://github.com/smucclaw){:target="_blank"}

The point of capturing the logical structure is to be able to use it in a logical reasoner, which will give answers about what the effect is when the relevant conditions are met, without any AI hallucinations.

## Parsing elements other than if-then - for retrieval
We are separately also analysing Jersey Laws for significant non-logical structures, starting with -
* definitions,
* offences, and
* powers to make subsidiary legislation. 

Later we will see whether it is worth trying to do that with "must", "may" and "must not" provisions. 

The point is not to use the output in a logical reasoner, but to be able to pull out all the examples in a particular Law of each type of provision and its standard elements (such as the defined term in a definition, or the penalty in an offence). That could be useful for making a first draft of the Explanatory Note. But it will also be useful -
* when Assembly members want to see where they are being asked to trust Ministers to make Orders, or
* when civil servants need to find powers to be delegated, or
* when the police and courts want to find new offences.

We are wary of suggestions that this sort of markup should be used to count up items as a way of drawing conclusions about the effect of the legislation. For instance, the drafter can carve up creating offences into several separate offences or one large one, and the number of separate offences created is not a good guide to how burdensome the legislation is. See Matthew's paper ["The statute data swamp: NLP, data cleansing, data interpretation and legislative drafting"](https://osf.io/preprints/socarxiv/vymhu){:target="_blank"} for problems with an exercise like that in NSW.

**This page is being updated.** You can find a our document store on OSF: <https://osf.io/yzf6x/>{:target="_blank"}.
