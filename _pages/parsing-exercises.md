---
layout: page
title: Parsing exercises
permalink: /work/parsing-exercises
parent: Our work
parent_url: /work/
---

* TOC 
{:toc}

## Parsing for the logical structure - what is logic anyway? 
Zoe Rillstone has been running a **workshop on logic** for legislative drafters at CALC meetings in the various regions and globally - see the slides and handouts in the [logic](https://osf.io/qg4pb/){:target="_blank"} folder in our "parsing exercises" stream on OSF. For more detail on application to legislative drafting, see **The basics of symbolic formal logic as a useful tool for legislative counsel** in [CALC Loophole, November 2021](https://www.calc.ngo/publications/loopholes){:target="_blank"} (or the copy in the logic folder on OSF).

We are looking at formal logic, particularly propositional logic using "if", "and", "or" and "not". It is just a more sophisticated form of the common sense logic that legislative drafters already use to write their own drafts and to check drafts written by other drafters.

![Example provision rendered in symbolic logic](/images/symboliclogic-regulator.png)

## What parsing are we doing?
For information about our parsing work, see 
* our [Substack post](https://digitallegislation.substack.com/p/news-from-the-computer-readable-legislation?utm_source=profile&utm_medium=reader2){:target="_blank"} on the work Margaux McQuilton did for us as an intern, and
* the article by Matthew Waddington in the CALC Loophole of September 2023 ["Jersey’s project on parsing drafts for if-then structures for Rules as Code"](https://www.calc.ngo/sites/default/files/loophole/Loophole%20-%202023-02%20%282023-09-06%29.pdf){:target="_blank"}

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
We have a [set](https://osf.io/rjduz){:target="_blank"} of imaginary examples of legislative provisions, using different forms of if/who construction, with increasingly complex and/or/not relationships, and definitions and "must" provisions. The most basic is "if a person drives, the person must wear a seatbelt", working up to provisions that have all of these elements.

![Example imaginary provisions with if-and-or-not, definitions, must and offences](/images/AlcoholDogExamples.png)

We have tried various ways of marking up this parsing on the imaginary examples, and we will post a full set of them on OSF when they are ready. We have tried -
* **coloured highlighting** of the original text - first in Word, and then with better results in [docanno](https://doccano.github.io/doccano/){:target="_blank"}
* rewriting as a shadow draft in a formalised IF-THEN form
* [**QnA** Markup](https://www.qnamarkup.org){:target="_blank"} to produce free online questionnaires
* [**Mermaid** Markdown](https://mermaid.js.org){:target="_blank"} to produce free online flowcharts
* [AustLII **DataLex** ylegis and yscript](https://datalex.org){:target="_blank"} to produce free online consultations
* **Excel** spreadsheets - to demonstrate what can be done by carving the original text into chunks in cells which are then used in Excel's IF formula - see our working examples in the **"Spreadsheets if-then"** folder in our ["Parsing exercises" stream](https://osf.io/qg4pb/){:target="_blank"} on OSF
* we would like to have versions in other more sophisticated systems like L4 from Singapore Management University and Blawx from Jason Morris - watch this space

The point of capturing the logical structure is to be able to use it in a logical reasoner, which will give answers about what the effect is when the relevant conditions are met, without any AI magic or hallucinations.

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
