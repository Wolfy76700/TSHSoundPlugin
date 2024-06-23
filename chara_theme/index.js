(($) => {

  function Start() {}

  var data = {};
  var oldData = {};

  let oldCharacode = "";
  let oldGame = "";
  
  var path = window.location.pathname;
  var page = path.split("/").pop();
  var team = page.split(".")[0].split("_")[0].replace('t','');
  var player = page.split(".")[0].split("_")[1].replace('p','');
  var charaindex = page.split(".")[0].split("_")[2].replace('c','');
  console.log(team);
  
  
  async function Update() {
    oldData = data;
    data = await getData();

    let characode = data.score[1].team[team].player[player].character[charaindex].codename;
    let game = data.game.codename;

    if ((JSON.stringify(game) != oldGame) || (JSON.stringify(characode) != oldCharacode)) {
      console.log(oldCharacode);
      console.log(characode);
      oldCharacode = JSON.stringify(characode);
      oldGame = JSON.stringify(game);


      let elements = `
		<audio controls autoplay loop>
		  <source src="./files/${game}/sound_${characode}_0.mp3" type="audio/mpeg">
		</audio> 
		`;

      $(".container").html(elements);
    }
  }

  Update();
  $(window).on("load", () => {
    $("body").fadeTo(500, 1, async () => {
      Start();
      setInterval(Update, 1000);
    });
  });
})(jQuery);