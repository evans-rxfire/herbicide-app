const herbicideNames = [
    {
        commonName: "aminocyclopryachlor:triclopyamine (1:2)",
        chemicalName: "6-amino-5-chloro-2-cyclopropyl-pyrimidinecarboxylic acid, potassium salt",
        productName: ["Invora"],
        activeIngredient: "2lb/gal"
    }, 

    {
        commonName: "aminopyralid",
        chemicalName: "2-pyridine carboxylic acid, 4-amino-3, 6-dichloro-2-pyrdine carboxylic acid, triisopropanolammonium slat",
        productName: null,
        activeIngredient: null
    },

    {
        commonName: "aminopyralid:2,4D (1:8)",
        chemicalName: "See aminopyralid and 2,4-D",
        productName: ["GrazonNext HL"],
        activeIngredient: "3.75 lb/gal"
    },

    {
        commonName: "aminopyralid:clopyralid (1:4.6)",
        chemicalName: "See aminopyralid and clopyralid",
        productName: ["Sendero"],
        activeIngredient: "2.8lb/gal"
    },

    {
        commonName: "aminpyralid:metsulfuron methyl (1:6.2)",
        chemicalName: "See amniopyralid and metsulfuron",
        productName: ["Chaparral"],
        activeIngredient: "0.62lb/gal"
    },

    {
        commonName: "aminopyralid:picloram:fluroxypyr (1:2.2)",
        chemicalName: "See aminopyralid, picloram, and fluroxypyr",
        productName: ["MezaVue"],
        activeIngredient: "2lb/gal"
    },

    {
        commonName: "clopyralid",
        chemicalName: "3,6-dichloro-2-pyridinecarboxylic acid",
        productName: ["Pyramid R&P", "Sonora"],
        activeIngredient: "3lb/gal"
    },

    {
        commonName: "2,4-D",
        chemicalName: "(2,4-diclorophenoxy) acetic acid",
        productName: ["Weedar 64", "Broad Range 55", "Hi-Dep", "Weedone LV4", "Esteron 99", "Unison", "others"],
        activeIngredient: "amine salts, free acidds, and esters of various concentration"
    },

    {
        commonName: "dicamba",
        chemicalName: "3/6-dichloro-2-methooxybenzoic acid",
        productName: ["Banvel", "Clarity", "Vision"],
        activeIngredient: "4lb/gal"
    },

    {
        commonName: "dicamba:2,4-D (1:3)",
        chemicalName: "See dicamba and 2,4-D",
        productName: ["Weedmaster", "Banvel + 2,4-D", "RangeStar", "Outlaw"],
        activeIngredient: "4lb/gal"
    },

    {
        commonName: "dicamba:2,4-D (1:1.3)",
        chemicalName: "See dicamba and 2,4-D",
        productName: ["Latigo"],
        activeIngredient: "4lb/gal"
    },

    {
        commonName: "diesel fuel oil or kerosene",
        chemicalName: "refined petroleum fractions",
        productName: ["Several manufacturers"],
        activeIngredient: null
    },

    {
        commonName: "fluroxypyr",
        chemicalName: "1-methylheptyl ester: ((4-amino-3,5-dichloro-6-fluoropyridin-2-yl)oxy)acetic acid",
        productName: ["Vista XRT"],
        activeIngredient: "2.8lb/gal"
    },

    {
        commonName: "glyphosate",
        chemicalName: "N-(phosphonomethyl) glycine",
        productName: ["Rodeo", "Roundup", "Roundup Ultradry", "Glyphosate 417"],
        activeIngredient: "isopropylamine salt; concentration varies depending on the product"
    },

    {
        commonName: "hexazinone",
        chemicalName: "3-cyclohexyl-6-(dimethylamino)-1-methyl-1,3,5-triazine-2,4(IH, 3H)-dione",
        productName: ["Velpar L", "Pronone Power Pellet"],
        activeIngredient: "2lb/gal (Velpar L), 75% (Pronone Power Pellet)"
    },

    {
        commonName: "imazapyr",
        chemicalName: "2-[4,5-dihydro-4-methyl-4-(1-methylethy)-5-oxo-lH-imidazol-2-yl]-3-pyridinecarboxylic acid",
        productName: ["Aresnal", "Habitat"],
        activeIngredient: "2lb/gal"
    },

    {
        commonName: "metsulfuron methyl",
        chemicalName: "methyl 2[(4-methoxy-6-methyl-1,3,5-triazin-2-yl)amino]carbonyl]amino] sulfonyl] benzoate",
        productName: ["Escort", "Clean Pasture", "MSM 60DF"],
        activeIngredient: "60%"
    },
    {
        commonName: "metsulfuron:cholosulfuron (3:1)",
        chemicalName: "See metsulfuron methyl + 2-chloro-N-[(4-methoxy-6-methyl-1,3,5-triazin-2-yl)aminocarbonyl benzenesulfonamide",
        productName: ["Cimarron Plus"],
        activeIngredient: "48% metsulfuron, 15% chlorosulfuron"
    },

    {
        commonName: "metsulfuron:chlorosulfuron (1:1)",
        chemicalName: "See metsulfuron:chlorosulfuron",
        productName: ["Cimarron X-Tra"],
        activeIngredient: "30% metsulfuron, 37.5% chlorosulfuron"
    },

    {
        commonName: "metsulfuron methyl dicamba:2,4-D (1:3)",
        chemicalName: "See metsulfuron methyl, dicamba, and 2,4-D",
        productName: ["Cimarron Max"],
        activeIngredient: "60% (Part A), 3.87lb/gal (Part B)"
    },

    {
        commonName: "picloram",
        chemicalName: "4-amino-3,5,6-trichloro-2-pyridinecarboxylic acid",
        productName: ["Tordon 22K", "Triumph 22K", "Picloram 22K"],
        activeIngredient: "2lb/gal"
    },

    {
        commonName: "picloram:fluroxypyr (1:1)",
        chemicalName: "See picloram and fluroxypyr",
        productName: ["Surmount"],
        activeIngredient: "1.34lb/gal"
    },

    {
        commonName: "picloram:2,4-D (1:4)",
        chemicalName: "See picloram and 2,4-D",
        productName: ["Grazon P+D", "Gunslinger", "Picloram + D"],
        activeIngredient: "2.5lb/gal"
    },

    {
        commonName: "picloram:2,4-D (1:4)",
        chemicalName: "See picloram and 2,4-D",
        productName: ["Grasaln L"],
        activeIngredient: "3.8lb/gal"
    },

    {
        commonName: "tebuthiuron",
        chemicalName: "N-[5-(1,1-dimethylethy)-1,3,4-thiadiazol-2-yl}-N-N'-dimethylurea",
        productName: ["Spike 20P", "Spike 80 DF"],
        activeIngredient: "20% (Spike 20P), 80% (Spike 80 DF)"
    },

    {
        commonName: "triclopyr amine",
        chemicalName: "3,5,6-trichloro-2-pyridinyloxyacetic acid, triethylamine salt",
        productName: ["Garlon 3A"],
        activeIngredient: "3lb/gal"
    },

    {
        commonName: "triclopyr ester",
        chemicalName: "3,5,6-trichloro-2-pyridinyloxyacetic acid, butoxyethyl ester",
        productName: ["Clear Pasture", "Pathfinder II", "Triclopyr R&P", "Remedy Ultra", "Triclopyr 4 EC"],
        activeIngredient: "0.75lb/gal (Pathfinder II-ready-to-use formulation for stem sprays, 4lb/gal (all others)"
    },

    {
        commonName: "triclopyr:fluroxypyr (3:1)",
        chemicalName: "See triclopyr and fluroxypyr",
        productName: ["PastureGard HL"],
        activeIngredient: "4lb/gal"
    },

    {
        commonName: "triclopyr:2,4-D",
        chemicalName: "See triclopyr and 2,4-D",
        productName: ["Crossbow"],
        activeIngredient: "3lb/gal"
    },
];

