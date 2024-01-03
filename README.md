# react-mui-core

It is a front-end starter project created using React JS, Material UI, React Hook Form.

<!-- React JS, Material UI, React Hook Form kullanılarak oluşturulmuş ön yüz başlangıç projesidir. -->

## Directory structure

<!-- ## Dizin yapısı -->

### Overview

<!-- Genel Bakış -->

Project `src` structure directories.

<!-- Proje srcyapısı dizinleri. -->

```
src/
├─ assets/
│  ├─ logo.svg
├─ components/
|  ├─ ...
├─ contexts/
│  ├─ ApiContext.js
│  ├─ AuthContext.js
│  ├─ AuthContextHelperMethods.js
│  ├─ LanguageContext.js
│  ├─ LanguageContextHelperMethods.js
│  ├─ ThemeContext.js
├─ guard/
│  ├─ AuthGuard.js
├─ hooks/
│  ├─ ApiUseContext.js
│  ├─ AuthUseContext.js
│  ├─ LanguageUseContext.js
│  ├─ ThemeUseContext.js
├─ i18n/
│  ├─ locale/
|  |  ├─ en.json
|  |  ├─ tr.json
│  ├─ i18n.js
├─ layouts/
│  ├─ AuthLayout.js
│  ├─ DefaultLayout.js
├─ models/
│  ├─ api/
|  |  ├─ ...
│  ├─ form/
|  |  ├─ ...
├─ pages/
|  ├─ ...
├─ redux/
│  ├─ actions/
|  |  ├─ generalAppConfigAction.js
│  ├─ reducers/
|  |  ├─ generalAppConfigReducer.js
│  ├─ slices/
|  |  ├─ generalAppConfigSlice.js
│  ├─ store/
|  |  ├─ store.js
├─ router/
│  ├─ Router.js
├─ service/
│  ├─ firebase/
|  |  ├─ index.js
│  ├─ axios.js
│  ├─ axiosHelperMethods.js
├─ theme/
│  ├─ breakpoints.js
│  ├─ components.js
│  ├─ index.js
│  ├─ shadows.js
│  ├─ typography.js
│  ├─ variants.js
├─ utils/
│  ├─ config/
|  |  ├─ config.js
│  ├─ constants/
|  |  ├─ appConstants/
|  |  |  ├─ ...
|  |  ├─ apiConstant.js
|  |  ├─ languageConstant.js
|  |  ├─ locationStateKey.js
|  |  ├─ resizeWindowConstant.js
|  |  ├─ routerConstant.js
|  |  ├─ themeConstant.js
│  ├─ helper/
|  |  ├─ localizationProviderHelper.js
|  |  ├─ localStorageOperations.js
|  |  ├─ moment.js
|  |  ├─ other.js
|  |  ├─ sessionStorage.js
├─ validations/
|  ├─ ...
├─ vendor/
│  ├─ perfect-scrollbar
├─ App.js
├─ AppTheme.js
├─ index.js
```

## Features

<!-- Özellikler -->

Packages used `dependencies`

