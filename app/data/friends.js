// ===============================================================================
// DATA
// Data to hold array of the coolest friends to get matched with!
// ===============================================================================

var friendsArray = [
    {
      name: "Mr. Cain",
      photo: "http://heroes.blizzplanet.com/wp-content/uploads/2018/04/deckard-cain-transparent.png",
      score: [
        5,3,4,4,5,3,4,5,4,4
      ]
    },
    {
      name: "Jack Black",
      photo: "https://shawetcanada.files.wordpress.com/2018/09/gettyimages-1035685734.jpg?quality=80&strip=all&w=670&h=447&crop=1&zoom=2",
      score: [
        2,2,1,1,1,1,1,1,2,1
      ]
    }
  ];

  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  