export { GetSwapi, GetSwapiAll, GetSwapiRoot };

async function GetSwapi(type, id) {
  return fetch(`${GetSwapiResourcePath(type)}/${id}`);
}

async function GetSwapiAll(type, id) {
  return fetch(`${GetSwapiResourcePath(type)}`);
}

async function GetSwapiRoot(type, id) {
  return fetch(`${GetSwapiResourcePath()}`);
}

function GetSwapiResourcePath(type) {
  const rootPath = `https://swapi.dev/api/`;
  return type ? `${rootPath}/${type}` : rootPath;
}
