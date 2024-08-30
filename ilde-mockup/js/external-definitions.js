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
    parentLaw = {
        "msg"   : "Undefined term used in parent law",
        "terms" : [ "premises" ]
    },
    noLaw = {
        "msg"   : "Undefined term",
        "terms" : [ "hotel", "misunderstanding", "warning", "price list" ]
    }
];