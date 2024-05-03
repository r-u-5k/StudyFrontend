export const GuestMainPage = () => {
    const template = `<img src='image/enter.png' width="540" height="350px" style="margin: 10px" />`;
    let pageObject = {
        template,
        render() {
            document.querySelector('#content').innerHTML = template;
        }
    }
    return pageObject;
};