---
layout: page
title: Parsing exercises
permalink: /work/parsing-exercises
parent: Our work
parent_url: /work/
---

* TOC 
{:toc}

## What do we mean by "parsing" the logical structure of a draft of legislation?
Parsing in grammar is something legislative drafters will already be familiar with. It is identifying the part of speech for each word in a sentence \(the grammatical function of the word\), and the relationships between them, as in "that is an adjective and it qualifies this noun". 

Parsing in logic is similar - our sentences can be treated as propositions and you can find the logical structure of the sentence by identifying the words that have logical functions and the ones that are being related to each other with those logical functions. In "a person who drives must wear a seatbelt", the logical structure is an if-then proposition - the logical word is "who" which represents "if", the condition is "a person drives" and the effect is "a person must wear a seatbelt" - IF a person drives THEN a person must wear a seatbelt. 

The logic is more complex when we add lists joined by "and" or "or" and when we start negating some of the elements of the sentence. 
* In "A person must wear a seatbelt **if** the person drives **and** is **not** a police officer who is on duty **or** is responding to an emergency", there is ambiguity about whether the person responding to an emergency needs to be a police officer or whether that could be any person.
* Legislative drafters might fix that by breaking the sentence into paragraphs with different indentation and numbering - "A person must wear a seatbelt **if** the person - \(a\) drives **and** \(b\) is **not** a police officer who - \(i\) is on duty **or** \(ii\) is responding to an emergency"
* There are different forms of logical notation, but one way to render the logic of this would be "IF ((the person drives) AND ( NOT ((the person is a police officer who is on duty) OR (the person is a police officer who is responding to an emergency))) THEN (the person must wear a seatbelt)"
The point in each case is to capture the point that the person responding to the emergency needs to be a police officer if they are going to drive without a seatbelt.

For information about our parsing work, see 
* our [Substack post](https://digitallegislation.substack.com/p/news-from-the-computer-readable-legislation?utm_source=profile&utm_medium=reader2){:target="_blank"} on the work Margaux McQuilton did for us as an intern, and
* the article by Matthew Waddington in the CALC Loophole of September 2023 ["Jersey’s project on parsing drafts for if-then structures for Rules as Code"](https://www.calc.ngo/sites/default/files/loophole/Loophole%20-%202023-02%20%282023-09-06%29.pdf){:target="_blank"}

## What have we been parsing and how have we marked up the parsing?
We have a set of imaginary examples of legislative provisions, using different forms of if/who construction, with increasingly complex and/or/not relationships, and definitions and "must" provisions. The most basic is "if a person drives, the person must wear a seatbelt", working up to provisions that have all of these elements. See the [full set](https://osf.io/rjduz){:target="_blank"} on our OSF site.

We have tried various ways of marking up this parsing on the imaginary examples, and we will post a full set of them on OSF when they are ready. We have tried -
* coloured highlighting of the original text - first in Word, and then with better results in [docanno](https://doccano.github.io/doccano/){:target="_blank"}
* rewriting as a shadow draft in a formalised IF-THEN form
* [QnA Markup](https://www.qnamarkup.org){:target="_blank"} to produce free online questionnaires
* [Mermaid Markdown](https://mermaid.js.org){:target="_blank"} to produce free online flowcharts
* [AustLII DataLex ylegis and yscript](https://datalex.org){:target="_blank"} to produce free online consultations
* Excel spreadsheets - to demonstrate what can be done by carving the original text into chunks in cells which are then used in Excel's IF formula
* we would like to have versions in other more sophisticated systems like L4 from Singapore Management University and Blawx from Jason Morris - watch this space

The point of capturing the logical structure is to be able to use it in a logical reasoner, which will give answers about what the effect is when the relevant conditions are met, without any AI magic or hallucinations.

We are separately also analysing Jersey Laws for significant non-logical structures - starting with definitions, offences, and powers to make subsidiary legislation. Later we will see whether it is worth trying to do that with "must", "may" and "must not" provisions. The point is not to use the output in a logical reasoner, but to be able to pull out all the examples in a particular Law of each type of provision and its standard elements (such as the defined term in a definition, or the penalty in an offence). That could be useful for making a first draft of the Explanatory Note, but it will also be useful when Assembly members want to see where they are being asked to trust Ministers to make Orders, or when civil servants need to find powers to be delegated, or when the police and courts want to find new offences.

## What is logic anyway? 
We are looking at formal logic, particularly propositional logic using "if", "and", "or" and "not". It is just a more sophisticated form of the common sense logic that legislative drafters already use to write their own drafters and to check drafts written by other drafters.

Zoe Rillstone has been running a **workshop on logic** for legislative drafters at CALC meetings in the various regions and globally - we will upload the slides and questions. Meanwhile there is **The basics of symbolic formal logic as a useful tool for legislative counsel** in [CALC Loophole, November 2021](https://www.calc.ngo/publications/loopholes){:target="_blank"}


**This page is being updated.** You can find a full archive on OSF: <https://osf.io/yzf6x/>{:target="_blank"}.
