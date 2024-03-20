
const accordionitemTitle = document.getElementsByClassName("accordion_item_title")
const accordionDescription = document.getElementsByClassName("accordion_description")
const imageList = document.querySelectorAll('.accordion_item img');




function onSelectedItem() {
    for (let index = 0; index < accordionitemTitle.length; index++) {
        AddEvenListener(index)
    }
}


function AddEvenListener(index) {
    accordionSelected = accordionitemTitle[index]
    accordionSelected.addEventListener('click', () => {
        if (isSelectedAccordion(index)) {
            setDisplayProperty({ element: index, property: "none" })
            changeImage("assets/images/icon-plus.svg", index)
            return
        }
        setDisplayProperty({ element: index, property: "flex" })
        changeImage("assets/images/icon-minus.svg", index)
    })
}

function isSelectedAccordion(index) {
    return accordionDescription[index].style.display === "flex"
}

function setDisplayProperty({ element, property }) {
    accordionDescription[element].style.display = property
}

function changeImage(url, index) {
    imageList[index].src = url
}


onSelectedItem()

