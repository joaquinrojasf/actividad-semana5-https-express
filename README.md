# 🔒 Servidor HTTPS con Node.js y Express

## 📌 Descripción

Este proyecto consiste en la implementación de un servidor web seguro utilizando **Node.js** y el framework **Express**, configurado para operar mediante el protocolo **HTTPS**.
Para ello, se generaron certificados digitales auto-firmados utilizando **OpenSSL**, permitiendo establecer una conexión cifrada entre el cliente y el servidor.

El objetivo principal es comprender el funcionamiento de HTTPS, la gestión de certificados SSL y la implementación de servidores seguros en entornos de desarrollo.

---

## ⚙️ Tecnologías utilizadas

* Node.js
* Express
* OpenSSL
* Visual Studio Code
* Git y GitHub

---

## 📥 Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

* Node.js
* OpenSSL

---

## 🚀 Instalación

Clona el repositorio:

```bash
git clone https://github.com/joaquinrojasf/actividad-semana5-https-express.git
cd actividad-semana5-https-express
```

Instala las dependencias:

```bash
npm install
```

---

## ▶️ Ejecución del servidor

Ejecuta el siguiente comando:

```bash
node server.js
```

Luego abre tu navegador en:

```text
https://localhost:8080
```

---

## ⚠️ Advertencia de seguridad

Al acceder al servidor, el navegador mostrará una advertencia indicando que la conexión no es privada.

Esto es completamente normal, ya que el certificado utilizado es **auto-firmado** y no ha sido emitido por una entidad certificadora oficial.

Para continuar:

* Seleccionar **“Avanzado”**
* Luego **“Continuar a localhost”**

---

## 📁 Estructura del proyecto

```text
servidor-https/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── evidencias/
```

---

## 🔐 Seguridad

Por razones de seguridad, los siguientes archivos no fueron incluidos en el repositorio:

* private_key.pem
* certificate.pem
* request.csr

Estos archivos están protegidos mediante `.gitignore` para evitar la exposición de claves sensibles.

---

## 📸 Evidencias

A continuación se presentan evidencias del funcionamiento del sistema:

### Servidor ejecutándose

![Servidor](evidencias/servidor_corriendo.png)

### Advertencia HTTPS

![Advertencia](evidencias/advertencia_https.png)

### Sitio funcionando

![Sitio](evidencias/sitio_funcionando.png)

---

## 👥 Integrantes

* Joaquin Rojas
* Boris Fernandez

---

## 🧠 Conclusión

Se logró implementar exitosamente un servidor HTTPS funcional en un entorno local, comprendiendo el uso de certificados digitales, la importancia del cifrado en las comunicaciones web y el proceso de configuración de servidores seguros.

Además, se utilizó Git y GitHub para el control de versiones, permitiendo una gestión ordenada del proyecto y facilitando el trabajo colaborativo.

---
