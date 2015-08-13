fbook.factory('recipeService',function($firebaseArray) {
    var fb = new Firebase("https://intense-heat-2609.firebaseio.com");
    var recs = $firebaseArray(fb);
    var recipeService = {
        all: recs,
        get: function(recId) {
            return recs.$getRecord(recId);
        }        
    };
    return recipeService;
});




         
            
          
          
          