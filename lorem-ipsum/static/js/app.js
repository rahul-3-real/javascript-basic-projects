const text = [
  `I'm baby sartorial ugh letterpress, umami vinyl cliche try-hard quinoa deep v glossier readymade dreamcatcher pok pok. Mustache disrupt art party fam bicycle rights bushwick taxidermy aesthetic pabst. XOXO venmo gochujang truffaut, mixtape air plant seitan asymmetrical squid you probably haven't heard of them coloring book polaroid four dollar toast vice. Man braid activated charcoal hella tbh. Pug actually crucifix, retro meh poutine fixie taiyaki mlkshk taxidermy stumptown beard.`,
  `Single-origin coffee wayfarers yr irony mumblecore. Copper mug four loko live-edge semiotics ramps distillery. Adaptogen PBR&B brooklyn letterpress semiotics lomo jianbing mumblecore coloring book truffaut drinking vinegar crucifix. Jianbing tofu pork belly tousled bitters. Asymmetrical heirloom narwhal, 8-bit craft beer trust fund sustainable keytar activated charcoal selvage. Schlitz flannel scenester kombucha wolf hell of messenger bag VHS, tousled pitchfork.`,
  `Before they sold out prism snackwave master cleanse, mlkshk YOLO lyft. Put a bird on it cray edison bulb mlkshk tousled yr bicycle rights drinking vinegar vinyl jean shorts. Stumptown narwhal street art, umami jianbing poutine air plant. La croix pork belly cronut kitsch. Banjo stumptown mixtape letterpress ugh plaid adaptogen squid pitchfork. Readymade 8-bit hella snackwave, pour-over food truck listicle dreamcatcher messenger bag intelligentsia. Ramps vaporware unicorn everyday carry, hexagon poke paleo narwhal tbh locavore live-edge.`,
  `Cloud bread pug kale chips try-hard flannel forage leggings, retro craft beer occupy everyday carry fixie pitchfork yr. Enamel pin kinfolk retro pinterest bitters pop-up. Adaptogen bicycle rights heirloom tattooed, 90's schlitz taiyaki kogi semiotics four dollar toast messenger bag glossier. Wayfarers tilde flannel ennui four dollar toast affogato. Tofu woke kinfolk kickstarter, umami next level live-edge kogi typewriter.`,
  `Unicorn photo booth enamel pin humblebrag iPhone. Brunch gochujang art party slow-carb everyday carry. Actually tote bag irony, mumblecore PBR&B salvia dreamcatcher squid cardigan shabby chic roof party iPhone knausgaard organic keffiyeh. Hexagon master cleanse banjo sriracha. Pinterest kombucha migas keytar hammock. Pour-over synth migas, truffaut jean shorts palo santo chartreuse.`,
  `Typewriter kombucha banjo poke raw denim roof party live-edge pok pok raclette. Williamsburg man bun 3 wolf moon, tote bag affogato franzen pitchfork hammock austin leggings poutine. YOLO squid enamel pin small batch chia swag gluten-free, viral vice umami VHS echo park chillwave. Heirloom man braid scenester mlkshk master cleanse authentic. Hoodie etsy tumblr, swag copper mug hell of hashtag live-edge edison bulb meh butcher snackwave. Organic cronut synth taxidermy migas tofu coloring book, lumbersexual pour-over. 3 wolf moon la croix fanny pack unicorn swag occupy quinoa food truck farm-to-table.`,
  `Actually bespoke 3 wolf moon mumblecore irony succulents man braid paleo banh mi trust fund celiac lyft locavore. Bushwick master cleanse pork belly distillery polaroid fam try-hard ramps schlitz asymmetrical yuccie blog artisan mixtape. Franzen umami direct trade vice taxidermy offal jean shorts, quinoa waistcoat mlkshk taiyaki hexagon echo park hammock meggings. Coloring book meh thundercats pug. Forage jean shorts shaman, raw denim hexagon stumptown sustainable meh quinoa gochujang PBR&B before they sold out jianbing art party.`,
  `Tattooed cray chia hammock, blog mumblecore pickled pork belly gluten-free waistcoat raclette pitchfork. Lo-fi 90's microdosing keytar. Thundercats bicycle rights photo booth schlitz try-hard vice succulents +1 tofu edison bulb four loko cliche tattooed ramps chartreuse. Shabby chic pinterest chia, narwhal bicycle rights marfa hoodie pitchfork fashion axe. DIY deep v truffaut stumptown twee af.`,
  `Quinoa artisan chillwave, pour-over cloud bread PBR&B stumptown kinfolk gochujang brooklyn adaptogen photo booth church-key. Brunch drinking vinegar copper mug fingerstache asymmetrical PBR&B deep v, polaroid biodiesel paleo swag meditation la croix. Gentrify live-edge DIY, bespoke activated charcoal snackwave +1 leggings food truck 8-bit. Fashion axe mlkshk humblebrag scenester swag fixie. Fam butcher knausgaard waistcoat deep v af vice keffiyeh, gluten-free cold-pressed small batch. Snackwave green juice pitchfork quinoa, helvetica raw denim normcore asymmetrical craft beer meggings hot chicken. Ennui gentrify man braid affogato next level thundercats.`,
  `Selvage meh +1 hammock, locavore brunch polaroid. Skateboard raclette salvia, tumeric mumblecore 3 wolf moon cold-pressed messenger bag scenester distillery viral drinking vinegar. Sustainable raclette tbh air plant cliche chartreuse meggings lomo butcher edison bulb. Pickled meggings unicorn farm-to-table celiac twee. Squid blue bottle leggings franzen, kogi health goth la croix sustainable vape bicycle rights gochujang copper mug pitchfork.`,
];

const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const result = document.querySelector(".card-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = parseInt(amount.value);
  //   const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value <= 0 || value > 10) {
    result.innerHTML = `<p class="error">Value should be between 1 - 10</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map((item) => {
        return `<p class="text">${item}</p>`;
      })
      .join(" ");
    result.innerHTML = tempText;
  }
});
