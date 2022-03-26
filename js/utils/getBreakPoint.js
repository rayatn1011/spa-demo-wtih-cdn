export default () => {
    const deviceWidth = window.innerWidth;
    const breakPoint = deviceWidth >= 1024 ? 'lg' : deviceWidth >= 768 ? 'md' : 'sm';
    return breakPoint
};