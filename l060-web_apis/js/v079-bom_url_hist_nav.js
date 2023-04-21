console.log("*-* BOM: URL, Historial y Navegador");

console.log("------------------------------------------------------------------");

console.log(`********** Objeto URL (location) **********`);
console.log(`location:`, location);

// location.origin: contiene la serialización Unicode del origen de la URL que representa
console.log(`location.origin:`, location.origin);

// location.host: contiene el nombre del dominio
console.log(`location.host:`, location.host);

// location.hostname: contiene el nombre del dominio
console.log(`location.hostname:`, location.hostname);

// location.port: contiene el número del puerto de la página
console.log(`location.port:`, location.port);

// location.href: contiene la ubicación completa de la página
console.log(`location.href:`, location.href);

//lacation.hash: Muestra el identificador # interno de la página
console.log(`location.hash:`, location.hash);

// location.pathname: contiene la ruta del archivo
console.log(`location.pathname:`, location.pathname);

// location.serch: muestra los parametros pasados a la pagina
console.log(`location.search:`, location.search);

// location.reload: recarga la página en cuestion (lo comento para que no se haga infinito por estar en un servidor virtual)
// console.log(`location.reload:`, location.reload());

console.log(`********** Objeto History **********`);
console.log(history);
// Determinar el numero de pagina del historial al cual podemos retornar con los botones de retroceso del navegador
console.log(`history.length:`, history.length);

// Navegar el historial a travez de codigo
// history.forward(1); // Ir una página adelante
// history.back(2); // Ir dos página atrás
// history.go(-1); // Ir una página atrás
// history.go(2); // Ir dos páginas adelante

console.log(`********** Objeto Navegador **********`);
console.log(`navigator:`, navigator);
// Algunas propiedades del objeto navigator
console.log(`navigator.connection:`, navigator.connection);
console.log(`navigator.geolocation:`, navigator.geolocation);
console.log(`navigator.mediaDevices:`, navigator.mediaDevices);
console.log(`navigator.mimeTypes:`, navigator.mimeTypes);
console.log(`navigator.onLine:`, navigator.onLine);
console.log(`navigator.serviceWorker:`, navigator.serviceWorker);
console.log(`navigator.storage:`, navigator.storage);
console.log(`navigator.usb:`, navigator.usb);
console.log(`navigator.userAgent:`, navigator.userAgent);
