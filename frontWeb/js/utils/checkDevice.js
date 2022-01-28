export default () => {
    let deviceWidth = window.innerWidth;
    let device = deviceWidth >= 1024 ? 'lg' : deviceWidth >= 768 ? 'md' : 'sm';
    return device
};