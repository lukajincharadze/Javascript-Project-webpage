//load more example - xml http requist
let currentPage = 1;

let totalPages;

function getUsersInfo(page) {

    function render() {
        let response = this.responseText;
        let responseData = JSON.parse(response);

        var fragment = document.createDocumentFragment();

        responseData.data.forEach( item => {
            let li = document.createElement('li');

            let p = document.createElement('p');
            p.textContent = item.first_name;
            p.classList.add('image-block_title')

            let p2 = document.createElement('p');
            p2.textContent = item.last_name;
            p2.classList.add('image-block_title')

            let img = document.createElement('img');
            img.src = item.avatar;
            img.classList.add('image-block');

            let span = document.createElement('span');
            span.textContent = item.email;
            span.classList.add('image-block_email')

            let lidiv = document.createElement('div');
            lidiv.classList.add('li_div');

            
            li.appendChild(p);
            li.appendChild(p2);
            li.appendChild(span);
            
            
            li.prepend(lidiv);
            li.prepend(img);
            lidiv.prepend(p)
            lidiv.prepend(p2)
            
            fragment.appendChild(li);
        })

        document.getElementById('list').innerHTML = ' ';
        document.getElementById('list').appendChild(fragment);

        totalPages = responseData.total_pages;
    }

    function error() {

    }


    let requist = new XMLHttpRequest();
    requist.addEventListener('load',render);
    requist.addEventListener('error', error);
    requist.open('GET', 'https://reqres.in/api/users?page=' + page);
    requist.send();

}

document.getElementById('prev').addEventListener('click', function() {
    if (currentPage == 1) {
        return;
    }
    currentPage -= 1;
    // currentPage = currentPage - 1

    getUsersInfo(currentPage);
});


document.getElementById('next').addEventListener('click', function() {
    if (currentPage == totalPages) {
        return;
    }
    currentPage += 1;

    getUsersInfo(currentPage);
});

getUsersInfo();