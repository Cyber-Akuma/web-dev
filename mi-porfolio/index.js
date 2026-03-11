const herramientas = {
    "html": "public/icons/tecnologias/html.png",
    "css": "public/icons/tecnologias/css.png",
    "javascript": "public/icons/tecnologias/javascript.png",
    "angular": "public/icons/tecnologias/angular.png",
    "java": "public/icons/tecnologias/java.png",
    "mysql": "public/icons/tecnologias/mysql.png",
    "firebase": "public/icons/tecnologias/firebase.png",
    "node": "public/icons/tecnologias/node.png",
    "typescript": "public/icons/tecnologias/typescript.png",
    "python": "public/icons/tecnologias/python.png",
    "android": "public/icons/tecnologias/android.png",
    "php": "public/icons/tecnologias/php.png"
};

const contactos = {
    "github": {
        "icono": "public/icons/contactos/github.png",
        "link": "https://github.com/Cyber-Akuma"
    },
    "linkedin": {
        "icono": "public/icons/contactos/linkedin.png",
        "link": "https://www.linkedin.com/in/yassin-b601aa3b5/"
    },
    "gmail": {
        "icono": "public/icons/contactos/gmail.png",
        "link": "https://mail.google.com/mail/?view=cm&to=yassin1402oulad@gmail.com&su=Contacto desde tu portfolio"
    },
    "discord": {
        "icono": "public/icons/contactos/discord.png",
        "link": "#"
    },
    "cv": {
        "icono": "public/icons/contactos/cv.png",
        "link": "public/Yassin_Oulad_Mohand_CV.pdf"
    }
};

const contenedorContactos = document.getElementById('contenedorContactos');

Object.entries(contactos).forEach(([nombre, {icono, link}]) => {
    const a = document.createElement('a'); 
    a.href = link;
    a.target = "_blank";                   

    const img = document.createElement('img'); 
    img.src = icono;
    img.alt = nombre;

    a.appendChild(img);                  
    contenedorContactos.appendChild(a);   
});

const contenedorTecnologias = document.getElementById('contenedorTecnologias');

Object.entries(herramientas).forEach(([nombre, url]) => {
    const icono = document.createElement('img');
    icono.src = url;
    icono.alt = nombre;

    contenedorTecnologias.appendChild(icono);
});