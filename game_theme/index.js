(($) => {

  function Start() {}

  var data = {};
  var oldData = {};

  let oldGame = "";
  
  var path = window.location.pathname;

  
  
  async function Update() {
    oldData = data;
    data = await getData();

    let game = data.game.codename;

    if ((JSON.stringify(game) != oldGame)) {
      oldGame = JSON.stringify(game);


      let elements = `
		<audio controls autoplay>
		  <source src="./files/sound_${game}.mp3" type="audio/mpeg">
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