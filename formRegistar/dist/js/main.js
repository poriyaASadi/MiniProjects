const $ =document 
var scene = $.getElementById('scene');
// isitost js 
iziToast.show({
    title: 'HI',
    titleColor : '#fff',
    message: 'welcome to form login',
    messageColor : '#ffff',
    position: 'topRight',
    backgroundColor: '#f0f0f044',
});
// paralex js
var parallaxInstance = new Parallax(scene, {
  relativeInput: false,
  clipRelativeInput: true, // Disable the clipRelativeInput option
  pointerEvents : true
});
