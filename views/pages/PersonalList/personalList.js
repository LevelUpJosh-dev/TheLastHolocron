import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts";

export default async (query) => {
    console.log(query);
    const personalList = await loadJsonFile(`views/pages/PersonalList/personalList.json`);

    return `
        <div class="container">
            <div class="main-body">
              <!-- Breadcrumb -->
              <nav aria-label="breadcrumb" class="main-breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item"><a href="/personal/records">Personal Records</a></li>
                  <li class="breadcrumb-item active" aria-current="page">${person.Name}</li>
                </ol>
              </nav>
              <!-- /Breadcrumb -->
              <div class="row gutters-sm">
                <div class="col-md-4 mb-3">
                  <div class="card mt-3">
                    
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="card mt-3">
                    
                  </div>
                </div>
              </div>
            </div>
        </div>
    `;
};
