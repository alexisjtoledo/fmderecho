[![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/alexisjtoledo/fmderecho)
[![Download for iOS](https://img.shields.io/badge/Descargar-iOS-323C42.svg)](#)
[![Download for Android](https://img.shields.io/badge/Descargar-Android-A4C744.svg)](https://play.google.com/store/apps/details?id=com.fmderecho.fmapp)

# FMDERECHO APP
### [English: Go to development details](#development-details)

![Image](https://neon-dryad-755.web.app/img/main-readme-img.png)

Descargate nuestra App para acceder a todos los beneficios de tener el Centro de Estudiantes en la palma de tu mano

Nuestra aplicación está pensada para que tengas acceso a toda la información relacionada a la facu en el momento que lo necesites.

[![Youtube Video](https://fmderecho.com/mobile/img/video-preview.png)](https://www.youtube.com/watch?v=PaNxM35Pgm8)

Algunas de las funcionalidades son:
[English: Main functionalities](#main-functionalities)

- Noticias en tiempo real sobre el día a día en la facultad. [See in english](#real-time-news)
- Plan de estudios y correlatividades interactivas. [See in english](#interactive-study-plan-and-correlatives-scheme)
- Calendario Académico actualizado. [See in english](#real-time-updated-academic-calendar)
- Plano interactivo de la facultad. [See in english](#interactive-floor-plan-of-the-school)
- Datos de todas las Dependencias Administrativas. [See in english](#useful-administrative-information)
- Acceso a portales útiles de la Facultad y la Universidad. [See in english](#useful-external-links)
- Información completa y actualizada sobre todos los trámites, becas y derechos estudiantiles. [See in english](#updated-information-about-administrative-procedures)
- Programas de todas las materias. [See in english](#curricular-guidelines-for-all-of-the-subjects)
- Tarjeta de descuentos en comercios de la zona. [See in english](#discounts-program)
- Sistema de gestión virtual de reclamos por problemas edilicios en la facultad. [See in english](#contact-section)

---
## Development Details

FMderecho is an open-source native application developed using React Native as the main front-end framework. This application was created to make easier the life of the more than 10000 students of the Law School of the National University of Córdoba (UNC).

The application front-end design is inspired on Netflix and Instagram user interfaces, trying to recreate the mental schemes of these friendly and easy-to-use applications that are the most popular among the students of this institution according to a previous research.

---
## Current Stack

* React Native
  * react-navigation
  * react-native-gesture-handler
  * react-native-onboarding-swiper
  * react-native-collapsible
  * react-native-qrcode-generator
  * react-native-async-storage
* Expo
  * expo/vector-icons
  * expo-av
  * expo-linear-gradient
  * expo-notifications
  * expo-permissions
  * expo-sqlite
* PHP
* Google Cloud Platform - Firebase
* Google Cloud Platform - Firestore
* date-fns Javascript Library
* Icon font: Ionicon v4
* Source Control: GitHub
* Video: Adobe Premiere Pro CC / Adobe Media Encoder CC
* Design: Adobe Illustrator CC / Adobe Photoshop CC
* Editor: Visual Studio Code

---
## Data sources

All of the data consumed by this application are produced and maintained by Alexis Toledo and Franja Morada Derecho Córdoba and are accessible from Franja Morada's public API for free.

```
You are free to use all of the information from our API just fetching it from our public address. Just ask me for it :)
```

Although all of our efforts to maintain this data set reliable and updated, we have to clarify that neither Franja Morada nor Alexis Toledo is responsible for the veracity of that information because the data is taken from different data sources provided directly by the university and the law school. Use it at your own risk.

Remember that if you are using our public API, you should mention us in some part of your project ;).

---
## Main Functionalities

### **Real-time news**

This functionality takes the latest news and updates regarding general information, inclusion, student rights, and academic activities or events. The source of that information is taken from the Twitter feed using the Twitter API and using oAuth as authentication.

### **Interactive study plan and correlatives scheme**

With this function, the student is able to watch its academic status, observing the subjects in what it is allowed to enroll the next semester and also the subjects that it needs to approve to unlock a specific subject.

### **Real-time updated academic calendar**

It receives automatic actualizations about the dates of the partial and final exams. The student can also check the correlatives of the particular subject just one-click away.

### **Interactive floor plan of the school**

This tool allows the students to easily find all of the different dependencies and departments of the school by just selecting them in a picker. Once picked, the blueprint is going to point to the desired location.

### **Useful administrative information**

A list of all of the dependencies, secretaries, departments and public libraries of the school related to the law school or the university. All of the cards have the shortcuts for calling the dependency, send an email to it, or locate it in the floor plan, if available.

### **Useful external links**

Just a section with the most important external links for a student. From the virtual classroom to the University's webpage.

### **Updated information about administrative procedures**

This section is a list of all of the available administrative procedures in the school. It contains information about scholarships, applications, paperwork, subsidies, inscriptions, etcetera.

### **Curricular guidelines for all of the subjects**

The student can find in this component all of the updated programs for all of the subjects that he's taking every semester. The programs are well organized by year, semester, subject, and cathedra.

### **Discounts Program**

We know that being student could be difficult financially talking. That's why we created a discount program with special deals for law students. The discounts are accessible only by our application where you can also check the terms and conditions of every voucher.

### **Contact section**

The form allows the students to make a complaint, a suggestion, or just a question. It will be allowed to send us pictures or videos related to its issue, that way we are able to get some context and make easier to process the matter.


---
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

---
## License

[MIT](https://choosealicense.com/licenses/mit/)