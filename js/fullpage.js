$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['AboutMe', 'DairyProject', 'EnterpriseUX','IHGProject', 'SonyEricsson', 'HappyFish', 'SideProjects', 'Contact'],
    sectionsColor: ['#ffe59c', '#5582AF', '#5582AF', '#FFF6E5', '#FF7E65', '#2185C6', '#3D454C'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['About Me', 'NZMP', 'EnterpriseUX', 'Hospitality', 'Sony Ericsson', 'Happy Fish', 'Prototyping', 'Contact'],
    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: false,
    fitToSection: false,
    fitToSectionDelay: 300,
    showActiveTooltip: false,
    responsiveWidth: 768
  });
});