const weedControl = [
    {
        plantName: ["African rue"],
        herbicides: [
            {
                herbicideName: "hexazinone liquid",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2ml/plant"
                    }
                },
                sprayVolume: "Use an exact delivery handgun to apply undiluted herbicide to soil surface at teh edge of the plant canopy.",
                timing: "Spring-summer",
                remarks: "Do not use on heavy clay or caliche soils."
            },

            {
                herbicideName: "hexazinone pellet",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: "1 pellet/plant"
                    }
                },
                sprayVolume: null,
                timing: "Spring-summer",
                remarks: "Do not use on heavy clay or caliche soils."
            },

            {
                herbicideName: "tebuthiuron 20% pellets",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "7.5lb (1.5lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: null,
                timing: "Spring-summer",
                remarks: "Do not use on heavy clay or caliche soils."
            },

            {
                herbicideName: "imazapyr",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "32oz (0.5lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5%"
                    }
                },
                sprayVolume: "10-25 gal/ac for ground broadcast. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Late Sept-Oct (to first frost)",
                remarks: "Apply to fall regrowth that is in good growing condition. Recommend using individual plant treatment when growing with desirable vegetation to reduce non-target damage. Imazapyr is a non-selective herbicide and will kill or damage desirable vegetation if sprayed."
            },
        ]
    }, 

    {
        plantName: ["Berlander lobelia", "bitter sneezeweed", "buffalobur", "camphorweed", "cocklebur", "croton", "horehound", "marshelder (sumpweed, sulfaweed)", "prairie gerardia", "ragweed", "smartweed", "sunflower", "thistles", "western bitterweed", "western ragweed"],
        herbicides: [
            {
                herbicideName: "2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "16-32oz (0.5-1lb) 4lb/gal product"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1% (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds 4-6in. high, good moisture conditions. Spray thistles in rosette stage.",
                remarks: "With 2,4-D, use the amine formulation in areas with 25in. of rainfall or more and the ester formulation in drier areas where no susceptible crops are nearby. For western bitterweed control, use 2,4-D low volatile ester or amine at 32oz/ac before plants flower, temperature above 72° F, and soil moisture favors plant growth. When 3/4 of plants are blooming, and/or temperature is less than 60°F, use dicamba:2,4-D (1:3), 2,4-D plus dicamba; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product), aminopyralid:2,4-D (1:8) or 2,4-D plus picloram. For prairie gerardia control, use 48 oz/acre of 2,4-D or the low rate of dicamba:2,4-D (1:3), dicamba plus 2,4-D; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product) or picloram plus 2,4-D when plants are 4-6in. high.Use 20 oz/acre of picloram:2,4-D (1:4), (3.8lb/gal product; Do not apply more than 80oz/acre per year), 32oz/acre of picloram:2,4-D (1:4), (2.5lb/gal product) or 8 oz of 2,4-D/acre when plants are 6-10 in. high before flowering."
            },

            {
                herbicideName: "dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },
        ]
    }, 

];

const brushControl = [
    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            },
        ]
    }, 

];

