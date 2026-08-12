export default function MainContent(){
return(
  <main>
  <header></header>
  <h1>Moomu</h1>
  <span className="job-title">Frontend Developer</span>
  <span className="web-title">moomu.website</span>
  <div className="Link-divs">
    <button className="email"><i className="fa-solid fa-envelope"></i> Email</button>
    <button className="linkedin"><i className="fa-brands fa-linkedin"></i> Linkedin</button>
  </div>
  <section>
    <h2>About</h2>
    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
    <h2>Intrests</h2>
    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
  </section>
  <footer>
    <div className="footer-items">
    <i class="fa-brands fa-square-twitter"></i>
    <i class="fa-brands fa-square-facebook"></i>
    <i class="fa-brands fa-square-instagram"></i>
    <i class="fa-brands fa-square-github"></i> 
    </div>
  </footer>
  </main>
)
}