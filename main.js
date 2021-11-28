const articles = document.querySelector("#articles");

function createArticle(title, link, points, comments, author) {
    const article = document.createElement("div");
    article.className = "article";

    const articleTitle = document.createElement("h3");
    const articleTitleLink = document.createElement("a");
    articleTitleLink.textContent = title;
    articleTitleLink.href = link;
    articleTitle.append(articleTitleLink);
    
    const infos = document.createElement("p");
    infos.textContent = `${points} points | ${comments} comments | by ${author}`;

    article.append(articleTitle);
    article.append(infos);

    return article;
}

for(let i = 0; i < 10; i++) {    
    const request = new XMLHttpRequest();
    request.open("GET", `https://hacker-news.firebaseio.com/v0/item/${i + 1}.json`);
    
    request.responseType = "json";
    
    request.onload = () => {
        
        let {title, url: link, score: points, descendants: comments, by: author } = request.response;
        let article = createArticle(title, link, points, comments, author);
        
        articles.append(article);
    };
    request.send();
}