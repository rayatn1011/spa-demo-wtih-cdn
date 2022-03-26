//主機網域
const host = {
    local: `${location.protocol}//${location.hostname}`,
    example: 'https://www.example.com',
};

//創建axios API實例
const authApi = axios.create({
    baseURL: `${host.local}/backstage/auth/`,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
    timeout: 10000,
});

export {
    authApi,
}