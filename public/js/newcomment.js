const newFormHandler = async (event) => {
  event.preventDefault();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1


  ];

  console.log("name")
  console.log(post_id)

    const commentuser = document.querySelector('#bt');
    const commentuser_id = commentuser.getAttribute('data-user');


  
  const comment_content = document.querySelector('#comment').value.trim();

  console.log(comment_content )
  console.log(commentuser_id)



  if (comment_content && post_id && commentuser_id) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_content, post_id, commentuser_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to write comment');
    }
  }
  };

  // if (comment_content && comment_by && post_id ) {
  //   const response = await fetch(`/api/comments`, {
  //     method: 'POST',
  //     body: JSON.stringify({ comment_content, comment_by, post_id}),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (response.ok) {
  //     document.location.replace('/');
  //   } else {
  //     alert('Failed to write comment');
  //   }
  // }
  // }


  

document
  .querySelector('.comment-form')
  .addEventListener('submit', newFormHandler);


