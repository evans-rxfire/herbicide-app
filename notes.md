I need some kind of diclaimer on the page, regarding the informational purpose of the page and that errors may be present. 

For refGuide.html form:
- user selects weed or brush control
- "Select a species" `<select>` element is generated with all of the species from the `weedControl` or `brushControl` arrays in `refGuide.js`.
    - Some objects in the arrays have multiple species names in `plantName`. Each plant name will need its own `option`. 
    - Some plants have more than one entry in the arrays. Check for exact matches already present before adding plant name as an `option` element.
- user selects a plant name from the list
- a table is generated with the recommended herbicide(s), herbicide quantities, spray volumes, times, and remarks.
    - not sure if a table it the best option, due to the varying amount of information for each plant/herbicide. 
        - What other options are available?
    - for plants with more than one entry, need to ensure that all instances of the plant name are in the output 
    - it would be nice for each herbicide name to link back to the `herbicideNames` array or display that information as a tooltip.


--- 

What needs to be displayed in the output for the *Brush Busters* page:
- plant name
- type of application
- Works well on
- When to apply
- Ingredient
    - herbicide
        - name
        - concentration
        - tank size
            - 1 gal
            - 3 gal
            - 14 gal
            - 25 gal
        - surfactant yes/no
        - dye yes/no/optional
    - surfactant
        - concentration
        - tank size
            - 1 gal
            - 3 gal
            - 14 gal
            - 25 gal
    - dye
        - concentration
        - tank size
            - 1 gal
            - 3 gal
            - 14 gal
            - 25 gal
    

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