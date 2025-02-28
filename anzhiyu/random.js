var posts=["2025/02/28/hello-world/","2025/03/01/CVE-2024-41592 vigor 栈溢出漏洞分析/"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };