

let foo = ()=>{


    let newsApi = "79f42ab294404ac4a46d06a09336be0b";

    let search = document.getElementById('search').value
    axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2023-04-24&sortBy=publishedAt&apiKey=${newsApi}`)

    .then((news)=>{


        // news.data.articles.array.foreach(element => {


        //     let div1 = document.createElement('div');
        //     let span1 = document.createElement('span');
        //     let para = document.createElement('span');
        //     let maindiv = document.getElementById('maindiv');

        //     let heading = document.createTextNode(element.title)
        //     let article = document.createTextNode(element.description)
        //     span1.appendChild(heading)
        //     para.appendChild(article)
        //     div1.appendChild(span1, para)
        //     maindiv.appendChild(div1)

            
        // });

        news.data.articles.forEach(element => {

                let div1 = document.createElement('div');
            let span1 = document.createElement('span');
            let para = document.createElement('span');
            let maindiv = document.getElementById('maindiv');

            let heading = document.createTextNode(element.title)
            let article = document.createTextNode(element.content)
            let newHeading = "<q>" + element.title + "</q>"
            let newArticle = "<blockquote>" + element.content + "<blockquote>"
            let newImage = document.createElement('img')
            newImage.src = element.urlToImage
            // span1.appendChild(newHeading)
            span1.innerHTML = newHeading
            // para.appendChild(article)
            para.innerHTML = newArticle
            span1.className = 'heading';
            para.className = 'content';
            newImage.className = 'forimage'
            div1.appendChild(span1)
            div1.appendChild(newImage)
            div1.appendChild(para)
            maindiv.appendChild(div1)
            console.log(newHeading)

            
            
        });


        console.log(news.data.articles)
    console.log(newHeading)

        
        
       
       
       // console.log(res.data.main.temp)
        // console.log(res.data.main.pressure)
        // console.log(res.data.main.temp_max)
        // console.log(res.data.main.temp_min)
    })
    .catch((err)=>{
        console.log(err)
    })

    // console.log(newHeading)


}