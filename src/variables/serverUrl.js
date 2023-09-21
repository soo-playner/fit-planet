let serverUrl = "http://localhost:8080/api/v1/";
let passUrl = "https://fit-planet-hpauth.wizclass.kr/";

if (window.location.href.includes("wizclass")) {
    serverUrl = "https://fit-planet.wizclass.kr/api/v1/";
} else if (!window.location.href.includes("localhost")) {
    serverUrl = "https://fit-planet.kr/api/v1/";
}

export { serverUrl, passUrl };
