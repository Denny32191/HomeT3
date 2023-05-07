const path = "/loftschool/js/my-first-tasks.html"

const isHtml = path => {
  const requiredExt = ".html";
  const pathExt = path.slice(-5);

  if (pathExt == requiredExt) { 
    return true
  } else {
    return false
  }
}

console.log(isHtml(path));