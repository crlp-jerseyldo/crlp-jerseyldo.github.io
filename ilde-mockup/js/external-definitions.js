const extDefinitions = [
    interpretationLaw = {
        "title" : "Interpretation (Jersey) Law 1954",
        "url"   : "https://www.jerseylaw.je/laws/current/Pages/15.360.aspx",
        "terms" : [
            { 
                "term"      : "person", 
                "definition": "“person” shall include any body of persons corporate or unincorporated;",
                "ref"       : "Schedule, Pt. 1" 
            },
            { 
                "term"      : "contravene", 
                "definition": "“contravene”, in relation to any requirement or condition prescribed in an enactment or in a grant, permit, lease, licence or other authority under an enactment, includes a failure to comply with that requirement or condition;", 
                "ref"       : "Schedule, Pt. 1" 
            }
        ]
    },
    tourismLaw = {
        "title" : "Tourism (Jersey) Law 1948",
        "url"   : "https://www.jerseylaw.je/laws/current/Pages/05.850.aspx",
        "terms" : [
            { 
                "term"      : "register",
                "definition": "&#8220;register&#8221; means a register established in pursuance of Article 6 or, as the case may be, register in such a register, and the expressions &#8220;registered&#8221; and &#8220;registration&#8221; shall be construed accordingly;",
                "ref"       : "Art. 1(1)"
            },
            // { // Detection of 'registration' conflicts with the innerHTML set for the 'register' popup above
            //     "term"      : "registration",
            //     "definition": "&#8220;register&#8221; means a register established in pursuance of Article 6 or, as the case may be, register in such a register, and the expressions &#8220;registered&#8221; and &#8220;registration&#8221; shall be construed accordingly;",
            //     "ref"       : "Art. 1(1)"
            // },
            { 
                "term"      : "proprietor", 
                "definition": "“proprietor”, in relation to any premises, means the proprietor of the business conducted on those premises;", 
                "ref"       : "Art. 1(1)" 
            }
        ]
    },
];
const undefinedTerms = [
    haveLaw = {
        "msg"   : "Undefined term used in other law",
        "terms" : [ {
            "term" : "premises",
            "law": {
                "title": "<a href='https://www.jerseylaw.je/laws/current/Pages/05.850.aspx'>Tourism (Jersey) Law 1948</a>",
            },
            "lookup": [
                { "title": "<a href='#'>Art. 10 Interpretation (Jersey) Law 1954</a>", "msg": "for meanings from a Law under which Regs are made"}
            ]
        } ],
        "help"  : [
            { 
                "tool": "See",
                "msg": "&#8220;<a href='#'>Current Drafting Practice</a>&#8221; for the same-word-same-meaning principle",
            }
        ]
    },
    noLaw = {
        "msg"   : "Undefined repeated term",
        "terms" : [ "hotel", "misunderstanding", "warning", "price list"],
        "help"  : [
            {
                "tool": "Search",
                "msg": "other uses of the term in these <a href='#'>Regulations</a>",
            },
            { 
                "tool": "See",
                "msg": "&#8220;<a href='#'>Current Drafting Practice</a>&#8221; for the same-word-same-meaning principle",
            }
        ]
    }
];