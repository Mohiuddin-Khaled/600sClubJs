// Create a article object that contains properties

const article = {
    title: "Learning JS",
    category: "Programming"
};

const articleKeys = Object.keys(article);

// Check the specific object property key
console.log(articleKeys.includes('author'));