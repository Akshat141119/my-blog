document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    document.getElementById('post-list').appendChild(post);

    document.getElementById('post-form').reset();
});