- **[@craco/craco](https://www.npmjs.com/package/@craco/craco):** A tool used to customize the configuration of React applications.

<!-- - **[@craco/craco](https://www.npmjs.com/package/@craco/craco):** React uygulama konfigürasyonunu özelleştirmek için kullanılan bir araç. -->

- **[@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers):** Resolvers for React Hook Form.

<!-- - **[@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers):** React Hook Form için çözümleyiciler. -->

- **[@mui/icons-material](https://www.npmjs.com/package/@mui/icons-material):** Material-UI icon set.

<!-- - **[@mui/icons-material](https://www.npmjs.com/package/@mui/icons-material):** Material-UI ikon seti. -->

- **[@mui/lab](https://www.npmjs.com/package/@mui/lab):** Experimental components of Material-UI.

<!-- - **[@mui/lab](https://www.npmjs.com/package/@mui/lab):** Material-UI'nin laboratuvar (experimental) bileşenleri. -->

- **[@mui/material](https://www.npmjs.com/package/@mui/material):** Material-UI components for React.

<!-- - **[@mui/material](https://www.npmjs.com/package/@mui/material):** React için Material-UI bileşenleri. -->

- **[@mui/styled-engine-sc](https://www.npmjs.com/package/@mui/styled-engine-sc):** Style engine supporting SC (styled-components) themes for Material-UI.

<!-- - **[@mui/styled-engine-sc](https://www.npmjs.com/package/@mui/styled-engine-sc):** Material-UI için SC (styled-components) temalarını destekleyen stil motoru. -->

- **[@mui/styles](https://www.npmjs.com/package/@mui/styles):** Styling library for Material-UI.

<!-- - **[@mui/styles](https://www.npmjs.com/package/@mui/styles):** Material-UI için stillendirme kütüphanesi. -->

- **[@mui/system](https://www.npmjs.com/package/@mui/system):** System components for Material-UI.

<!-- - **[@mui/system](https://www.npmjs.com/package/@mui/system):** Material-UI için sistem bileşenleri. -->

- **[@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api):** Library for using the Google Maps API in React projects.

<!-- - **[@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api):** Google Haritalar API'sini React projelerinde kullanmak için bir kütüphane. -->

- **[@reduxjs/toolkit@1.9.7](https://www.npmjs.com/package/@reduxjs/toolkit/v/1.9.7?activeTab=versions):** ...

<!-- - **[@reduxjs/toolkit@1.9.7](https://www.npmjs.com/package/@reduxjs/toolkit/v/1.9.7?activeTab=versions):** ... -->

- **[@tinymce/tinymce-react](https://www.npmjs.com/package/@tinymce/tinymce-react):** Component for using the TinyMCE text editor in React projects.

<!-- - **[@tinymce/tinymce-react](https://www.npmjs.com/package/@tinymce/tinymce-react):** TinyMCE metin düzenleyicisini React projelerinde kullanmak için bir bileşen. -->

- **[axios](https://www.npmjs.com/package/axios):** Library for making HTTP requests.

<!-- - **[axios](https://www.npmjs.com/package/axios):** HTTP istekleri yapmak için kullanılan bir kütüphane. -->

- **[date-fns](https://www.npmjs.com/package/date-fns):** Lightweight library for date and time operations.

<!-- - **[date-fns](https://www.npmjs.com/package/date-fns):** Tarih ve saat işlemleri için hafif bir kütüphane. -->

- **[deepmerge](https://www.npmjs.com/package/deepmerge):** Library used for merging objects.

<!-- - **[deepmerge](https://www.npmjs.com/package/deepmerge):** Nesneleri birleştirmek için kullanılan bir kütüphane. -->

- **[firebase](https://www.npmjs.com/package/firebase):** Library for Firebase connection and usage.

<!-- - **[firebase](https://www.npmjs.com/package/firebase):** Firebase bağlantısı ve kullanımı için kütüphane. -->

- **[http-status](https://www.npmjs.com/package/http-status):** Library for HTTP status codes.

<!-- - **[http-status](https://www.npmjs.com/package/http-status):** HTTP durum kodları için bir kütüphane. -->

- **[i18next](https://www.npmjs.com/package/i18next):** Translation library used for multi-language support.

<!-- - **[i18next](https://www.npmjs.com/package/i18next):** Çoklu dil desteği için kullanılan bir çeviri kütüphanesi. -->

- **[jss](https://www.npmjs.com/package/jss):** JavaScript CSS parser used for style definitions.

<!-- - **[jss](https://www.npmjs.com/package/jss):** Stil tanımlamaları için kullanılan bir JavaScript CSS çözümleyicisi. -->

- **[jwt-decode](https://www.npmjs.com/package/jwt-decode):** Library for decoding JSON Web Tokens (JWT).

<!-- - **[jwt-decode](https://www.npmjs.com/package/jwt-decode):** JSON Web Token'ları (JWT) çözümlemek için kullanılan bir kütüphane. -->

- **[moment](https://www.npmjs.com/package/moment):** Library for date and time manipulation.

<!-- - **[moment](https://www.npmjs.com/package/moment):** Tarih ve saat manipülasyonları için bir kütüphane. -->

- **[polished](https://www.npmjs.com/package/polished):** Helper library for CSS.

<!-- - **[polished](https://www.npmjs.com/package/polished):** CSS için kullanılan bir yardımcı kütüphane. -->

- **[react](https://www.npmjs.com/package/react):** React library.

<!-- - **[react](https://www.npmjs.com/package/react):** React kütüphanesi. -->

- **[react-country-flag](https://www.npmjs.com/package/react-country-flag):** React component for displaying country flags.

<!-- - **[react-country-flag](https://www.npmjs.com/package/react-country-flag):** Ülke bayraklarını göstermek için kullanılan bir React bileşeni. -->

- **[react-dom](https://www.npmjs.com/package/react-dom):** Library for rendering React applications to the DOM.

<!-- - **[react-dom](https://www.npmjs.com/package/react-dom):** React uygulamalarının DOM'a render edilmesi için kullanılan kütüphane. -->

- **[react-feather](https://www.npmjs.com/package/react-feather):** Library for using Feather icons in React projects.

<!-- - **[react-feather](https://www.npmjs.com/package/react-feather):** Feather ikonlarını React projelerinde kullanmak için bir kütüphane. -->

- **[react-hook-form](https://www.npmjs.com/package/react-hook-form):** React library for form management.

<!-- - **[react-hook-form](https://www.npmjs.com/package/react-hook-form):** Form yönetimi için kullanılan bir React kütüphanesi. -->

- **[react-i18next](https://www.npmjs.com/package/react-i18next):** React integration for the i18next translation library.

<!-- - **[react-i18next](https://www.npmjs.com/package/react-i18next):** i18next çeviri kütüphanesinin React entegrasyonu. -->

- **[react-number-format](https://www.npmjs.com/package/react-number-format):** React component for number formatting.

<!-- - **[react-number-format](https://www.npmjs.com/package/react-number-format):** Sayı formatlama için kullanılan bir React bileşeni. -->

- **[react-perfect-scrollbar](https://www.npmjs.com/package/react-perfect-scrollbar):** Library for using the Perfect Scrollbar in React projects.

<!-- - **[react-perfect-scrollbar](https://www.npmjs.com/package/react-perfect-scrollbar):** Mükemmel kaydırma çubuğunu React projelerinde kullanmak için bir kütüphane. -->

- **[react-redux@8.1.3](https://www.npmjs.com/package/react-redux/v/8.1.3):** ...

<!-- - **[react-redux@8.1.3](https://www.npmjs.com/package/react-redux/v/8.1.3):** ... -->

- **[react-router-dom](https://www.npmjs.com/package/react-router-dom):** React uygulamalarında sayfa navigasyonu için kütüphane.

<!-- - **[react-router-dom](https://www.npmjs.com/package/react-router-dom):** React uygulamalarında sayfa yönlendirmesi için kullanılan bir kütüphane. -->

- **[react-scripts](https://www.npmjs.com/package/react-scripts):** Command files used by Create React App.

<!-- - **[react-scripts](https://www.npmjs.com/package/react-scripts):** Create React App tarafından kullanılan komut dosyaları. -->

- **[react-toastify](https://www.npmjs.com/package/react-toastify):** React library for notification (toast) messages.

<!-- - **[react-toastify](https://www.npmjs.com/package/react-toastify):** Bildirim (toast) mesajları için kullanılan bir React kütüphanesi. -->

- **[styled-components](https://www.npmjs.com/package/styled-components):** Library used for styling with the CSS-in-JS approach.

<!-- - **[styled-components](https://www.npmjs.com/package/styled-components):** CSS-in-JS yaklaşımıyla stil tanımlamak için kullanılan bir kütüphane. -->

- **[web-vitals](https://www.npmjs.com/package/web-vitals):** Library for measuring web performance.

<!-- - **[web-vitals](https://www.npmjs.com/package/web-vitals):** Web performansını ölçmek için kullanılan bir kütüphane. -->

- **[yup](https://www.npmjs.com/package/yup):** Library used for schema validation.

<!-- - **[yup](https://www.npmjs.com/package/yup):** Şema doğrulama için kullanılan bir kütüphane. -->

Packages used `devDependencies`

- **[@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env):** Default environment preset used by Babel to transform JavaScript code for a specific environment.

<!-- - **[@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env):** Babel tarafından kullanılan bir Varsayılan Ortam (preset), JavaScript kodunu belirli bir ortama dönüştürmek için kullanılır. -->

- **[craco-alias](https://www.npmjs.com/package/craco-alias):** Used to add additional Babel and Webpack configuration to Create React App projects, especially for defining folder aliases.

<!-- - **[craco-alias](https://www.npmjs.com/package/craco-alias):** Create React App projelerinde ekstra Babel ve Webpack konfigürasyonu eklemek için kullanılır, özellikle klasör alias'ları tanımlamak için. -->

- **[eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier):** Used to fix incompatibilities between Eslint and Prettier.

<!-- - **[eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier):** Eslint ve Prettier arasındaki uyumsuzlukları düzeltmek için kullanılır. -->

- **[eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier):** Used to integrate Eslint with Prettier and enforce code style.

<!-- - **[eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier):** Eslint ile Prettier'ı entegre etmek ve kod stilinizi kontrol etmek için kullanılır. -->

- **[prettier](https://www.npmjs.com/package/prettier):** Used to automatically format and style your code.

<!-- - **[prettier](https://www.npmjs.com/package/prettier):** Kodunuzu otomatik olarak düzenlemek ve biçimlendirmek için kullanılır. -->


### API Layers and Context Structures

1. API Context (ApiContext)
Within the project, a specialized API Context structure is used for backend requests and responses. This layer facilitates communication between various components of the application and the backend.

2. Authentication Context (AuthContext)
Processes such as register, login, resetPassword, user authentication status, and distinguishing between authenticated and guest users are managed within the AuthContext.

3. Theme Context (ThemeContext)
The application supports the ability for users to change their preferred theme. This preference is managed within the ThemeContext. Users can dynamically switch between different themes at any time.

4. Language Context (LanguageContext)
The application features support for multiple languages. Users can change their language preference using the LanguageContext. This allows the application to display content in the user's selected language.

5. AuthGuard
AuthGuard serves as an intermediary layer to differentiate between authenticated and guest users. It grants access permissions to specific pages, enhancing security within the application.


These API layers and context structures effectively manage crucial features of the project, including backend integration, user session management, theme preferences, and language options.

### Installation

Clone the repo:

```bash
git clone https://github.com/mzehir/react-mui-core.git
cd react-mui-core
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Commands

### Running locally:

```bash
npm run start
```