// Name: Kyle Gladden
// Assessment: Lab#1

const book = {
    title: `JavaScript: The Good Parts`,
    author: `Douglas Crockford`,
    year: 2008,
    isbn: `978-0596517748`
};

//function that uses the passes object and property name through the parameter to display the value
function displayProperty(obj, propertyName) {
    console.log(`${propertyName}: ${obj[propertyName]}`);
}

//uses the newly passed value and updates the given object property name
function updateProperty(obj, propertyName, newValue) {
    obj[propertyName] = newValue;
}



displayProperty(book, `title`);
updateProperty(book, `year`, 2024);
displayProperty(book, `year`);