$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['AboutMe', 'Huawei', 'SonyEricsson', 'HappyFish', 'Prototyping', 'MyWork'],
    sectionsColor: ['#FFF6E5', '#2185C6', '#FF7E65', '#2185C6', '#3D454C'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['About Me', 'Huawei', 'Sony Ericsson', 'Happy Fish', 'Prototyping', 'My Work'],
    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: false,
    fitToSection: true,
    fitToSectionDelay: 300,
    showActiveTooltip: false,
    responsiveWidth: 768
  });
});
