//主機網址
const host = {
    local: location.protocol + '//' + location.hostname + '/integration_wrpi_coastal/',
    example: 'https://www.example.com',
};

//創建axios API實例
const authAPI = axios.create({
    baseURL: host.local + 'backstage/auth/',
    headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
    timeout: 1000,
});

export {
    authAPI,
}