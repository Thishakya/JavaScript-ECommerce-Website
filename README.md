JS AMAZONA

1.  Create Folder Structure
    1.  create root flder as jsamazona
    2.  add frontend and backend folder
    3.  create src folder in frontend
    4.  create index.html with heading jsamazona in src
    5.  run npm init in frontend folder
    6.  install live-server
    7.  add start command as live-server src --verbose
    8.  run npm start
2.  Design Website

    1.  create style.css
    2.  link style.css to index.html
    3.  create div.grid-container
    4.  create header, main, footer
    5.  style html, body
    6.  style grid-container, header, main and footer

3.  Create Static Home Screen

    1.  create ut.products
    2.  create li
    3.  create div. product
    4.  add .product—image, .product—name, .product—brand, .product—price
    5.  style ui.products and internal divs
    6.  duplicate 2 times to show 3 products

4.  Render Dynamic Home Screen

    1.  create data. js
    2.  export an array of 6 products
    3.  create screen/HomeScreen.js
    4.  export HomeScreen as an object with render() method
    5.  implement render( )
    6.  import data. js
    7.  return products mapped to lists inside an ul
    8.  create app.js
    9.  link it to index.html as module
    10. set main id to main_container
    11. create router() function
    12. set main_container innerHTML to HomeScreen. render( )
    13. set load event of window to router() function

5.  Build Url Router

    1.  create routes as route: screen object for home screen
    2.  create utits.js
    3.  export parseRequestURL( )
    4.  set urt as hash address split by slash
    5.  return resource, id and verb of url
    6.  update router()
    7.  set request as parseRequestURL()
    8.  build parsedUrt and compare with routes
    9.  if route exists render it, else render Error4Ø4
    10. create screens/Error404.js and render error message

6.  Ceate Node. JS Server
    1.  run npm init in root jsamazona folder
    2.  npm install express
    3.  create server. js
    4.  add start command as node backend/server.js
    5.  require express
    6.  move data. js from frontend to backend
    7.  create route for /api/products
    8.  return products in data. js
    9.  run npm start
