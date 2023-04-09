let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #eb5e7f;">Estudié ingeniería química.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
