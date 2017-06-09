$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['AboutMe', 'EnterpriseUX', 'eCommerce', 'Hospitality', 'SonyEricsson', 'HappyFish', 'Prototyping', 'Contact'],
    sectionsColor: ['#FFF6E5', '#5582AF', '#FFF6E5', '#FF7E65', '#2185C6', '#3D454C'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['About Me', 'EnterpriseUX', 'eCommerce', 'Hospitality', 'Sony Ericsson', 'Happy Fish', 'Prototyping', 'Contact'],
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
