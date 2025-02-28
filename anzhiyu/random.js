var posts=["2025/02/28/hello-world/","2025/02/28/“文章”/"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };