function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    resolve: {
      tagList: function(Songs) {
        return Songs.getTagList().then((tagList) => tagList);
      },
      songs: function(Songs) {
        return Songs.getSongs().then(songs => songs);
      }
    }
  });

};

export default HomeConfig;
