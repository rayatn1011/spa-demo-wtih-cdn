//主機網址
const host = {
    local: location.protocol + '//' + location.hostname + '/integration_wrpi_coastal/',
    example: 'https://www.other.com',
}
// API網址
const backstage = host.local + 'backstage/auth/';

//創建axios實例
const authAPI = axios.create({
    baseURL: backstage,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
    timeout: 1000,
});
//API請求列表
async function apiUserInfo() {
    try {
        const response = await authAPI({
            method: 'get',
            url :'/user?{"a":1,"b":true}',
        });
        return response
    } catch (error) {
        console.error(error);
    }
}

export {
    apiUserInfo,
}