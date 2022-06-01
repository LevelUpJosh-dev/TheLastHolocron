import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts";

export default async () => {
    const data = await loadJsonFile("views/pages/home.json");
    const { Footer, Main, NavLinks, Header } = data;

    return `
        <meta name="theme-color" content="#7952b3">
        <link rel="stylesheet" href="home.css" >
        <body class="d-flex h-100 text-center text-white bg-dark">

        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header class="mb-auto">
            <div>
              <img id="logo" src="logo.jpg" class="rounded my-4 w-25 h-25 mx-auto" alt="logo image">
              <h2 class="${Header.classes}">${Header.text0}</h2>
              <nav class="nav nav-masthead justify-content-center float-md-end">
                <a class="nav-link active ${NavLinks.Home.classes}" aria-current="page" href="${NavLinks.Home.href}">
                    ${NavLinks.Home.text0}
                </a>
                <a class="${NavLinks.Swapi.classes}" href="${NavLinks.Swapi.href}">
                    ${NavLinks.Swapi.text0}
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