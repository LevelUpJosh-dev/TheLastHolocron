import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts";
import { BaseStyles } from "../../styles.js";

export default async () => {
    const data = await loadJsonFile("views/pages/home.json");
    const { Footer, Main, NavLinks, Header } = data;

    return `
        <meta name="theme-color" content="#7952b3">
        <body class="d-flex h-100 text-center text-white bg-dark">
        <style>
            ${BaseStyles()}
        </style>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <img id="logo" src="logo.jpg" class="rounded my-4 w-25 h-25 mx-auto" alt="logo image">
          <header class="mb-auto">
            <div>
              <h2 class="${Header.classes}">${Header.text0}</h2>
              <nav class="my-3 nav nav-masthead justify-content-center float-md-end">
                <a class="nav-link active ${NavLinks.Home.classes}" aria-current="page" href="${NavLinks.Home.href}">
                    ${NavLinks.Home.text0}
                </a>
                <a class="${NavLinks.About.classes}" href="${NavLinks.About.href}">
                    ${NavLinks.About.text0}
                </a>
              </nav>
            </div>
          </header>
        
          <main class="px-3">
            <h3>${Main.text0}</h3>
            <p class="lead">${Main.text1}</p>
          </main>
        
          <footer class="mt-auto text-white-50">
            <p>${Footer.text0}</p>
            <p class="text-white-25">${Footer.text1}</p>
          </footer>
        </div>
    `
}