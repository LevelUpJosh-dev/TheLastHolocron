import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts";

export default async (query) => {
    console.log(query);
    const person = await loadJsonFile(`views/pages/Personal/records/${query}.json`);

    return `
        <div class="container">
            <div class="main-body">
              <!-- Breadcrumb -->
              <nav aria-label="breadcrumb" class="main-breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item"><a href="/">Personal Records</a></li>
                  <li class="breadcrumb-item active" aria-current="page">${person.Name}</li>
                </ol>
              </nav>
              <!-- /Breadcrumb -->
              <div class="row gutters-sm">
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex flex-column align-items-center">
                        <img src="${person.ProfileImage}" alt="profile-image" width="250">
                        <div class="mt-3">
                          <h4 class="text-center">${person.Name}</h4>
                          <p class="text-secondary mb-1">Birth Place: ${person.BirthPlace}</p>
                          <p class="text-secondary mb-1">Designation: ${person.Designation}</p>
                          <p class="text-secondary mb-1">Status: ${person.Status}</p>
                          <p class="text-secondary mb-1">Current Location: ${person.Location}</p>
                          <p class="text-secondary mb-1">Age: ${person.Age}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card mt-3">
                    <ul class="list-group list-group-flush">
                    </ul>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-3">
                    <div class="card-body">
                    <img src="https://i.ytimg.com/vi/6DVPdGvjZMw/maxresdefault.jpg" alt="profile-image" width="685">
                    </div>
                  </div>
                  <div class="row gutters-sm">
                    <div class="col-sm-6 mb-3">
                      <div class="card h-100">
                        <div class="card-body">
                          <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Combat Skillset</i></h6>
                          <small>Lightsaber Combat</small>
                          <div class="progress mb-3" style="height: 5px">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: ${person.LightsaberCombat}%" aria-valuenow="${person.LightsaberCombat}" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Force Ability</small>
                          <div class="progress mb-3" style="height: 5px">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: ${person.ForceAbility}%" aria-valuenow="${person.ForceAbility}" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Light Arms Combat</small>
                          <div class="progress mb-3" style="height: 5px">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Hand to Hand Combat</small>
                          <div class="progress mb-3" style="height: 5px">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: ${person.HandToHandCombat}%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Combat Strategry</small>
                          <div class="progress mb-3" style="height: 5px">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                      <div class="card h-100">
                        <div class="card-body">
                          <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Technical Skillset</i></h6>
                          <small>Piloting</small>
                          <div class="progress mb-3" style="height: 5px">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Infeltration</small>
                          <div class="progress mb-3" style="height: 5px">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Computers and Technology</small>
                          <div class="progress mb-3" style="height: 5px">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Situational Awareness</small>
                          <div class="progress mb-3" style="height: 5px">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Overall Intelligence</small>
                          <div class="progress mb-3" style="height: 5px">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    `;
};
